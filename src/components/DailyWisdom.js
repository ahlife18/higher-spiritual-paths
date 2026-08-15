import { useState, useEffect } from 'react';

function DailyWisdom() {
  const [wisdom, setWisdom] = useState('');
  const [date, setDate] = useState('');

  const wisdoms = [
    "The truth is hidden in plain sight. Look again.",
    "You are not separate. Connection is your nature.",
    "The present moment is the only door to the real.",
    "Love is not a sentiment; it is the law beneath all laws.",
    "We gather not to escape the world, but to see it clearly.",
    "Religion is a fence. Spirituality is a path. We walk the path.",
    "Inner peace is not a destination; it is a way of seeing.",
    "Silence is not empty. It is full of answers.",
    "You don't need a guru. You need the courage to look within.",
    "Wisdom is not what you know. It is what you are willing to unlearn.",
    "We are seekers, not followers.",
    "The veil is attention, not distance.",
    "Do not cling to a belief because it comforts you. Hold it until it proves useful.",
    "A truth you cannot practice is a decoration.",
    "Compassion without rigor is fog. Rigor without compassion is violence.",
    "The moment you think you have arrived, you have stopped growing.",
    "We do not compete with traditions. We rest in a clearing and compare maps.",
    "We extract essence. We do not plunder.",
    "If you are tired of choosing sides, come.",
    "We are not a cult. We invite inquiry.",
    "We are not an echo chamber. We welcome respectful dissent.",
    "We are not anti-religion. We are post-partisan.",
    "Do no harm. In word, thought, and action.",
    "Tell the truth. Especially to yourself.",
    "Protect the vulnerable. Especially within your own circle.",
    "Steward the earth. It is not a resource. It is a relation.",
    "Guard confidentiality. What is shared in circle stays in circle.",
    "We envision a world where truth is no longer hidden.",
    "Children must be taught how to pay attention before what to believe.",
    "Insight that does not leave the room is vanity.",
    "We speak from 'I.' We listen to understand.",
    "One voice at a time. No interrupting. No fixing.",
    "Contemplation is sitting with a question until it sits with you.",
    "Dialogue is speaking without armor, listening without fixing.",
    "Service is taking what we see and letting it move our hands.",
    "We are the remembrance.",
  ];

  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const index = dayOfYear % wisdoms.length;
    setWisdom(wisdoms[index]);
    setDate(today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
  }, [wisdoms]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🕯️ Daily Wisdom</h1>
      <p style={styles.date}>{date}</p>
      <div style={styles.card}>
        <p style={styles.wisdom}>"{wisdom}"</p>
      </div>
      <p style={styles.footer}>A reflection for your journey.</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '4rem 2rem',
    background: '#F5EEF8',
    minHeight: '80vh',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '3rem',
    color: '#5B2A8C',
    marginBottom: '0.5rem',
  },
  date: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '2rem',
  },
  card: {
    background: '#fff',
    padding: '3rem 2rem',
    borderRadius: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  },
  wisdom: {
    fontSize: '1.8rem',
    color: '#5B2A8C',
    lineHeight: '1.6',
    fontStyle: 'italic',
  },
  footer: {
    marginTop: '2rem',
    fontSize: '1rem',
    color: '#999',
  },
};

export default DailyWisdom;