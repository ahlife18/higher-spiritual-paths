import { useState } from 'react';

function Tarot() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const tarotDeck = [
    {
      id: 1,
      name: "The High Priestess",
      image: "🌙",
      message: "The High Priestess appears when the veil between your conscious and unconscious mind is thin. You are being called to trust your deepest intuition and inner wisdom. This card asks you to step back from the noise of the world and listen to the quiet, steady voice within. There is knowledge you possess that you haven't fully acknowledged yet. This is a sign to trust your gut, pay attention to your dreams, and embrace the mysteries of life without needing to dissect them. The answers you seek are already within you—you just need to create the silence to hear them."
    },
    {
      id: 2,
      name: "The Magician",
      image: "🪄",
      message: "The Magician represents manifesting your desires into reality. You have all the tools you need at your disposal. The universe is aligning to support your creative endeavors and personal ambitions. This is a powerful reminder that your thoughts, words, and actions are deeply connected. What you focus on, you bring to life. Do not underestimate your ability to shape your reality. Take inspired action and watch your dreams take form."
    },
    {
      id: 3,
      name: "The Fool",
      image: "🃏",
      message: "The Fool represents a leap of faith and new beginnings. You are standing on the edge of a brand-new chapter in your life. Don't let fear hold you back. The universe is encouraging you to step forward into the unknown with an open heart and a playful spirit. You don't need to have all the answers right now. Trust the journey, embrace the adventure, and know that the universe will catch you if you fall."
    },
    {
      id: 4,
      name: "The Empress",
      image: "🌿",
      message: "The Empress signifies abundance, fertility, and the nurturing of life. You are entering a period of immense growth and creative energy. This card encourages you to connect with nature, find beauty in your surroundings, and nurture the seeds you have planted. Take time to care for yourself, your relationships, and your creative projects. You are being called to create a sanctuary of peace and comfort around you."
    },
    {
      id: 5,
      name: "The Star",
      image: "✨",
      message: "The Star is a card of hope, healing, and profound spiritual connection. It reminds you that no matter how dark the night may seem, the light always returns. Your faith is being tested, but your resilience is stronger than your struggles. You are being guided toward a brighter future. Let your light shine brightly, not just for yourself, but for others who may be lost in the dark. You are a beacon of hope."
    },
    {
      id: 6,
      name: "The Moon",
      image: "🌕",
      message: "The Moon represents the hidden, the unseen, and the deepest parts of your psyche. You may be feeling lost, confused, or overwhelmed by illusions. This card asks you to look beneath the surface. The truth is hidden in plain sight, but your fears are clouding your vision. Trust your intuition through the fog. You are safe, even when you don't know where the path is leading."
    }
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsFlipped(true);
  };

  const handleClose = () => {
    setIsFlipped(false);
    setSelectedCard(null);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🔮 Divine Tarot Reading</h1>
      <p style={styles.subtitle}>Select a card below. It holds a profound message for you today.</p>

      <div style={styles.grid}>
        {tarotDeck.map((card) => (
          <div key={card.id} onClick={() => handleCardClick(card)} style={styles.card}>
            <div style={styles.cardIcon}>{card.image}</div>
            <h3 style={styles.cardName}>{card.name}</h3>
          </div>
        ))}
      </div>

      {/* --- MODAL FOR THE MESSAGE --- */}
      {isFlipped && selectedCard && (
        <div style={styles.modalOverlay} onClick={handleClose}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span style={styles.closeBtn} onClick={handleClose}>✕</span>
            <div style={styles.modalHeader}>
              <span style={styles.modalIcon}>{selectedCard.image}</span>
              <h2 style={styles.modalTitle}>{selectedCard.name}</h2>
            </div>
            <p style={styles.modalMessage}>{selectedCard.message}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '4rem 2rem',
    background: '#F5EEF8',
    minHeight: '100vh',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    fontSize: '3rem',
    color: '#5B2A8C',
    marginBottom: '0.5rem'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '3rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '2rem',
    maxWidth: '800px',
    margin: '0 auto'
  },
  card: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '20px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    cursor: 'pointer',
    transition: 'transform 0.3s'
  },
  cardIcon: {
    fontSize: '4rem',
    marginBottom: '1rem'
  },
  cardName: {
    fontSize: '1.2rem',
    color: '#5B2A8C'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999
  },
  modalContent: {
    background: '#fff',
    padding: '3rem',
    borderRadius: '30px',
    maxWidth: '600px',
    width: '90%',
    position: 'relative',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
  },
  closeBtn: {
    position: 'absolute',
    top: '15px',
    right: '25px',
    fontSize: '2rem',
    cursor: 'pointer',
    color: '#999'
  },
  modalHeader: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  modalIcon: {
    fontSize: '4rem',
    display: 'block',
    marginBottom: '1rem'
  },
  modalTitle: {
    fontSize: '2rem',
    color: '#5B2A8C'
  },
  modalMessage: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#444'
  }
};

export default Tarot;