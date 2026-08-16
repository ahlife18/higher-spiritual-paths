import { useState } from 'react';

// Inject CSS keyframes directly into the document head for the glowing pulse animation
const styleTag = document.createElement('style');
styleTag.innerHTML = `
  @keyframes pulseGlow {
    0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.3; }
    50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.7; }
    100% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.3; }
  }
`;
document.head.appendChild(styleTag);

function Tarot() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isReadingOpen, setIsReadingOpen] = useState(false);
  const [pickedCardIds, setPickedCardIds] = useState([]);

  // ==========================================
  // COMPLETE 78-CARD TAROT DATABASE
  // ==========================================
  const tarotDeck = [
    // ================= MAJOR ARCANA (22) =================
    { id: 0, name: "The Fool", image: "/tarot-cards/00-TheFool.jpg", shortDesc: "New Beginnings, Innocence.", story: "The Fool stands at the cliff's edge, gazing toward the unknown with a heart full of trust.", meaning: "You are being called to take a leap of faith into a new chapter of your life." },
    { id: 1, name: "The Magician", image: "/tarot-cards/01-TheMagician.jpg", shortDesc: "Manifestation, Power.", story: "The Magician stands at his table, channeling the power of the universe through his hands.", meaning: "You are a powerful creator. The universe is aligning to support your will." },
    { id: 2, name: "The High Priestess", image: "/tarot-cards/02-TheHighPriestess.jpg", shortDesc: "Intuition, Inner Wisdom.", story: "The High Priestess sits between the pillars of light and shadow, guarding the sacred scroll of knowledge.", meaning: "Your intuition is your highest guide right now. Trust your gut instincts." },
    { id: 3, name: "The Empress", image: "/tarot-cards/03-TheEmpress.jpg", shortDesc: "Abundance, Creativity.", story: "The Empress sits on her throne, surrounded by the bounty of the earth.", meaning: "You are entering a time of immense growth and prosperity. Nurture your ideas." },
    { id: 4, name: "The Emperor", image: "/tarot-cards/04-TheEmperor.jpg", shortDesc: "Authority, Structure.", story: "The Emperor sits solidly on his stone throne, his armor representing his readiness for battle.", meaning: "It is time to take control of your life and establish strong boundaries." },
    { id: 5, name: "The Hierophant", image: "/tarot-cards/05-TheHierophant.jpg", shortDesc: "Tradition, Guidance.", story: "The Hierophant stands between two pillars, a religious leader ready to impart wisdom.", meaning: "You are being called to seek guidance from a mentor or a trusted source of wisdom." },
    { id: 6, name: "The Lovers", image: "/tarot-cards/06-TheLovers.jpg", shortDesc: "Relationships, Alignment.", story: "The Lovers depicts a man and a woman standing beneath the angel of harmony.", meaning: "This card represents a powerful connection, whether romantic, platonic, or a deep connection to your own soul." },
    { id: 7, name: "The Chariot", image: "/tarot-cards/07-TheChariot.jpg", shortDesc: "Determination, Control.", story: "The Charioteer drives his chariot forward without reins, controlling the two sphinxes by sheer willpower alone.", meaning: "You are called to take decisive action and push forward with unwavering determination." },
    { id: 8, name: "Strength", image: "/tarot-cards/08-Strength.jpg", shortDesc: "Courage, Patience.", story: "A woman gently closes the mouth of a fierce lion, not with force, but with compassion and inner strength.", meaning: "You have the inner strength to overcome your current challenges." },
    { id: 9, name: "The Hermit", image: "/tarot-cards/09-TheHermit.jpg", shortDesc: "Solitude, Introspection.", story: "The Hermit stands alone on a mountain peak, holding a lantern that illuminates the path ahead.", meaning: "The universe is asking you to step away from the noise of the world and turn inward." },
    { id: 10, name: "Wheel of Fortune", image: "/tarot-cards/10-WheelOfFortune.jpg", shortDesc: "Cycles, Luck, Change.", story: "The wheel of the cosmos turns endlessly, its cycles representing the rise and fall of all things.", meaning: "Change is inevitable, and the wheel is turning in your favor." },
    { id: 11, name: "Justice", image: "/tarot-cards/11-Justice.jpg", shortDesc: "Truth, Fairness.", story: "Lady Justice sits with her scales balanced, holding a sword ready to cut through deception.", meaning: "The universe is bringing you a moment of reckoning. Face the truth with integrity." },
    { id: 12, name: "The Hanged Man", image: "/tarot-cards/12-TheHangedMan.jpg", shortDesc: "Surrender, Letting Go.", story: "The Hanged Man hangs upside down from a tree, his face calm and serene.", meaning: "You are being asked to surrender control. The answers you seek will appear when you stop forcing them." },
    { id: 13, name: "Death", image: "/tarot-cards/13-Death.jpg", shortDesc: "Endings, Transformation.", story: "The skeletal figure rides a white horse, cutting a path through the landscape.", meaning: "A significant phase of your life is coming to an end. Embrace the transformation." },
    { id: 14, name: "Temperance", image: "/tarot-cards/14-Temperance.jpg", shortDesc: "Balance, Healing.", story: "The angel stands with one foot on land and one in water, pouring water between two cups.", meaning: "You are being called to find balance in your life. Extremes are exhausting you." },
    { id: 15, name: "The Devil", image: "/tarot-cards/15-TheDevil.jpg", shortDesc: "Attachment, Temptation.", story: "The Devil sits upon a dark altar, trapping two humans beneath him.", meaning: "You may be feeling trapped by a situation, a habit, or a material desire." },
    { id: 16, name: "The Tower", image: "/tarot-cards/16-TheTower.jpg", shortDesc: "Sudden Change, Upheaval.", story: "The lightning strikes the tower, shattering its foundations.", meaning: "A sudden, powerful change is on the horizon. Embrace the chaos—it is clearing the way for your liberation." },
    { id: 17, name: "The Star", image: "/tarot-cards/17-TheStar.jpg", shortDesc: "Hope, Healing.", story: "A woman kneels by the water, pouring her emotions out and receiving the healing light of the star above.", meaning: "Even in your darkest moments, hope is never lost. The universe is shining a light on your path." },
    { id: 18, name: "The Moon", image: "/tarot-cards/18-TheMoon.jpg", shortDesc: "Illusion, Anxiety.", story: "The moonlight casts a pale glow over a path that leads into the unknown.", meaning: "You are navigating through a period of deep uncertainty and confusion. Trust your intuition through the fog." },
    { id: 19, name: "The Sun", image: "/tarot-cards/19-TheSun.jpg", shortDesc: "Joy, Success.", story: "A child rides a white horse beneath the radiant sun, representing the pure, unencumbered joy of existence.", meaning: "This is a time of immense joy, success, and clarity. The storms have passed." },
    { id: 20, name: "Judgement", image: "/tarot-cards/20-Judgement.jpg", shortDesc: "Reflection, Rebirth.", story: "The angel Gabriel blows his trumpet, summoning the dead to rise and face their lives.", meaning: "You are being called to reflect deeply on your life. This is a moment of spiritual awakening." },
    { id: 21, name: "The World", image: "/tarot-cards/21-TheWorld.jpg", shortDesc: "Completion, Fulfillment.", story: "A woman dances within a wreath, surrounded by the four cornerstones of the universe.", meaning: "A major cycle in your life is coming to a beautiful, fulfilling completion." },

    // ================= SUIT OF CUPS (WATER) - 14 =================
    { id: 22, name: "Ace of Cups", image: "/tarot-cards/Cups01.jpg", shortDesc: "Emotional Awakening.", story: "The Ace of Cups represents the overflowing wellspring of divine love.", meaning: "A new wave of emotional depth and love is entering your life." },
    { id: 23, name: "Two of Cups", image: "/tarot-cards/Cups02.jpg", shortDesc: "Partnership.", story: "Two figures exchange cups beneath the caduceus, symbolizing a sacred union.", meaning: "A powerful partnership is forming in your life." },
    { id: 24, name: "Three of Cups", image: "/tarot-cards/Cups03.jpg", shortDesc: "Celebration.", story: "Three figures raise their cups in a toast of celebration.", meaning: "This is a time for celebration! Share your joy with others." },
    { id: 25, name: "Four of Cups", image: "/tarot-cards/Cups04.jpg", shortDesc: "Apathy.", story: "A figure sits beneath a tree, arms crossed, ignoring the cup being offered.", meaning: "You are being presented with an opportunity that may be passing you by." },
    { id: 26, name: "Five of Cups", image: "/tarot-cards/Cups05.jpg", shortDesc: "Grief.", story: "A figure cloaked in black stares at three overturned cups.", meaning: "You are experiencing a loss. Honor your grief, but look behind you." },
    { id: 27, name: "Six of Cups", image: "/tarot-cards/Cups06.jpg", shortDesc: "Nostalgia.", story: "A figure in a garden offers a cup full of flowers to a younger child.", meaning: "The past is calling to you. Revisit the innocent joy you once possessed." },
    { id: 28, name: "Seven of Cups", image: "/tarot-cards/Cups07.jpg", shortDesc: "Choices.", story: "A figure stands before seven cups, each containing a different tempting illusion.", meaning: "You are faced with many options. Beware of chasing illusions." },
    { id: 29, name: "Eight of Cups", image: "/tarot-cards/Cups08.jpg", shortDesc: "Walking Away.", story: "A figure turns their back on the eight cups and walks away into the night.", meaning: "You are being called to leave behind what no longer serves you." },
    { id: 30, name: "Nine of Cups", image: "/tarot-cards/Cups09.jpg", shortDesc: "Satisfaction.", story: "A figure sits in contentment, surrounded by nine cups arranged like a shrine.", meaning: "You have reached a state of deep emotional satisfaction." },
    { id: 31, name: "Ten of Cups", image: "/tarot-cards/Cups10.jpg", shortDesc: "Emotional Fulfillment.", story: "A family stands together beneath a rainbow, their arms raised in joy.", meaning: "You are experiencing a profound sense of emotional fulfillment." },
    { id: 32, name: "Page of Cups", image: "/tarot-cards/Cups11.jpg", shortDesc: "Creative Inspiration.", story: "A young figure holds a cup, a fish peering out from it.", meaning: "A new feeling or creative inspiration is entering your life." },
    { id: 33, name: "Knight of Cups", image: "/tarot-cards/Cups12.jpg", shortDesc: "Romance.", story: "A knight in armor rides a gentle horse, holding out a cup.", meaning: "A romantic gesture is on its way to you." },
    { id: 34, name: "Queen of Cups", image: "/tarot-cards/Cups13.jpg", shortDesc: "Emotional Wisdom.", story: "The Queen of Cups sits on her throne, holding a beautiful cup.", meaning: "You are being called to lead with your heart." },
    { id: 35, name: "King of Cups", image: "/tarot-cards/Cups14.jpg", shortDesc: "Emotional Mastery.", story: "The King of Cups sits upon his throne, holding a cup.", meaning: "You are being called to master your emotions." },

    // ================= SUIT OF PENTACLES (EARTH) - 14 =================
    { id: 36, name: "Ace of Pentacles", image: "/tarot-cards/Pentacles01.jpg", shortDesc: "New Prosperity.", story: "A hand emerges from the clouds, offering a single, glowing pentacle.", meaning: "A new opportunity for financial prosperity is presenting itself." },
    { id: 37, name: "Two of Pentacles", image: "/tarot-cards/Pentacles02.jpg", shortDesc: "Balance.", story: "A figure juggles two pentacles, a ship tossing on the waves behind them.", meaning: "The key to success right now is balance and adaptability." },
    { id: 38, name: "Three of Pentacles", image: "/tarot-cards/Pentacles03.jpg", shortDesc: "Collaboration.", story: "A stonemason works on a cathedral, while a monk and an architect discuss the plans.", meaning: "You are being called to collaborate with others." },
    { id: 39, name: "Four of Pentacles", image: "/tarot-cards/Pentacles04.jpg", shortDesc: "Security.", story: "A figure holds a pentacle close to his body, while others sit beneath his feet.", meaning: "Be cautious not to let your fear of loss turn into hoarding." },
    { id: 40, name: "Five of Pentacles", image: "/tarot-cards/Pentacles05.jpg", shortDesc: "Hardship.", story: "Two figures walk through the snow, passing by a brightly lit church window.", meaning: "You may be going through a period of financial struggle." },
    { id: 41, name: "Six of Pentacles", image: "/tarot-cards/Pentacles06.jpg", shortDesc: "Generosity.", story: "A wealthy merchant holds a scale in one hand and offers coins to the needy.", meaning: "You are entering a time of giving and receiving." },
    { id: 42, name: "Seven of Pentacles", image: "/tarot-cards/Pentacles07.jpg", shortDesc: "Patience.", story: "A farmer pauses to look at his crop, leaning on his hoe.", meaning: "You have put in the hard work, and now you must be patient." },
    { id: 43, name: "Eight of Pentacles", image: "/tarot-cards/Pentacles08.jpg", shortDesc: "Diligence.", story: "A craftsman works diligently on a set of pentacles.", meaning: "You are in a phase of deep focus and skill-building." },
    { id: 44, name: "Nine of Pentacles", image: "/tarot-cards/Pentacles09.jpg", shortDesc: "Self-Sufficiency.", story: "A woman stands in a lush vineyard, surrounded by the fruits of her labor.", meaning: "You are enjoying the material rewards of your hard work." },
    { id: 45, name: "Ten of Pentacles", image: "/tarot-cards/Pentacles10.jpg", shortDesc: "Wealth.", story: "A family sits in comfort, surrounded by wealth and abundance.", meaning: "You are building a lasting legacy." },
    { id: 46, name: "Page of Pentacles", image: "/tarot-cards/Pentacles11.jpg", shortDesc: "Learning.", story: "A young figure holds a pentacle, looking at it with deep fascination.", meaning: "A new practical endeavor is presenting itself." },
    { id: 47, name: "Knight of Pentacles", image: "/tarot-cards/Pentacles12.jpg", shortDesc: "Hard Work.", story: "A knight sits still on his horse, holding a single pentacle.", meaning: "Your approach must be slow, steady, and persistent." },
    { id: 48, name: "Queen of Pentacles", image: "/tarot-cards/Pentacles13.jpg", shortDesc: "Nurturing.", story: "The Queen of Pentacles sits on her throne, holding her pentacle with a nurturing gaze.", meaning: "You are being called to embody practicality and generosity." },
    { id: 49, name: "King of Pentacles", image: "/tarot-cards/Pentacles14.jpg", shortDesc: "Abundance.", story: "The King of Pentacles sits securely on his throne, his robe draped in the bounty of the earth.", meaning: "You have reached a level of mastery in the material world." },

    // ================= SUIT OF SWORDS (AIR) - 14 =================
    { id: 50, name: "Ace of Swords", image: "/tarot-cards/Swords01.jpg", shortDesc: "Clarity.", story: "A hand emerges from the clouds, gripping a single, gleaming sword.", meaning: "A breakthrough is on the horizon. Embrace clarity." },
    { id: 51, name: "Two of Swords", image: "/tarot-cards/Swords02.jpg", shortDesc: "Stalemate.", story: "A blindfolded figure sits with two swords crossed over their chest.", meaning: "You are in a state of indecision. Make a choice." },
    { id: 52, name: "Three of Swords", image: "/tarot-cards/Swords03.jpg", shortDesc: "Heartbreak.", story: "Three swords pierce a heart, surrounded by a stormy sky.", meaning: "You are experiencing a deep emotional wound. It is okay to grieve." },
    { id: 53, name: "Four of Swords", image: "/tarot-cards/Swords04.jpg", shortDesc: "Rest.", story: "A figure lies in repose within a church, three swords hanging above them.", meaning: "Now is the time to rest and recover." },
    { id: 54, name: "Five of Swords", image: "/tarot-cards/Swords05.jpg", shortDesc: "Conflict.", story: "A figure holds swords in a gesture of victory, while others walk away in defeat.", meaning: "You may have won the battle, but lost the peace." },
    { id: 55, name: "Six of Swords", image: "/tarot-cards/Swords06.jpg", shortDesc: "Transition.", story: "A figure guides a boat across calm waters, carrying swords and passengers.", meaning: "You are moving from a period of turmoil into a phase of peace." },
    { id: 56, name: "Seven of Swords", image: "/tarot-cards/Swords07.jpg", shortDesc: "Deception.", story: "A figure sneaks away with five swords, leaving two behind.", meaning: "Be aware of your surroundings. Trust your instincts." },
    { id: 57, name: "Eight of Swords", image: "/tarot-cards/Swords08.jpg", shortDesc: "Anxiety.", story: "A bound figure stands surrounded by swords, blindfolded.", meaning: "You feel trapped, but the bonds are of your own making." },
    { id: 58, name: "Nine of Swords", image: "/tarot-cards/Swords09.jpg", shortDesc: "Nightmares.", story: "A figure sits up in bed, hands covering their face.", meaning: "Your mind is your own worst enemy right now." },
    { id: 59, name: "Ten of Swords", image: "/tarot-cards/Swords10.jpg", shortDesc: "Rock Bottom.", story: "A figure lies on the ground, pierced by ten swords.", meaning: "You have hit rock bottom. It is a turning point." },
    { id: 60, name: "Page of Swords", image: "/tarot-cards/Swords11.jpg", shortDesc: "Communication.", story: "A young figure holds a sword, alert and ready to investigate.", meaning: "A new idea is coming your way." },
    { id: 61, name: "Knight of Swords", image: "/tarot-cards/Swords12.jpg", shortDesc: "Speed.", story: "A knight charges forward on his horse, sword raised.", meaning: "You are moving with great speed. Beware of impulsiveness." },
    { id: 62, name: "Queen of Swords", image: "/tarot-cards/Swords13.jpg", shortDesc: "Intellectual Clarity.", story: "The Queen of Swords sits upright, her sword pointing toward the heavens.", meaning: "Speak your truth with clarity and compassion." },
    { id: 63, name: "King of Swords", image: "/tarot-cards/Swords14.jpg", shortDesc: "Authority.", story: "The King of Swords sits on his throne, holding his sword upright.", meaning: "Take a logical, authoritative approach." },

    // ================= SUIT OF WANDS (FIRE) - 14 =================
    { id: 64, name: "Ace of Wands", image: "/tarot-cards/Wands01.jpg", shortDesc: "Inspiration.", story: "A hand emerges from the clouds, gripping a sprouting wand.", meaning: "A surge of creative energy is entering your life." },
    { id: 65, name: "Two of Wands", image: "/tarot-cards/Wands02.jpg", shortDesc: "Planning.", story: "A figure stands on a castle wall, holding one wand and looking out at the horizon.", meaning: "You are in a stage of planning." },
    { id: 66, name: "Three of Wands", image: "/tarot-cards/Wands03.jpg", shortDesc: "Expansion.", story: "A figure stands with his back to us, watching his ships sail off into the horizon.", meaning: "Your plans are beginning to bear fruit." },
    { id: 67, name: "Four of Wands", image: "/tarot-cards/Wands04.jpg", shortDesc: "Celebration.", story: "A joyful group gathers beneath a garland of flowers.", meaning: "You are entering a time of celebration and stability." },
    { id: 68, name: "Five of Wands", image: "/tarot-cards/Wands05.jpg", shortDesc: "Struggle.", story: "Five figures clash with their wands, engaging in a spirited struggle.", meaning: "You are experiencing friction." },
    { id: 69, name: "Six of Wands", image: "/tarot-cards/Wands06.jpg", shortDesc: "Victory.", story: "A rider on a white horse, holding a wand adorned with a laurel wreath.", meaning: "Your efforts are being recognized." },
    { id: 70, name: "Seven of Wands", image: "/tarot-cards/Wands07.jpg", shortDesc: "Standing Ground.", story: "A figure stands on a hill, wielding a wand, defending their position.", meaning: "You are being called to stand your ground." },
    { id: 71, name: "Eight of Wands", image: "/tarot-cards/Wands08.jpg", shortDesc: "Speed.", story: "Eight wands fly through the air in a flurry of speed and movement.", meaning: "Events are unfolding at an accelerated pace." },
    { id: 72, name: "Nine of Wands", image: "/tarot-cards/Wands09.jpg", shortDesc: "Resilience.", story: "A battered figure leans on a wand, holding one more wand up defensively.", meaning: "Your resilience is your greatest strength." },
    { id: 73, name: "Ten of Wands", image: "/tarot-cards/Wands10.jpg", shortDesc: "Burden.", story: "A figure struggles beneath the weight of ten wands.", meaning: "You are carrying a heavy burden." },
    { id: 74, name: "Page of Wands", image: "/tarot-cards/Wands11.jpg", shortDesc: "Curiosity.", story: "A young figure holds a wand, looking at it with curiosity.", meaning: "A new creative spark is entering your life." },
    { id: 75, name: "Knight of Wands", image: "/tarot-cards/Wands12.jpg", shortDesc: "Action.", story: "A knight charges forward on his horse, his wand raised.", meaning: "You are being called to take bold, decisive action." },
    { id: 76, name: "Queen of Wands", image: "/tarot-cards/Wands13.jpg", shortDesc: "Confidence.", story: "The Queen of Wands sits upon her throne, radiating confidence and magnetism.", meaning: "You are entering a stage of profound confidence." },
    { id: 77, name: "King of Wands", image: "/tarot-cards/Wands14.jpg", shortDesc: "Leadership.", story: "The King of Wands sits boldly on his throne, his staff a symbol of his authority.", meaning: "You are being called to step into a leadership role." }
  ];

  // ==========================================
  // CARD PICKING LOGIC (PREVENTS REPEATS)
  // ==========================================
  const pickRandomCard = () => {
    const availableCards = tarotDeck.filter(card => !pickedCardIds.includes(card.id));
    
    if (availableCards.length === 0) {
      setPickedCardIds([]);
      const randomPick = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
      setSelectedCard(randomPick);
      setIsReadingOpen(true);
      return;
    }

    const randomPick = availableCards[Math.floor(Math.random() * availableCards.length)];
    setPickedCardIds([...pickedCardIds, randomPick.id]);
    setSelectedCard(randomPick);
    setIsReadingOpen(true);
  };

  const handleClose = () => {
    setIsReadingOpen(false);
    setSelectedCard(null);
  };

  // ==========================================
  // RENDER THE TAROT PAGE
  // ==========================================
  return (
    <div style={styles.pageContainer}>
      <div style={styles.angelEdgeTop}>🕊️ ✦ 🕊️</div>

      <h1 style={styles.title}>🔮 Divine Tarot Reading</h1>
      <p style={styles.subtitle}>The cards are waiting. Choose one to reveal your message.</p>

      {/* --- CARD FAN WITH GLOWING CENTER --- */}
      <div className="tarot-fan-container" style={styles.fanContainer}>
        <div className="tarot-question-mark" style={styles.questionMarkWrapper}>
          <div style={styles.questionMark}>?</div>
          <div style={styles.glowRing}></div>
        </div>
        
        {tarotDeck.slice(0, 22).map((card, index) => {
          const offset = index - 10.5;
          return (
            <div 
              className="tarot-card"
              key={card.id} 
              onClick={pickRandomCard} 
              style={{
                ...styles.fanCard,
                transform: `rotate(${offset * 4}deg) translateY(${Math.abs(offset) * -3}px)`,
                zIndex: index,
                left: `calc(50% + ${offset * 20}px)`
              }}
            >
              <img src={card.image} alt={card.name} style={styles.cardImage} />
              <div style={styles.cardLabel}>{card.name}</div>
            </div>
          );
        })}
      </div>

      <button className="tarot-choose-btn" onClick={pickRandomCard} style={styles.chooseOneBtn}>
        ✦ Choose One Card ✦
      </button>

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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// PROFESSIONAL STYLES (FULLY MOBILE RESPONSIVE)
// ==========================================
const styles = {
  pageContainer: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #5B2A8C, #F5EEF8)',
    padding: '2rem 2rem 6rem 2rem',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  angelEdgeTop: {
    fontSize: '2rem',
    color: '#D4AF37',
    marginBottom: '0.5rem',
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
    marginBottom: '2rem'
  },
  fanContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '900px',
    height: '350px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: '1rem 0 3rem 0'
  },
  questionMarkWrapper: {
    position: 'absolute',
    bottom: '50px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 0
  },
  questionMark: {
    fontSize: '6rem',
    color: '#D4AF37',
    fontWeight: 'bold',
    textShadow: '0 0 30px rgba(212, 175, 55, 0.6)'
  },
  glowRing: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0) 70%)',
    animation: 'pulseGlow 2s ease-in-out infinite',
    zIndex: -1
  },
  fanCard: {
    position: 'absolute',
    bottom: '0',
    width: '140px',
    height: '200px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transformOrigin: 'bottom center',
    boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
    borderRadius: '10px',
    background: '#fff',
    overflow: 'hidden',
    border: '2px solid #D4AF37',
    left: 'calc(50% + 0px)'
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
    padding: '8px 5px',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  chooseOneBtn: {
    background: 'linear-gradient(135deg, #D4AF37, #b8952e)',
    color: '#fff',
    border: 'none',
    padding: '1rem 3rem',
    borderRadius: '50px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)',
    transition: 'transform 0.3s',
    marginBottom: '1rem',
    fontFamily: 'Arial, sans-serif'
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
  }
};

// ==========================================
// MOBILE RESPONSIVE OVERRIDES (DO NOT TOUCH THE EXISTING CODE)
// ==========================================
// This will automatically scale the cards up on phones and smaller tablets.
const mobileStyles = document.createElement('style');
mobileStyles.innerHTML = `
  @media (max-width: 600px) {
    /* Make the cards larger and easier to tap on mobile */
    .tarot-card {
      width: 160px !important;
      height: 230px !important;
    }
    /* Adjust the fan spacing for the larger cards on mobile */
    .tarot-fan-container {
      height: 400px !important;
    }
    /* Make the "Choose One" button slightly smaller to fit screens */
    .tarot-choose-btn {
      padding: 0.8rem 2rem !important;
      font-size: 1rem !important;
    }
    /* Reduce the glowing question mark size */
    .tarot-question-mark {
      font-size: 4rem !important;
    }
  }
`;
document.head.appendChild(mobileStyles);

export default Tarot;