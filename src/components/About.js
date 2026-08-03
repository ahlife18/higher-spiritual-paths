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
    background: '#fcf6f0',
    padding: '4rem 2rem',
    fontFamily: 'Georgia, serif',
    textAlign: 'center'
  },
  title: {
    fontSize: '3rem',
    color: '#2c1b13',
    marginBottom: '2rem'
  },
  box: {
    background: '#e8d5b5',
    padding: '2rem',
    borderRadius: '15px',
    maxWidth: '800px',
    margin: '0 auto 3rem'
  },
  preamble: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#2c1b13'
  },
  truths: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    maxWidth: '900px',
    margin: '0 auto'
  },
  card: {
    background: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
  }
};

export default About;