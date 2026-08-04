function ThePath() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>The Higher Spiritual Path</h1>
        <p style={styles.subtitle}>"No Religion. All Religion."</p>
      </div>

      <div style={styles.content}>
        <div style={styles.section}>
          <h2>Preamble: Why This Exists</h2>
          <p>
            We gather not under a banner, not behind a wall, not within a name that owns us. 
            We gather to meditate, to delve into Life more deeply, to remember.
          </p>
          <p>
            This fellowship is called “no religion and all religion” because we have seen the pattern: 
            every sacred tradition points toward the same center, yet every institution builds a fence around it. 
            We step inside the circle. We sit at the center. We refuse the fence.
          </p>
        </div>

        <div style={styles.section}>
          <h2>Our Core Identity</h2>
          <p><strong>We Are No Religion.</strong> We hold no creed you must recite to belong. We require no baptism, no initiation fee. We ask you to leave your fear of other faiths at the door.</p>
          <p><strong>We Are All Religion.</strong> The mystic in the desert, the monk in the mountain, the grandmother praying by lamplight—all of them are our teachers. We listen to each tradition until it tells us what it was always trying to say: <em>Look. See. Be.</em></p>
          <p><strong>We Are A Fellowship of Insight.</strong> Our purpose is growth. Not accumulation of facts, but expansion of capacity. Capacity to hold paradox without collapsing.</p>
        </div>

        <div style={styles.section}>
          <h2>Three Plain Truths</h2>
          <div style={styles.truthCard}>
            <h3>Truth One: You Are Not Separate</h3>
            <p>Underneath the story of "I," there is connection to others, to nature, to awareness itself. When you act from connection, you grow.</p>
          </div>
          <div style={styles.truthCard}>
            <h3>Truth Two: The Present Is The Door</h3>
            <p>The past is memory. The future is imagination. Only this moment is real enough to hold truth. We practice presence not as escape, but as arrival.</p>
          </div>
          <div style={styles.truthCard}>
            <h3>Truth Three: Love Is The Law</h3>
            <p>All ethical systems converge here. Do not harm. Do not lie. Do not reduce another to an object. Widen the circle of care until it includes yourself, your neighbor, your enemy, the earth.</p>
          </div>
        </div>

        <div style={styles.invitation}>
          <p>If you are tired of choosing sides, come. If you are hungry for depth without dogma, come. The truth? It’s been in plain sight the whole time.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#fdfbf7', /* Soft morning light */
    padding: '3rem 1.5rem',
    fontFamily: 'Lato, sans-serif',
    color: '#4a4036' /* Warm earth */
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem'
  },
  title: {
    fontSize: '3rem',
    color: '#4a4036',
    marginBottom: '0.5rem',
    fontFamily: 'Playfair Display, serif'
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#e8c56d', /* Sunflower gold */
    fontStyle: 'italic'
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  section: {
    marginBottom: '3rem',
    padding: '2rem',
    background: '#ffffff', /* Crisp white petal */
    borderRadius: '20px',
    boxShadow: '0 8px 30px rgba(216, 195, 165, 0.15)'
  },
  truthCard: {
    marginTop: '1rem',
    padding: '1rem 1.5rem',
    background: '#fdfbf7',
    borderRadius: '15px',
    borderLeft: '4px solid #8fa88a' /* Sage green */
  },
  invitation: {
    textAlign: 'center',
    fontSize: '1.2rem',
    fontStyle: 'italic',
    padding: '2rem',
    color: '#4a4036',
    background: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0 8px 30px rgba(216, 195, 165, 0.15)'
  }
};

export default ThePath;