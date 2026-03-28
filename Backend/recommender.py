# recommender.py

# This dictionary maps a mood string to a list of song objects
MOOD_DATA = {
    "Happy": [
        {"title": "Walking on Sunshine", "link": "https://open.spotify.com/track/05UVBnt0Cuj3i9uP70626Z", "artist": "Katrina & The Waves"},
        {"title": "Can't Stop the Feeling", "link": "https://open.spotify.com/track/1W7M99p9YpG6Z5P5P5P5P5", "artist": "Justin Timberlake"},
        {"title": "Happy", "link": "https://open.spotify.com/track/60nZiwp0v4Za21Ygnld5Rh", "artist": "Pharrell Williams"}
    ],
    "Sad": [
        {"title": "Someone Like You", "link": "https://open.spotify.com/track/4vUm3u7J0vDy979X8S9fCH", "artist": "Adele"},
        {"title": "Fix You", "link": "https://open.spotify.com/track/7LVHVUUE3gp03u6n3vC0du", "artist": "Coldplay"},
        {"title": "All I Want", "link": "https://open.spotify.com/track/0NChpS5v9bT5O1X9R2Y3W5", "artist": "Kodaline"}
    ],
    "Energetic": [
        {"title": "Power", "link": "https://open.spotify.com/track/27mwbSHe9qY7p9X8S9fCH", "artist": "Kanye West"},
        {"title": "Eye of the Tiger", "link": "https://open.spotify.com/track/27mwbSHe9qY7p9X8S9fCH", "artist": "Survivor"}
    ],
    "Calm": [
        {"title": "Weightless", "link": "https://open.spotify.com/track/60nZiwp0v4Za21Ygnld5Rh", "artist": "Marconi Union"},
        {"title": "Claire de Lune", "link": "https://open.spotify.com/track/4vUm3u7J0vDy979X8S9fCH", "artist": "Claude Debussy"}
    ]
}