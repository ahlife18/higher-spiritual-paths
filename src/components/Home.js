import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

function Home() {
  const navigate = useNavigate();

  // --- ANIMATION SETTINGS ---
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // --- 1. ANGEL NUMBER DATA (DEEP RESEARCH) ---
  const angelDatabase = [
    { num: '000', meaning: "The number of infinite potential. You are at the beginning of a powerful cycle. The universe is asking you to tune into your intuition and trust the process of creation." },
    { num: '111', meaning: "A powerful sign of manifestation. Your thoughts are aligning with the universe. Keep your focus positive, because you are co-creating your reality at lightning speed." },
    { num: '222', meaning: "Balance and harmony are coming to your life. This is a message to trust the flow. Don't force things; instead, anchor yourself in patience and faith." },
    { num: '333', meaning: "The ascended masters are guiding you. You are being protected and supported. This is a call to embrace your Divine purpose and step into your spiritual power." },
    { num: '444', meaning: "The angels are surrounding you with unconditional love. They are telling you that your hard work is about to pay off. You are building a solid foundation for your future." },
    { num: '555', meaning: "A major life transition is happening. Embrace it with open arms. Change is not always comfortable, but it is the doorway to profound growth and liberation." },
    { num: '666', meaning: "The material world and the spiritual world are asking for balance. It is a gentle reminder to ground yourself and not become consumed by earthly worries." },
    { num: '777', meaning: "A sign of profound spiritual awakening and good fortune. You are in alignment with your highest self. Trust that the universe is working in your favor." },
    { num: '888', meaning: "The number of infinite abundance. Financial prosperity is on its way. A cycle is ending, and a new era of limitless opportunities is about to begin." },
    { num: '999', meaning: "The universe is calling you to complete a cycle. Let go of what no longer serves you. Closure is necessary for the new chapter that is waiting for you." },
    { num: '1010', meaning: "The angels are encouraging you to stay positive and aligned. Your thoughts are powerful. Keep your vision clear and you will attract exactly what you desire." },
    { num: '1212', meaning: "A reminder of divine timing. You are exactly where you need to be. Trust that the synchronistic events in your life are leading you to your highest good." },
    { num: '1234', meaning: "A beautiful sequence of progress. You are moving up the ladder of success. Your hard work and determination are being recognized by the universe." }
  ];

  // --- 2. LIFE PATH DATA (DEEP PROFILES) ---
  const lifePathProfiles = {
    '1': { title: "The Leader", career: "Management, Entrepreneurship, Innovation.", love: "Confident, independent partners who appreciate individuality.", spiritual: "A path of learning to lead with integrity and self-mastery." },
    '2': { title: "The Peacemaker", career: "Diplomacy, Counseling, Relationships.", love: "Deeply nurturing and intuitive partners who crave connection.", spiritual: "Learning to balance emotions while holding space for others." },
    '3': { title: "The Creative", career: "Writing, Art, Performance, Communication.", love: "Expressive, joyous partners who inspire creativity in relationships.", spiritual: "Learning to channel Divine inspiration into tangible beauty." },
    '4': { title: "The Builder", career: "Engineering, Management, Construction, Law.", love: "Loyal, grounded partners who value security and long-term planning.", spiritual: "Learning to build a sacred life rooted in discipline and integrity." },
    '5': { title: "The Freedom Seeker", career: "Marketing, Travel, Adventure, Sales.", love: "Spontaneous, free-spirited partners who respect independence.", spiritual: "Learning to embrace change as the engine of spiritual evolution." },
    '6': { title: "The Nurturer", career: "Teaching, Healthcare, Counseling, Family Law.", love: "Caring, protective partners who prioritize family and emotional safety.", spiritual: "Learning to care for others without losing yourself in the process." },
    '7': { title: "The Seeker", career: "Science, Research, Philosophy, Spirituality.", love: "Mysterious, intellectually stimulating partners who value deep conversation.", spiritual: "Learning to trust your inner knowing and develop psychic intuition." },
    '8': { title: "The Achiever", career: "Finance, Law, Corporate Leadership, Real Estate.", love: "Powerful, ambitious partners who respect authority and drive.", spiritual: "Learning to use your strength and power to serve humanity." },
    '9': { title: "The Humanitarian", career: "Charity, Art, Music, Teaching, Social Work.", love: "Compassionate, wise partners who seek soul-level connection.", spiritual: "Learning to serve the world with your gifts without seeking recognition." }
  };

  // --- 3. ZODIAC CALCULATOR & DATA ---
  const getZodiacSign = (date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini';
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
    return 'Pisces';
  };

  const zodiacProfiles = {
    'Aries': { dates: 'Mar 21 – Apr 19', element: 'Fire', rulingPlanet: 'Mars', personality: 'Courageous, bold, and fiercely independent. You are a natural pioneer who loves to take the lead. Action is your language, and you thrive on new beginnings.', love: 'Passionate and energetic. You need a partner who can match your intensity and respect your desire for adventure.' },
    'Taurus': { dates: 'Apr 20 – May 20', element: 'Earth', rulingPlanet: 'Venus', personality: 'Grounded, loyal, and deeply sensual. You are the builder of the zodiac, valuing stability, beauty, and consistency. You are fiercely protective of your loved ones.', love: 'Loyal and devoted. You seek a partner who offers emotional security and shares your appreciation for the finer things in life.' },
    'Gemini': { dates: 'May 21 – Jun 20', element: 'Air', rulingPlanet: 'Mercury', personality: 'Curious, adaptable, and brilliant. You are the communicator, forever seeking knowledge and connection. Your mind is your greatest asset, and variety is your spice of life.', love: 'Intellectual and playful. You need a partner who can stimulate your mind and keep up with your fast-paced lifestyle.' },
    'Cancer': { dates: 'Jun 21 – Jul 22', element: 'Water', rulingPlanet: 'Moon', personality: 'Deeply intuitive, emotional, and nurturing. You are the caregiver of the zodiac, guided by the ebb and flow of your inner tide. Home and family are your sanctuary.', love: 'Tender and protective. You need a partner who can offer emotional depth and create a sense of belonging.' },
    'Leo': { dates: 'Jul 23 – Aug 22', element: 'Fire', rulingPlanet: 'Sun', personality: 'Bold, dramatic, and generous. You are the king/queen of the jungle, born to shine, entertain, and uplift. Your charisma is magnetic, and your heart is as big as your ego.', love: 'Passionate and devoted. You want a partner who celebrates you and allows you to shine while offering their own strength.' },
    'Virgo': { dates: 'Aug 23 – Sep 22', element: 'Earth', rulingPlanet: 'Mercury', personality: 'Analytical, meticulous, and deeply kind. You are the healer, the perfectionist, who sees the world in fine detail. Your service to others is your highest form of devotion.', love: 'Thoughtful and practical. You need a partner who values loyalty and shares your desire for a clean, organized, and beautiful life.' },
    'Libra': { dates: 'Sep 23 – Oct 22', element: 'Air', rulingPlanet: 'Venus', personality: 'Charming, diplomatic, and deeply aesthetic. You are the peacemaker, the artist, who sees the beauty in all things. You seek balance, love, and harmonious connections.', love: 'Romantic and idealistic. You crave a partner who is as elegant as you and shares your deep need for partnership and beauty.' },
    'Scorpio': { dates: 'Oct 23 – Nov 21', element: 'Water', rulingPlanet: 'Pluto', personality: 'Intense, mysterious, and deeply intuitive. You are the detective, the alchemist, who sees beneath the surface. Your depth is your power, and you are fiercely private.', love: 'Deep and transformative. You seek a partner who can handle your intensity and who is willing to merge souls on a profound level.' },
    'Sagittarius': { dates: 'Nov 22 – Dec 21', element: 'Fire', rulingPlanet: 'Jupiter', personality: 'Adventurous, optimistic, and wise. You are the philosopher, the explorer, who seeks the higher meaning in life. You are driven by freedom and a hunger for truth.', love: 'Expansive and philosophical. You need a partner who shares your sense of adventure and respects your need for independence.' },
    'Capricorn': { dates: 'Dec 22 – Jan 19', element: 'Earth', rulingPlanet: 'Saturn', personality: 'Ambitious, disciplined, and incredibly responsible. You are the CEO of the zodiac, building empires with patience and structure. Your word is your bond.', love: 'Dedicated and traditional. You seek a partner who matches your ambition and who is a true partner in building a legacy.' },
    'Aquarius': { dates: 'Jan 20 – Feb 18', element: 'Air', rulingPlanet: 'Uranus', personality: 'Visionary, original, and deeply humanitarian. You are the rebel, the genius, who thinks outside the box. You are here to shift consciousness and break old paradigms.', love: 'Unconventional and intellectual. You need a partner who respects your freedom and who is as mentally stimulating as they are emotionally deep.' },
    'Pisces': { dates: 'Feb 19 – Mar 20', element: 'Water', rulingPlanet: 'Neptune', personality: 'Compassionate, artistic, and deeply sensitive. You are the dreamer, the mystic, who dissolves boundaries between the physical and spiritual. You carry the wisdom of the ocean.', love: 'Romantic and selfless. You seek a partner who understands your deep emotional currents and who can anchor your soaring spirit.' }
  };

  // --- STATE ---
  const [angelNumber, setAngelNumber] = useState('');
  const [angelMeaning, setAngelMeaning] = useState('');
  const [angelSource, setAngelSource] = useState('');
  const [showFullAngel, setShowFullAngel] = useState(false);

  const getAngelNumber = () => {
    const randomEntry = angelDatabase[Math.floor(Math.random() * angelDatabase.length)];
    setAngelNumber(randomEntry.num);
    setAngelMeaning(randomEntry.meaning);
    setAngelSource(`Archangel ${Math.floor(Math.random() * 100)}`); // Random name for mystical feel
    setShowFullAngel(false);
  };

  const [birthDate, setBirthDate] = useState('');
  const [lifePathNumber, setLifePathNumber] = useState('');
  const [lifePathProfile, setLifePathProfile] = useState(null);

  const calculateLifePath = (e) => {
    e.preventDefault();
    if (!birthDate) return;
    const digits = birthDate.replace(/-/g, '');
    let sum = digits.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    while (sum > 9) {
      sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    setLifePathNumber(sum.toString());
    setLifePathProfile(lifePathProfiles[sum.toString()]);
  };

  const [zodiacDOB, setZodiacDOB] = useState('');
  const [zodiacResult, setZodiacResult] = useState(null);

  const calculateZodiac = (e) => {
    e.preventDefault();
    if (!zodiacDOB) return;
    const date = new Date(zodiacDOB);
    const sign = getZodiacSign(date);
    setZodiacResult({ sign, profile: zodiacProfiles[sign] });
  };

  return (
    <div style={styles.container}>
      
      {/* --- HERO & QUICK LINKS --- */}
      <motion.div initial="hidden" animate="visible" variants={fadeUp} style={styles.hero}>
        <div style={styles.heroContent}>
          <p style={styles.heroSubtitle}>HIGHER SPIRITUAL PATHS</p>
          <h1 style={styles.heroTitle}>EMBRACE YOUR<br />SPIRITUAL JOURNEY</h1>
          <p style={styles.heroDesc}>Discover transformative practices, insights, and celestial tools to elevate your spiritual experience.</p>
          <div style={styles.quickLinks}>
            <button onClick={() => navigate('/blog')} style={styles.quickBtn}>📖 Blog</button>
            <button onClick={() => navigate('/podcast')} style={styles.quickBtn}>🎙️ Podcast</button>
            <button onClick={() => navigate('/daily-wisdom')} style={styles.quickBtn}>🕯️ Wisdom</button>
            <button onClick={() => navigate('/shop')} style={styles.quickBtn}>🛍️ Shop</button>
          </div>
        </div>
      </motion.div>

      {/* --- ANGEL NUMBER --- */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} style={styles.sectionLavender}>
        <h2 style={styles.headingDarkPurple}>✨ Daily Angel Number</h2>
        <div style={styles.card}>
          <div style={styles.angelNumberDisplay}>{angelNumber || '???'}</div>
          <button onClick={getAngelNumber} style={styles.actionBtn}>Reveal Today's Number</button>
          {angelMeaning && (
            <div style={styles.resultContainer}>
              <p style={styles.meaningText}>
                {showFullAngel ? angelMeaning : angelMeaning.substring(0, 80) + '...'}
              </p>
              {!showFullAngel && (
                <button onClick={() => setShowFullAngel(true)} style={styles.continuReadBtn}>
                  Continue Reading ↴
                </button>
              )}
              <p style={styles.angelSource}>~ {angelSource}</p>
            </div>
          )}
        </div>
      </motion.div>

      {/* --- LIFE PATH --- */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} style={styles.sectionWhite}>
        <h2 style={styles.headingDark}>🔢 Your Life Path Number</h2>
        <div style={styles.card}>
          <form onSubmit={calculateLifePath} style={styles.calculatorForm}>
            <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} style={styles.input} required />
            <button type="submit" style={styles.actionBtn}>Calculate My Path</button>
          </form>
          {lifePathProfile && (
            <div style={styles.resultContainer}>
              <h3 style={styles.resultNumber}>Life Path {lifePathNumber}</h3>
              <h4 style={styles.subTitle}>The {lifePathProfile.title}</h4>
              <div style={styles.detailsBox}>
                <p><strong>💼 Career:</strong> {lifePathProfile.career}</p>
                <p><strong>❤️ Love & Relationships:</strong> {lifePathProfile.love}</p>
                <p><strong>🌌 Spiritual Path:</strong> {lifePathProfile.spiritual}</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* --- ZODIAC CALCULATOR --- */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} style={styles.sectionLavender}>
        <h2 style={styles.headingDarkPurple}>🌙 Zodiac & Astrology</h2>
        <div style={styles.card}>
          <form onSubmit={calculateZodiac} style={styles.calculatorForm}>
            <input type="date" value={zodiacDOB} onChange={(e) => setZodiacDOB(e.target.value)} style={styles.input} required />
            <button type="submit" style={styles.actionBtn}>Reveal My Sign</button>
          </form>
          {zodiacResult && (
            <div style={styles.resultContainer}>
              <h3 style={styles.resultNumber}>♈ {zodiacResult.sign}</h3>
              <div style={styles.detailsBox}>
                <p><strong>📅 Dates:</strong> {zodiacResult.profile.dates}</p>
                <p><strong>🔥 Element:</strong> {zodiacResult.profile.element}</p>
                <p><strong>🪐 Ruling Planet:</strong> {zodiacResult.profile.rulingPlanet}</p>
                <p><strong>🧠 Personality:</strong> {zodiacResult.profile.personality}</p>
                <p><strong>💖 Love & Compatibility:</strong> {zodiacResult.profile.love}</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* --- BLOG & PODCAST FEED --- */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} style={styles.sectionWhite}>
        <h2 style={styles.headingDark}>📖 Latest Insights</h2>
        <div style={styles.feedGrid}>
          <div style={styles.feedCard} onClick={() => navigate('/blog')}>
            <div style={styles.feedIcon}>📄</div>
            <h3>Read the Blog</h3>
            <p>Explore deep teachings, reflections, and spiritual guidance.</p>
          </div>
          <div style={styles.feedCard} onClick={() => navigate('/podcast')}>
            <div style={styles.feedIcon}>🎧</div>
            <h3>Listen to the Podcast</h3>
            <p>Immerse yourself in transformative conversations and insights.</p>
          </div>
        </div>
      </motion.div>

      {/* --- CONNECT & FOOTER (YOUR REQUEST) --- */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        style={styles.sectionLavender}
      >
        <h2 style={styles.headingDarkPurple}>CONNECT WITH<br />US</h2>
        {/* ✅ MATCHED: practice.png */}
        <img src="/practice.png" alt="Community" style={styles.footerImg} />
        <div style={styles.contactInfo}>
          <div>📞 Bennie Hollis: +1 (352) 544-9302</div>
          <div>📞 Karen Johnson: +1 (716) 364-0344</div>
          <div>📞 Kolawole Emmanuel: +234 (810) 849-1093</div>
        </div>
        <div style={styles.footerDivider}></div>
        <div style={styles.footer}>THANK YOU! ❤️</div>
      </motion.div>

    </div>
  );
}

const styles = {
  container: { fontFamily: 'Arial, sans-serif', width: '100%', overflowX: 'hidden' },
  hero: { background: '#5B2A8C', color: '#fff', padding: '100px 20px', textAlign: 'center' },
  heroContent: { maxWidth: '800px', margin: '0 auto' },
  heroSubtitle: { fontSize: '14px', letterSpacing: '2px', fontWeight: 'bold', color: '#D4AF37', marginBottom: '10px' },
  heroTitle: { fontSize: '48px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2' },
  heroDesc: { fontSize: '18px', marginBottom: '30px', opacity: 0.9 },
  quickLinks: { display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px' },
  quickBtn: { background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', padding: '12px 25px', borderRadius: '30px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', transition: 'background 0.3s' },
  sectionLavender: { background: '#F5EEF8', padding: '80px 20px', textAlign: 'center' },
  sectionWhite: { background: '#fff', padding: '80px 20px', textAlign: 'center' },
  headingDarkPurple: { fontSize: '36px', color: '#5B2A8C', fontWeight: 'bold', marginBottom: '30px' },
  headingDark: { fontSize: '36px', color: '#5B2A8C', fontWeight: 'bold', marginBottom: '30px' },
  card: { background: '#fff', padding: '40px', borderRadius: '20px', maxWidth: '500px', margin: '0 auto', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' },
  angelNumberDisplay: { fontSize: '72px', fontWeight: 'bold', color: '#5B2A8C', marginBottom: '20px' },
  actionBtn: { background: '#5B2A8C', color: '#fff', border: 'none', padding: '12px 30px', borderRadius: '30px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' },
  continuReadBtn: { background: 'transparent', border: 'none', color: '#5B2A8C', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', marginTop: '5px', textDecoration: 'underline' },
  meaningText: { marginTop: '20px', fontSize: '18px', lineHeight: '1.6', color: '#444' },
  angelSource: { marginTop: '10px', fontSize: '14px', color: '#888', fontStyle: 'italic' },
  calculatorForm: { display: 'flex', flexDirection: 'column', gap: '15px' },
  input: { padding: '12px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '16px' },
  resultContainer: { marginTop: '20px', textAlign: 'center' },
  resultNumber: { fontSize: '28px', color: '#5B2A8C', marginBottom: '10px' },
  subTitle: { fontSize: '20px', color: '#5B2A8C', marginBottom: '15px' },
  detailsBox: { textAlign: 'left', background: '#F5EEF8', padding: '15px', borderRadius: '10px', marginTop: '10px' },
  feedGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '800px', margin: '0 auto' },
  feedCard: { background: '#F5EEF8', padding: '30px', borderRadius: '20px', cursor: 'pointer', transition: 'transform 0.3s' },
  feedIcon: { fontSize: '40px', marginBottom: '10px' },
  footerImg: { width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '12px', margin: '20px auto', display: 'block' },
  contactInfo: { display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '20px', fontSize: '16px', color: '#5B2A8C' },
  footerDivider: { height: '1px', background: 'rgba(91, 42, 140, 0.2)', margin: '30px 0' },
  footer: { fontSize: '24px', fontWeight: 'bold', color: '#5B2A8C' }
};

export default Home;