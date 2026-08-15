function AngelNumbers() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>✨ What Are Angel Numbers?</h1>
      <div style={styles.card}>
        <h3>Why do they keep appearing?</h3>
        <p>Angel numbers are recurring sequences of numbers that carry a divine vibration. They are believed to be messages sent from your guardian angels, the universe, or your higher self.</p>
        <p>You may see them on clocks (11:11), license plates, receipts, or even in your dreams. They are not coincidences—they are gentle nudges from the spiritual realm trying to get your attention.</p>
        <h3>How do I know my angels are with me?</h3>
        <p>When you see an angel number, take a moment to pause and reflect. What were you thinking about when you saw it? What were you worrying about? The number is a direct response to your thoughts. If you see 222, your angels are telling you to trust the process. If you see 555, they are preparing you for change. The more you practice noticing them, the more they appear. It is the universe saying: "We are right here with you."</p>
        <h3>How to use them</h3>
        <p>When you see an angel number, say a silent thank you to your angels. Write it down in a journal. Over time, you will build a personal relationship with these divine sequences. They are a constant reminder that you are never truly alone.</p>
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', background: '#F5EEF8', padding: '4rem 2rem', textAlign: 'center', fontFamily: 'Arial, sans-serif' },
  title: { fontSize: '3rem', color: '#5B2A8C', marginBottom: '2rem' },
  card: { background: '#fff', padding: '3rem', borderRadius: '30px', maxWidth: '800px', margin: '0 auto', textAlign: 'left', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }
};

export default AngelNumbers;