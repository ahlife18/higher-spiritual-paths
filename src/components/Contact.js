function Contact() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Come. Sit. Listen.</h1>
      <p style={styles.text}>
        If you are tired of choosing sides, come. If you are hungry for depth without dogma, come.
      </p>
      <div style={styles.card}>
        <p>🕯️ Email: seekers@higherspiritualpaths.com</p>
        <p>🌙 IG: @higherspiritualpaths</p>
        <p>📖 "The truth? It’s been in plain sight the whole time."</p>
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: '80vh', background: '#fcf6f0', padding: '4rem 2rem', textAlign: 'center', fontFamily: 'Georgia, serif' },
  title: { fontSize: '3rem', color: '#2c1b13' },
  text: { maxWidth: '600px', margin: '1rem auto 3rem', fontSize: '1.2rem', lineHeight: '1.6', color: '#555' },
  card: { background: 'white', padding: '2rem', borderRadius: '15px', maxWidth: '500px', margin: '0 auto', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }
};

export default Contact;