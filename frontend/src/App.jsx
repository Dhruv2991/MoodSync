import "./App.css";

function App() {
  const mockData = {
    emotion: "Happy",
    confidence: 92,
    mode: "Match Mood",
    songs: [
      {
        title: "Happy Vibes",
        artist: "Artist A",
        link: "https://youtube.com",
      },
      {
        title: "Chill Energy",
        artist: "Artist B",
        link: "https://youtube.com",
      },
      {
        title: "Mood Booster",
        artist: "Artist C",
        link: "https://youtube.com",
      },
    ],
  };

  return (
    <div className="app">
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
              <h3>Detected Emotion: {mockData.emotion}</h3>
              <p>Confidence: {mockData.confidence}%</p>
            </div>
          </section>

          <section className="card controls-card">
            <h2>Recommendation Mode</h2>
            <div className="mode-buttons">
              <button className="active-btn">Match Mood</button>
              <button>Change Mood</button>
            </div>

            <div className="explanation-box">
              <p>
                You seem <strong>{mockData.emotion.toLowerCase()}</strong>. We
                are recommending songs to{" "}
                <strong>{mockData.mode.toLowerCase()}</strong>.
              </p>
            </div>
          </section>

          <section className="card songs-card">
            <h2>Recommended Songs</h2>
            <div className="songs-list">
              {mockData.songs.map((song, index) => (
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