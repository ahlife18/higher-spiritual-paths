import React, { useState } from 'react';

function Podcast() {
  const [currentEpisode, setCurrentEpisode] = useState('intro');

  // Generate episode list from intro to episode35
  const episodes = [
    { id: 'intro', label: 'Intro' },
    ...Array.from({ length: 35 }, (_, i) => ({
      id: `episode${i + 1}`,
      label: `Episode ${i + 1}`
    }))
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎙️ Podcast</h1>
      <p style={styles.subtitle}>Listen to the teachings and insights from Higher Spiritual Paths.</p>

      <div style={styles.playerContainer}>
        <h2 style={styles.episodeTitle}>{episodes.find(e => e.id === currentEpisode)?.label}</h2>
        <video
          key={currentEpisode}
          controls
          style={styles.videoPlayer}
          autoPlay={false}
        >
          <source src={`/${currentEpisode}.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div style={styles.episodeList}>
          {episodes.map((ep) => (
            <button
              key={ep.id}
              onClick={() => setCurrentEpisode(ep.id)}
              style={{
                ...styles.episodeBtn,
                backgroundColor: currentEpisode === ep.id ? '#5B2A8C' : '#F5EEF8',
                color: currentEpisode === ep.id ? '#fff' : '#5B2A8C',
              }}
            >
              {ep.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '4rem 2rem',
    background: '#F5EEF8',
    minHeight: '80vh',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '3rem',
    color: '#5B2A8C',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '2rem',
  },
  playerContainer: {
    maxWidth: '700px',
    margin: '0 auto',
    background: '#fff',
    padding: '2rem',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  },
  episodeTitle: {
    fontSize: '1.8rem',
    color: '#5B2A8C',
    marginBottom: '1rem',
  },
  videoPlayer: {
    width: '100%',
    borderRadius: '12px',
    marginBottom: '2rem',
    background: '#000',
  },
  episodeList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '0.5rem',
    maxHeight: '300px',
    overflowY: 'auto',
    padding: '0.5rem',
  },
  episodeBtn: {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    transition: 'all 0.2s',
  },
};

export default Podcast;