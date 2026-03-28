import sys
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

sys.path.append(os.path.dirname(__file__))
from recommender import MOOD_DATA

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/recommend")
def get_recommendation(emotion: str, mode: str):
    # Normalize input
    input_emotion = emotion.capitalize()
    target_mood = input_emotion
    
    if mode == "change":
        mood_shifter = {"Sad": "Happy", "Angry": "Calm"}
        target_mood = mood_shifter.get(input_emotion, "Happy")
    
    songs = MOOD_DATA.get(target_mood, MOOD_DATA["Happy"])
    
    # Returning the EXACT JSON format requested
    return {
        "emotion": emotion,
        "confidence": 92, # Placeholder value
        "mode": mode,
        "songs": songs
    }