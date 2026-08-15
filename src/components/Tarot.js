import { useState } from 'react';

function Tarot() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isReadingOpen, setIsReadingOpen] = useState(false);
  const [pickedCardIds, setPickedCardIds] = useState([]);

  // HIGH-QUALITY RIDER-WAITE TAROT IMAGES (Real, Professional Art)
  const tarotDeck = [
    {
      id: 1,
      name: "The High Priestess",
      image: "https://i.pinimg.com/736x/c3/3d/98/c33d982db45732e4316e289e00c2768a.jpg",
      shortDesc: "Intuition, Hidden Knowledge, the Subconscious.",
      story: "The High Priestess sits between the pillars of light and shadow, representing the gateway to the unseen realms. She holds the scroll of divine knowledge, reminding us that true wisdom is not found outside, but within the silence of our own souls.",
      meaning: "You are being called to trust your intuition above all else. Logic and reason will not give you the answers right now. Pay attention to your dreams, your gut feelings, and the subtle whispers of your inner voice. Create the silence to hear the universe.",
      reversed: "Beware of ignoring your intuition or suppressing your emotions. You may be blocking your own psychic abilities out of fear. Let go of the need to control and allow your inner wisdom to surface."
    },
    {
      id: 2,
      name: "The Magician",
      image: "https://i.pinimg.com/736x/c0/48/c0/c048c0486b4fad988a4bf58145df9613.jpg",
      shortDesc: "Manifestation, Action, Resourcefulness.",
      story: "The Magician stands with one hand pointing to the heavens and the other to the earth. He is the bridge between the divine and the material. The tools of the four suits lie before him, reminding us we already possess everything we need to manifest our reality.",
      meaning: "You have all the tools and skills to achieve your desires. The universe is waiting for you to take action. Stop waiting for the perfect moment—create it. Your thoughts, words, and deeds are aligning to bring your dreams into form.",
      reversed: "You may be feeling blocked or lacking confidence. There is a tendency to manipulate situations. Be honest with yourself and others. Use your power for good, not control."
    },
    {
      id: 3,
      name: "The Fool",
      image: "https://i.pinimg.com/736x/c3/fd/29/c3fd29279eb5197c1719c84eb9317774.jpg",
      shortDesc: "New Beginnings, Adventure, Faith.",
      story: "The Fool stands at the edge of a cliff, holding a single rose, looking up at the sky. He carries nothing but a small bag, representing pure innocence. He is about to step into the unknown with complete trust in the universe.",
      meaning: "You are standing at the threshold of a brand new chapter. Do not let fear hold you back. Take the leap! This is a time for spontaneity, exploration, and embracing a beginner's mind. The universe will catch you.",
      reversed: "You may be feeling reckless, foolish, or afraid to commit. Examine your fears. Are you running away from something? Be cautious, but do not let paralysis stop you."
    },
    {
      id: 4,
      name: "The Empress",
      image: "https://i.pinimg.com/736x/e3/40/9c/e3409c33433e4a2197317473579ca88b.jpg",
      shortDesc: "Abundance, Creativity, Nurturing.",
      story: "The Empress sits upon a throne surrounded by a lush field of golden wheat. She is the archetype of Mother Earth, representing the unlimited growth that comes when we nurture ourselves and our creative endeavors.",
      meaning: "You are entering a period of immense growth, prosperity, and creativity. Nurture your projects and relationships. Take time to connect with nature and find beauty in your daily life. Create a sanctuary for yourself and others.",
      reversed: "You may be feeling drained, uncreative, or overly dependent on others. Reconnect with your own needs. Stop giving away all your energy and take time to replenish your own well."
    },
    {
      id: 5,
      name: "The Star",
      image: "https://i.pinimg.com/736x/c1/e2/90/c1e29011d7402c6578dab33f05c6309d.jpg",
      shortDesc: "Hope, Healing, Spiritual Connection.",
      story: "A woman kneels at the edge of a pool, pouring water to nourish the earth and the sky. Above her, a large, brilliant star shines. She represents the eternal hope that guides us through even the darkest nights.",
      meaning: "This is a card of profound healing and optimism. No matter how dark things have been, light is breaking through. You are being guided toward a brighter future. Your faith is being rewarded. Let your inner light shine for others to see.",
      reversed: "You may be feeling hopeless, disconnected, or lacking faith. It is time to step back and re-examine your beliefs. Sometimes healing requires us to sit with our pain first. Reach out for support; you don't have to walk this path alone."
    }
  ];

  // ✅ RANDOM SELECTION LOGIC: Prevents picking the same card twice
  const handleCardClick = () => {
    // Filter out the cards that have already been picked
    const availableCards = tarotDeck.filter(card => !pickedCardIds.includes(card.id));
    
    // If all cards have been picked, reset the history
    if (availableCards.length === 0) {
      setPickedCardIds([]);
      const randomPick = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
      setSelectedCard(randomPick);
      setIsReadingOpen(true);
      return;
    }

    // Pick a random card from the available ones
    const randomPick = availableCards[Math.floor(Math.random() * availableCards.length)];
    
    // Add the picked card to the history so it won't be picked again immediately
    setPickedCardIds([...pickedCardIds, randomPick.id]);
    setSelectedCard(randomPick);
    setIsReadingOpen(true);
  };

  const handleClose = () => {
    setIsReadingOpen(false);
    setSelectedCard(null);
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.angelEdgeTop}>🕊️ ✦ 🕊️</div>

      <h1 style={styles.title}>🔮 Divine Tarot Reading</h1>
      <p style={styles.subtitle}>The cards are waiting. Choose one to reveal your message.</p>

      {/* THE CARD FAN */}
      <div style={styles.fanContainer}>
        <div style={styles.questionMark}>?</div>
        {tarotDeck.map((card, index) => (
          <div 
            key={card.id} 
            onClick={handleCardClick} 
            style={{
              ...styles.fanCard,
              transform: `rotate(${(index - 2) * 12}deg) translateY(${Math.abs(index - 2) * -10}px)`,
              zIndex: index
            }}
          >
            <img src={card.image} alt={card.name} style={styles.cardImage} />
            <div style={styles.cardLabel}>{card.name}</div>
          </div>
        ))}
      </div>

      {/* ✅ "Choose One" Text */}
      <h3 style={styles.chooseOneText}>Choose One Card</h3>

      <div style={styles.angelEdgeBottom}>🕊️ ✦ 🕊️</div>

      {/* --- DEEP READING MODAL --- */}
      {isReadingOpen && selectedCard && (
        <div style={styles.modalOverlay} onClick={handleClose}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={handleClose}>✕</button>
            
            <div style={styles.modalHeader}>
              <img src={selectedCard.image} alt={selectedCard.name} style={styles.modalImage} />
              <div>
                <h2 style={styles.modalTitle}>{selectedCard.name}</h2>
                <p style={styles.modalSubtitle}>{selectedCard.shortDesc}</p>
              </div>
            </div>

            <div style={styles.readingBody}>
              <h3 style={styles.sectionTitle}>📖 The Card's Story</h3>
              <p style={styles.readingText}>{selectedCard.story}</p>

              <h3 style={styles.sectionTitle}>✨ Your Reading Today</h3>
              <p style={styles.readingText}>{selectedCard.meaning}</p>

              <div style={styles.shadowBox}>
                <h3 style={styles.shadowTitle}>🌙 Shadow / Reversed Meaning</h3>
                <p style={styles.readingText}>{selectedCard.reversed}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  pageContainer: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #5B2A8C, #F5EEF8)',
    padding: '4rem 2rem',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  angelEdgeTop: {
    fontSize: '2rem',
    color: '#D4AF37',
    marginBottom: '1rem',
    letterSpacing: '10px'
  },
  angelEdgeBottom: {
    fontSize: '2rem',
    color: '#D4AF37',
    marginTop: '2rem',
    letterSpacing: '10px'
  },
  title: {
    fontSize: '3rem',
    color: '#fff',
    textShadow: '0 2px 10px rgba(0,0,0,0.3)',
    marginBottom: '0.5rem'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#e0d4eb',
    marginBottom: '3rem'
  },
  fanContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '700px',
    height: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: '40px'
  },
  questionMark: {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '6rem',
    color: '#D4AF37',
    fontWeight: 'bold',
    textShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
    zIndex: 0,
    animation: 'pulse 2s ease-in-out infinite'
  },
  fanCard: {
    position: 'absolute',
    bottom: '0',
    width: '140px',
    height: '220px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transformOrigin: 'bottom center',
    boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
    borderRadius: '10px',
    background: '#fff',
    overflow: 'hidden',
    border: '2px solid #D4AF37'
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  cardLabel: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    background: 'rgba(91, 42, 140, 0.9)',
    color: '#fff',
    fontSize: '0.8rem',
    padding: '5px',
    textAlign: 'center'
  },
  chooseOneText: {
    marginTop: '2rem',
    fontSize: '1.5rem',
    color: '#fff',
    fontWeight: 'bold',
    textShadow: '0 2px 10px rgba(0,0,0,0.3)'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    padding: '20px'
  },
  modalContent: {
    background: '#fff',
    padding: '3rem',
    borderRadius: '30px',
    maxWidth: '700px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative',
    boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
  },
  closeBtn: {
    position: 'absolute',
    top: '15px',
    right: '25px',
    fontSize: '2rem',
    cursor: 'pointer',
    color: '#999',
    background: 'none',
    border: 'none'
  },
  modalHeader: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    marginBottom: '2rem',
    borderBottom: '2px solid #F5EEF8',
    paddingBottom: '1rem'
  },
  modalImage: {
    width: '120px',
    height: 'auto',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
  },
  modalTitle: {
    fontSize: '2rem',
    color: '#5B2A8C',
    marginBottom: '0.5rem'
  },
  modalSubtitle: {
    fontSize: '1.1rem',
    color: '#666',
    fontStyle: 'italic'
  },
  readingBody: {
    textAlign: 'left'
  },
  sectionTitle: {
    fontSize: '1.3rem',
    color: '#5B2A8C',
    marginTop: '1.5rem',
    marginBottom: '0.5rem'
  },
  readingText: {
    fontSize: '1.05rem',
    lineHeight: '1.8',
    color: '#444'
  },
  shadowBox: {
    background: '#F5EEF8',
    padding: '1.5rem',
    borderRadius: '15px',
    marginTop: '1.5rem'
  },
  shadowTitle: {
    fontSize: '1.2rem',
    color: '#5B2A8C',
    marginBottom: '0.5rem'
  }
};

export default Tarot;