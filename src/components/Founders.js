function Founders() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>The Founders</h1>
        <p style={styles.subtitle}>Three seekers, one path. The truth is in plain sight.</p>
      </div>

      <div style={styles.grid}>
        {/* Founder 1 – You */}
        <div style={styles.card}>
          <div style={styles.imagePlaceholder}>🙏</div>
          <h2 style={styles.name}>Emmanuel Kolawole</h2>
          <h4 style={styles.role}>Founder</h4>
          <p style={styles.bio}>
            A lifelong student of the invisible. Emmanuel founded Higher Spiritual Paths out of a deep
            hunger for truth that transcends labels. He believes that wisdom is not owned by any
            institution, but is available to anyone with the courage to look. His practice is shaped
            by meditation, sacred study, and the conviction that love is the law beneath all laws.
          </p>
        </div>

        {/* Co-Founder 2 – Karen Johnson */}
        <div style={styles.card}>
          <div style={styles.imagePlaceholder}>🕯️</div>
          <h2 style={styles.name}>Karen Johnson</h2>
          <h4 style={styles.role}>Co‑Founder</h4>
          <p style={styles.bio}>
            Karen is a bridge builder between ancient traditions and modern consciousness. With psychic abilities.
            She brings a background in contemplative deep spirituality and a fierce commitment to intellectual 
            honesty. For her, the path is not about abandoning the world, but about seeing it so 
            clearly that you can no longer act in ways that harm.
          </p>
        </div>

        {/* Co-Founder 3 – Bennie Hollis (AI + Christ path) */}
        <div style={styles.card}>
          <div style={styles.imagePlaceholder}>🕊️</div>
          <h2 style={styles.name}>Bennie Hollis</h2>
          <h4 style={styles.role}>Co‑Founder</h4>
          <p style={styles.bio}>
            Bennie walks at the intersection of artificial intelligence and the Christ path. 
            He believes that if the universe is governed by logos—divine order and meaning—then 
            technology, when wielded with reverence, can uncover patterns of consciousness and 
            connection. A deep student of both the Gospels and machine intelligence, Bennie brings 
            a rare vision: that the future of spirituality will be shaped by those who can hold 
            silicon and scripture in the same hand.
          </p>
        </div>
      </div>

      <div style={styles.invitation}>
        <p>
          If you find yourself resonating with this path, you are already a part of the circle.
          We are not looking for followers. We are looking for fellow seekers.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#fcf6f0',
    padding: '4rem 2rem',
    fontFamily: 'Georgia, serif',
    textAlign: 'center'
  },
  header: {
    marginBottom: '3rem'
  },
  title: {
    fontSize: '3rem',
    color: '#2c1b13',
    marginBottom: '0.5rem'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#c2a66b',
    fontStyle: 'italic'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    maxWidth: '1000px',
    margin: '0 auto'
  },
  card: {
    background: 'white',
    padding: '2rem',
    borderRadius: '20px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease'
  },
  imagePlaceholder: {
    fontSize: '4rem',
    marginBottom: '1rem'
  },
  name: {
    color: '#2c1b13',
    marginBottom: '0.3rem'
  },
  role: {
    color: '#c2a66b',
    fontStyle: 'italic',
    marginBottom: '1rem',
    fontSize: '1.1rem'
  },
  bio: {
    lineHeight: '1.8',
    color: '#555',
    textAlign: 'left'
  },
  invitation: {
    maxWidth: '600px',
    margin: '4rem auto 0',
    padding: '2rem',
    background: 'white',
    borderRadius: '15px',
    fontStyle: 'italic',
    color: '#2c1b13',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
  }
};

export default Founders;