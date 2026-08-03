function Practices() {
  const practices = [
    { title: "The Practice of Seeing", desc: "20 minutes of silent sitting. No agenda. Just breath, body, awareness." },
    { title: "The Practice of Inquiry", desc: "One question per month. Journal. Share. Do not debate to win." },
    { title: "The Practice of Study", desc: "Read across traditions. A Sufi poem, a scripture, a novel, a science paper." },
    { title: "The Practice of Service", desc: "One act of service monthly in family, community, or the earth." },
    { title: "The Practice of Council", desc: "Sit in circle. One voice at a time. No interrupting. No fixing." }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Our Practices</h1>
      <div style={styles.grid}>
        {practices.map((p, i) => (
          <div key={i} style={styles.card}>
            <h3 style={styles.cardTitle}>{p.title}</h3>
            <p style={styles.cardDesc}>{p.desc}</p>
          </div>
        ))}
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
  grid: {
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
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    borderTop: '4px solid #c2a66b'
  },
  cardTitle: {
    color: '#2c1b13',
    marginBottom: '0.5rem'
  },
  cardDesc: {
    color: '#555',
    lineHeight: '1.6'
  }
};

export default Practices;