function Footer() {
  return (
    <div style={styles.footer}>
      <p>🕯️ No Religion. All Religion. The truth is in plain sight.</p>
      <p style={styles.small}>© 2026 Higher Spiritual Paths. A Fellowship of Insight.</p>
    </div>
  );
}

const styles = {
  footer: {
    padding: '2rem',
    background: '#2c1b13',
    color: '#e8d5b5',
    textAlign: 'center',
    fontFamily: 'Georgia, serif'
  },
  small: { fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }
};

export default Footer;