import { useNavigate } from 'react-router-dom';
import { pageContent } from '../data/spiritualData';

function Home() {
  const navigate = useNavigate();
  const { hero } = pageContent;

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>{hero.title}</h1>
        <h2 style={styles.subtitle}>{hero.subtitle}</h2>
        <p style={styles.text}>{hero.text}</p>
        <button 
          onClick={() => navigate('/the-path')} 
          style={styles.button}
        >
          Explore the Path
        </button>
      </div>
      <div style={styles.section}>
        <h3>🌸 "We are the remembrance."</h3>
        <p style={{ maxWidth: '600px', margin: '0 auto', lineHeight: '1.8', color: '#4a4036' }}>
          We are not a new religion. We are a clearing in the forest where travelers from many paths can rest and compare maps.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '80vh',
    background: '#fdfbf7',
    fontFamily: 'Lato, sans-serif'
  },
  hero: {
    /* 🌿 Nature-inspired background (soft meadow with sunlight) */
    background: 'linear-gradient(rgba(253, 251, 247, 0.85), rgba(253, 251, 247, 0.95)), url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '6rem 2rem',
    textAlign: 'center',
    color: '#4a4036'
  },
  title: {
    fontSize: '4rem',
    marginBottom: '0.5rem',
    letterSpacing: '2px',
    color: '#4a4036',
    fontFamily: 'Playfair Display, serif'
  },
  subtitle: {
    fontSize: '2rem',
    color: '#e8c56d', /* Sunflower Gold */
    fontWeight: '300',
    fontStyle: 'italic'
  },
  text: {
    maxWidth: '700px',
    margin: '2rem auto',
    lineHeight: '1.8',
    fontSize: '1.2rem',
    opacity: 0.9,
    color: '#4a4036'
  },
  button: {
    padding: '1rem 2.5rem',
    background: '#8fa88a', /* Sage Green */
    color: '#ffffff',
    border: 'none',
    borderRadius: '30px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '1rem',
    fontFamily: 'Lato, sans-serif'
  },
  section: {
    textAlign: 'center',
    padding: '4rem 2rem',
    maxWidth: '800px',
    margin: '0 auto'
  }
};

export default Home;