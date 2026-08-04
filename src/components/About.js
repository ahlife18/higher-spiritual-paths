import { pageContent } from '../data/spiritualData';

function About() {
  const { about } = pageContent;
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>The Vision</h1>
      <div style={styles.box}>
        <p style={styles.preamble}>{about.preamble}</p>
      </div>
      
      <div style={styles.truths}>
        <div style={styles.card}>
          <h3>1. You Are Not Separate</h3>
          <p>Underneath the story of "I," there is connection to others, to nature, to awareness itself.</p>
        </div>
        <div style={styles.card}>
          <h3>2. The Present Is The Door</h3>
          <p>The past is memory. The future is imagination. Only this moment is real enough to hold truth.</p>
        </div>
        <div style={styles.card}>
          <h3>3. Love Is The Law</h3>
          <p>Widen the circle of care until it includes yourself, your neighbor, your enemy, the earth.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '80vh',
    background: '#fdfbf7', /* Soft morning light */
    padding: '4rem 2rem',
    fontFamily: 'Lato, sans-serif',
    textAlign: 'center'
  },
  title: {
    fontSize: '3rem',
    color: '#4a4036', /* Warm earth */
    marginBottom: '2rem',
    fontFamily: 'Playfair Display, serif'
  },
  box: {
    background: '#ffffff', /* Crisp white petal */
    padding: '2rem',
    borderRadius: '20px',
    maxWidth: '800px',
    margin: '0 auto 3rem',
    boxShadow: '0 8px 30px rgba(216, 195, 165, 0.15)'
  },
  preamble: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#4a4036'
  },
  truths: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    maxWidth: '900px',
    margin: '0 auto'
  },
  card: {
    background: '#ffffff',
    padding: '2rem',
    borderRadius: '20px',
    boxShadow: '0 8px 30px rgba(216, 195, 165, 0.15)',
    borderTop: '4px solid #e8c56d' /* Sunflower gold */
  }
};

export default About;