from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from emotiefflib.facial_analysis import EmotiEffLibRecognizer
import cv2
import numpy as np
from PIL import Image
import io

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

device = "cpu"
fer = EmotiEffLibRecognizer(engine="torch", device=device)
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")

def detect_emotion(image_bytes):
    img = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    frame = np.array(img)
    gray = cv2.cvtColor(frame, cv2.COLOR_RGB2GRAY)

    faces = face_cascade.detectMultiScale(
        gray, scaleFactor=1.1, minNeighbors=5, minSize=(48, 48)
    )

    try:
        # CASE 1: Face found → use cropped (preferred)
        if len(faces) > 0:
            x, y, w, h = faces[0]
            cropped = frame[y:y+h, x:x+w]
            cropped = cv2.resize(cropped, (224, 224))

            emotion, scores = fer.predict_emotions(cropped, logits=True)
            conf = float(scores[0].max())

            return {
                "mood": emotion[0],
                "confidence": round(conf, 4),
                "source": "face"
            }

        # CASE 2: No face → fallback to full image
        else:
            resized = cv2.resize(frame, (224, 224))

            emotion, scores = fer.predict_emotions(resized, logits=True)
            conf = float(scores[0].max())

            # confidence threshold
            if conf < 0.5:
                return None

            return {
                "mood": emotion[0],
                "confidence": round(conf, 4),
                "source": "full_image"
            }

    except Exception:
        return None

@app.post("/detect")
async def detect(file: UploadFile = File(...)):
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File must be an image")

    image_bytes = await file.read()
    result = detect_emotion(image_bytes)

    if result is None:
        raise HTTPException(status_code=404, detail="No faces detected")

    return {"faces": result}