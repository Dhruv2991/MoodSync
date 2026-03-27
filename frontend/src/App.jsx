import React, { useState, useEffect } from "react";
import "./App.css";

// Dynamic Visualizer Component
const Visualizer = () => (
  <div className="visualizer">
    {[...Array(10)].map((_, i) => (
      <div key={i} className="bar" style={{ animationDelay: `${i * 0.05}s` }}></div>
    ))}
  </div>
);

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [mode, setMode] = useState("match");
  const [isChanging, setIsChanging] = useState(false);

  // Your original mood data structure
  const moodData = {
    happy: { confidence: 92, match: [{ title: "Electric Sky", artist: "Neon", link: "#" }, { title: "Joy Ride", artist: "Solar", link: "#" }, { title: "Vibe", artist: "Luna", link: "#" }], change: [{ title: "Deep Zen", artist: "Mantra", link: "#" }, { title: "Focus", artist: "Neural", link: "#" }, { title: "Still", artist: "Void", link: "#" }] },
    sad: { confidence: 88, match: [{ title: "Midnight", artist: "Echo", link: "#" }, { title: "Rain", artist: "Noir", link: "#" }, { title: "Cold", artist: "Static", link: "#" }], change: [{ title: "Horizon", artist: "Hope", link: "#" }, { title: "Spark", artist: "Ignite", link: "#" }, { title: "Bloom", artist: "Petal", link: "#" }] },
    stressed: { confidence: 85, match: [{ title: "Breathing", artist: "Soft", link: "#" }, { title: "Piano", artist: "Keys", link: "#" }, { title: "Mist", artist: "Aura", link: "#" }], change: [{ title: "Turbo", artist: "Engine", link: "#" }, { title: "Rush", artist: "Sonic", link: "#" }, { title: "Power", artist: "Volt", link: "#" }] },
  };

  useEffect(() => {
    setIsChanging(true);
    const timer = setTimeout(() => setIsChanging(false), 500);
    return () => clearTimeout(timer);
  }, [emotion]);

  const currentSongs = moodData[emotion][mode];

  return (
    <div className={`app ${emotion}`}>
      {/* Dynamic Waveform Background */}
      <div className="waveform-container">
        <div className="wave"></div>
      </div>

      <div className={`transition-overlay ${isChanging ? 'flash-active' : ''}`}></div>

      <div className="overlay">
        <header className="header" style={{textAlign: 'left', marginBottom: '60px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '30px'}}>
            <h1>MOODSYNC</h1>
            <Visualizer />
          </div>
          <p style={{opacity: 0.5, letterSpacing: '4px'}}>NEURAL_PROCESSING_ACTIVE // {emotion.toUpperCase()}</p>
        </header>

        <main className="main-grid">
          <section className="card">
            <h2 style={{fontSize: '0.8rem', opacity: 0.6, letterSpacing: '2px', marginBottom: '20px'}}>VISION_AI_FEED</h2>
            <div className="camera-box">
              <div className="scan-line"></div>
              <p style={{zIndex: 2, fontSize: '0.7rem', color: 'var(--current-glow)', fontWeight: 'bold'}}>BIOMETRIC_LOCK_ACTIVE</p>
            </div>
            
            <div style={{marginTop: '20px'}}>
              <h3 style={{fontSize: '2.5rem'}}>{emotion.toUpperCase()}</h3>
              <p style={{opacity: 0.7}}>Confidence: {moodData[emotion].confidence}%</p>
            </div>

            <div style={{display: 'flex', gap: '10px', marginTop: '30px'}}>
              {['happy', 'sad', 'stressed'].map(m => (
                <button key={m} onClick={() => setEmotion(m)} className={emotion === m ? 'active-btn' : ''}>{m}</button>
              ))}
            </div>
          </section>

          <section className="card">
            <h2 style={{fontSize: '0.8rem', opacity: 0.6, letterSpacing: '2px', marginBottom: '30px'}}>CONTROL_LOGIC</h2>
            <div style={{display: 'flex', gap: '10px', marginBottom: '30px'}}>
              <button className={mode === "match" ? "active-btn" : ""} onClick={() => setMode("match")}>Match</button>
              <button className={mode === "change" ? "active-btn" : ""} onClick={() => setMode("change")}>Shift</button>
            </div>
            <p style={{lineHeight: '1.6', fontSize: '1.1rem'}}>
              System is currently adjusting your audio frequencies to <strong>{mode}</strong> your current state.
            </p>
          </section>

          <section className="card" style={{gridColumn: 'span 2'}}>
            <h2 style={{fontSize: '0.8rem', opacity: 0.6, letterSpacing: '2px', marginBottom: '30px'}}>CURATED_NEURAL_TRACKS</h2>
            <div className="songs-list">
              {currentSongs.map((song, i) => (
                <div className="song-item" key={i}>
                   <div>
                      <h3 style={{fontSize: '1.2rem', margin: 0}}>{song.title}</h3>
                      <p style={{opacity: 0.5, margin: 0}}>{song.artist}</p>
                   </div>
                   <a href={song.link} className="active-btn" style={{padding: '10px 20px', textDecoration: 'none', borderRadius: '10px', fontSize: '0.8rem'}}>STREAM</a>
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