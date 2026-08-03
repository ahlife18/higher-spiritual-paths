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
        <h3>🧘 "We are the remembrance."</h3>
        <p style={{ maxWidth: '600px', margin: '0 auto', lineHeight: '1.8', color: '#555' }}>
          We are not a new religion. We are a clearing in the forest where travelers from many paths can rest and compare maps.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '80vh',
    background: '#fcf6f0',
    fontFamily: 'Georgia, serif'
  },
  hero: {
    background: 'linear-gradient(rgba(44, 27, 19, 0.8), rgba(44, 27, 19, 0.9)), url(https://images.unsplash.com/photo-1508672019048-805c876b93cc?w=1200)',
    backgroundSize: 'cover',
    padding: '6rem 2rem',
    textAlign: 'center',
    color: '#fcf6f0'
  },
  title: {
    fontSize: '4rem',
    marginBottom: '0.5rem',
    letterSpacing: '2px'
  },
  subtitle: {
    fontSize: '2rem',
    color: '#e8d5b5',
    fontWeight: '300'
  },
  text: {
    maxWidth: '700px',
    margin: '2rem auto',
    lineHeight: '1.8',
    fontSize: '1.2rem',
    opacity: 0.9
  },
  button: {
    padding: '1rem 2.5rem',
    background: '#c2a66b',
    color: '#2c1b13',
    border: 'none',
    borderRadius: '30px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '1rem',
    transition: 'transform 0.2s'
  },
  section: {
    textAlign: 'center',
    padding: '4rem 2rem',
    maxWidth: '800px',
    margin: '0 auto'
  }
};

export default Home;