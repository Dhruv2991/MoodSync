import { useState } from "react";
import "./App.css";

function App() {
  const moodData = {
    happy: {
      confidence: 92,
      match: [
        { title: "Happy Vibes", artist: "Artist A", link: "https://youtube.com" },
        { title: "Dance Energy", artist: "Artist B", link: "https://youtube.com" },
        { title: "Feel Good Beats", artist: "Artist C", link: "https://youtube.com" },
      ],
      change: [
        { title: "Focus Flow", artist: "Artist D", link: "https://youtube.com" },
        { title: "Calm Reset", artist: "Artist E", link: "https://youtube.com" },
        { title: "Soft Chill", artist: "Artist F", link: "https://youtube.com" },
      ],
    },
    sad: {
      confidence: 88,
      match: [
        { title: "Soft Memories", artist: "Artist G", link: "https://youtube.com" },
        { title: "Midnight Rain", artist: "Artist H", link: "https://youtube.com" },
        { title: "Blue Sky", artist: "Artist I", link: "https://youtube.com" },
      ],
      change: [
        { title: "Rise Again", artist: "Artist J", link: "https://youtube.com" },
        { title: "Sunny Day", artist: "Artist K", link: "https://youtube.com" },
        { title: "Energy Boost", artist: "Artist L", link: "https://youtube.com" },
      ],
    },
    stressed: {
      confidence: 85,
      match: [
        { title: "LoFi Calm", artist: "Artist M", link: "https://youtube.com" },
        { title: "Breathing Space", artist: "Artist N", link: "https://youtube.com" },
        { title: "Peaceful Piano", artist: "Artist O", link: "https://youtube.com" },
      ],
      change: [
        { title: "Gentle Reset", artist: "Artist P", link: "https://youtube.com" },
        { title: "Mind Refresh", artist: "Artist Q", link: "https://youtube.com" },
        { title: "Balanced Beats", artist: "Artist R", link: "https://youtube.com" },
      ],
    },
  };

  const [emotion, setEmotion] = useState("happy");
  const [mode, setMode] = useState("match");

  const currentMood = moodData[emotion];
  const songs = currentMood[mode];

  return (
    <div className={`app ${emotion}`}>
      <div className="overlay">
        <header className="header">
          <h1>MoodSync 🎧</h1>
          <p>Real-time emotion-based smart music recommendation</p>
        </header>

        <main className="main-grid">
          <section className="card camera-card">
            <h2>Live Emotion Detection</h2>
            <div className="camera-box">
              <p>Camera Feed Placeholder</p>
            </div>

            <div className="emotion-info">
              <h3>Detected Emotion: {emotion.toUpperCase()}</h3>
              <p>Confidence: {currentMood.confidence}%</p>
            </div>

            <div className="demo-buttons">
              <button onClick={() => setEmotion("happy")}>Happy</button>
              <button onClick={() => setEmotion("sad")}>Sad</button>
              <button onClick={() => setEmotion("stressed")}>Stressed</button>
            </div>
          </section>

          <section className="card controls-card">
            <h2>Recommendation Mode</h2>
            <div className="mode-buttons">
              <button
                className={mode === "match" ? "active-btn" : ""}
                onClick={() => setMode("match")}
              >
                Match Mood
              </button>
              <button
                className={mode === "change" ? "active-btn" : ""}
                onClick={() => setMode("change")}
              >
                Change Mood
              </button>
            </div>

            <div className="explanation-box">
              <p>
                You seem <strong>{emotion}</strong>. We are recommending songs to{" "}
                <strong>{mode === "match" ? "match your mood" : "change your mood"}</strong>.
              </p>
            </div>
          </section>

          <section className="card songs-card">
            <h2>Recommended Songs</h2>
            <div className="songs-list">
              {songs.map((song, index) => (
                <div className="song-item" key={index}>
                  <div>
                    <h3>{song.title}</h3>
                    <p>{song.artist}</p>
                  </div>
                  <a href={song.link} target="_blank" rel="noreferrer">
                    Play
                  </a>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;