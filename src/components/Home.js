import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';  // <--- Just useState is fine
function Home() {
  const navigate = useNavigate();

  // --- ANIMATION SETTINGS ---
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // --- ZODIAC DATA ---
  const zodiacData = {
    'Aries': { dates: 'Mar 21 – Apr 19', element: 'Fire', symbol: 'The Ram', traits: 'Courageous, determined, confident, enthusiastic, optimistic, honest, passionate.' },
    'Taurus': { dates: 'Apr 20 – May 20', element: 'Earth', symbol: 'The Bull', traits: 'Reliable, patient, practical, devoted, responsible, stable.' },
    'Gemini': { dates: 'May 21 – Jun 20', element: 'Air', symbol: 'The Twins', traits: 'Gentle, affectionate, curious, adaptable, intellectual, communicative.' },
    'Cancer': { dates: 'Jun 21 – Jul 22', element: 'Water', symbol: 'The Crab', traits: 'Tenacious, highly intuitive, emotional, sympathetic, imaginative.' },
    'Leo': { dates: 'Jul 23 – Aug 22', element: 'Fire', symbol: 'The Lion', traits: 'Creative, passionate, generous, warm-hearted, cheerful, humorous.' },
    'Virgo': { dates: 'Aug 23 – Sep 22', element: 'Earth', symbol: 'The Virgin', traits: 'Loyal, analytical, kind, hardworking, practical, observant.' },
    'Libra': { dates: 'Sep 23 – Oct 22', element: 'Air', symbol: 'The Scales', traits: 'Social, fair-minded, diplomatic, gracious, cooperative, peace-loving.' },
    'Scorpio': { dates: 'Oct 23 – Nov 21', element: 'Water', symbol: 'The Scorpion', traits: 'Resourceful, brave, passionate, stubborn, intuitive, determined.' },
    'Sagittarius': { dates: 'Nov 22 – Dec 21', element: 'Fire', symbol: 'The Archer', traits: 'Generous, idealistic, great sense of humor, optimistic, adventurous.' },
    'Capricorn': { dates: 'Dec 22 – Jan 19', element: 'Earth', symbol: 'The Goat', traits: 'Responsible, disciplined, self-control, good managers, hardworking.' },
    'Aquarius': { dates: 'Jan 20 – Feb 18', element: 'Air', symbol: 'The Water Bearer', traits: 'Progressive, original, independent, humanitarian, intellectual, inventive.' },
    'Pisces': { dates: 'Feb 19 – Mar 20', element: 'Water', symbol: 'The Fish', traits: 'Compassionate, artistic, intuitive, gentle, wise, musical.' }
  };
  const signs = Object.keys(zodiacData);
  const [selectedSign, setSelectedSign] = useState('');

  // --- ANGEL NUMBER GENERATOR ---
  const [angelNumber, setAngelNumber] = useState('');
  const [angelMeaning, setAngelMeaning] = useState('');
  const angelMeanings = {
    '111': 'Manifestation & new beginnings. Your thoughts are becoming reality.',
    '222': 'Balance & harmony. Trust the process; you are on the right path.',
    '333': 'Divine protection & spiritual awakening. You are being guided.',
    '444': 'Angels are near. Stability, foundation, and hard work will pay off.',
    '555': 'Change is coming. Embrace it; transformation is on the horizon.',
    '666': 'Reflect on your thoughts. Bring balance to your mind and spirit.',
    '777': 'A sign of good fortune. Your spiritual path is aligned with the universe.',
    '888': 'Abundance & financial prosperity. A cycle is ending, and a new one begins.',
    '999': 'Completion & closure. A chapter ends; a new journey awaits.'
  };

  const getAngelNumber = () => {
    const num = Math.floor(100 + Math.random() * 900).toString();
    setAngelNumber(num);
    setAngelMeaning(angelMeanings[num] || 'This number holds deep personal significance for you. Reflect on its presence.');
  };

  // --- LIFE PATH CALCULATOR ---
  const [birthDate, setBirthDate] = useState('');
  const [lifePathNumber, setLifePathNumber] = useState('');
  const [lifePathMeaning, setLifePathMeaning] = useState('');
  
  const lifePathMeanings = {
    '1': 'The Leader. Independent, ambitious, and driven. Your path is to forge your own way.',
    '2': 'The Peacemaker. Cooperative, diplomatic, and intuitive. You bring balance to the world.',
    '3': 'The Creative. Expressive, artistic, and optimistic. You are here to uplift others.',
    '4': 'The Builder. Practical, disciplined, and grounded. Your foundation is your strength.',
    '5': 'The Freedom Seeker. Adventurous, restless, and versatile. You embrace change.',
    '6': 'The Nurturer. Caring, responsible, and protective. You are the heart of your community.',
    '7': 'The Seeker. Analytical, spiritual, and introspective. You search for the hidden truths.',
    '8': 'The Achiever. Ambitious, powerful, and a natural leader. You are here to create abundance.',
    '9': 'The Humanitarian. Generous, artistic, and wise. You are here to serve humanity.'
  };

  const calculateLifePath = (e) => {
    e.preventDefault();
    if (!birthDate) return;
    const digits = birthDate.replace(/-/g, '');
    let sum = digits.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    while (sum > 9) {
      sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    setLifePathNumber(sum.toString());
    setLifePathMeaning(lifePathMeanings[sum.toString()]);
  };

  return (
    <div style={styles.container}>
      
      {/* --- HERO & QUICK LINKS --- */}
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={fadeUp} 
        style={styles.hero}
      >
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

      {/* --- DAILY ANGEL NUMBER --- */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        style={styles.sectionLavender}
      >
        <h2 style={styles.headingDarkPurple}>✨ Daily Angel Number</h2>
        <div style={styles.card}>
          <div style={styles.angelNumberDisplay}>{angelNumber || '???'}</div>
          <button onClick={getAngelNumber} style={styles.actionBtn}>Reveal Today's Number</button>
          {angelMeaning && <p style={styles.meaningText}>{angelMeaning}</p>}
        </div>
      </motion.div>

      {/* --- LIFE PATH CALCULATOR --- */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        style={styles.sectionWhite}
      >
        <h2 style={styles.headingDark}>🔢 Your Life Path Number</h2>
        <div style={styles.card}>
          <form onSubmit={calculateLifePath} style={styles.calculatorForm}>
            <input 
              type="date" 
              value={birthDate} 
              onChange={(e) => setBirthDate(e.target.value)} 
              style={styles.input}
              required
            />
            <button type="submit" style={styles.actionBtn}>Calculate My Path</button>
          </form>
          {lifePathNumber && (
            <div style={styles.resultContainer}>
              <h3 style={styles.resultNumber}>Life Path {lifePathNumber}</h3>
              <p style={styles.meaningText}>{lifePathMeaning}</p>
            </div>
          )}
        </div>
      </motion.div>

      {/* --- ZODIAC & ASTROLOGY --- */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        style={styles.sectionLavender}
      >
        <h2 style={styles.headingDarkPurple}>🌙 Zodiac & Astrology</h2>
        <div style={styles.card}>
          <select 
            value={selectedSign} 
            onChange={(e) => setSelectedSign(e.target.value)}
            style={styles.select}
          >
            <option value="">Select Your Sign</option>
            {signs.map((sign) => (
              <option key={sign} value={sign}>{sign}</option>
            ))}
          </select>
          {selectedSign && (
            <div style={styles.resultContainer}>
              <h3 style={styles.resultNumber}>{selectedSign}</h3>
              <p style={styles.zodiacDetails}>
                <strong>Dates:</strong> {zodiacData[selectedSign].dates}<br/>
                <strong>Element:</strong> {zodiacData[selectedSign].element}<br/>
                <strong>Symbol:</strong> {zodiacData[selectedSign].symbol}<br/>
                <strong>Traits:</strong> {zodiacData[selectedSign].traits}
              </p>
            </div>
          )}
        </div>
      </motion.div>

      {/* --- BLOG & PODCAST FEED --- */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        style={styles.sectionWhite}
      >
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
  container: {
    fontFamily: 'Arial, sans-serif',
    width: '100%',
    overflowX: 'hidden'
  },
  hero: {
    background: '#5B2A8C',
    color: '#fff',
    padding: '100px 20px',
    textAlign: 'center'
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  heroSubtitle: {
    fontSize: '14px',
    letterSpacing: '2px',
    fontWeight: 'bold',
    color: '#D4AF37',
    marginBottom: '10px'
  },
  heroTitle: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '20px',
    lineHeight: '1.2'
  },
  heroDesc: {
    fontSize: '18px',
    marginBottom: '30px',
    opacity: 0.9
  },
  quickLinks: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '15px'
  },
  quickBtn: {
    background: 'rgba(255,255,255,0.15)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.3)',
    padding: '12px 25px',
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background 0.3s'
  },
  sectionLavender: {
    background: '#F5EEF8',
    padding: '80px 20px',
    textAlign: 'center'
  },
  sectionWhite: {
    background: '#fff',
    padding: '80px 20px',
    textAlign: 'center'
  },
  headingDarkPurple: {
    fontSize: '36px',
    color: '#5B2A8C',
    fontWeight: 'bold',
    marginBottom: '30px'
  },
  headingDark: {
    fontSize: '36px',
    color: '#5B2A8C',
    fontWeight: 'bold',
    marginBottom: '30px'
  },
  card: {
    background: '#fff',
    padding: '40px',
    borderRadius: '20px',
    maxWidth: '500px',
    margin: '0 auto',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
  },
  angelNumberDisplay: {
    fontSize: '72px',
    fontWeight: 'bold',
    color: '#5B2A8C',
    marginBottom: '20px'
  },
  actionBtn: {
    background: '#5B2A8C',
    color: '#fff',
    border: 'none',
    padding: '12px 30px',
    borderRadius: '30px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  meaningText: {
    marginTop: '20px',
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#444'
  },
  calculatorForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  input: {
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    fontSize: '16px'
  },
  resultContainer: {
    marginTop: '20px'
  },
  resultNumber: {
    fontSize: '24px',
    color: '#5B2A8C',
    marginBottom: '10px'
  },
  select: {
    width: '100%',
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    fontSize: '16px',
    marginBottom: '20px'
  },
  zodiacDetails: {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#444'
  },
  feedGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    maxWidth: '800px',
    margin: '0 auto'
  },
  feedCard: {
    background: '#F5EEF8',
    padding: '30px',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'transform 0.3s'
  },
  feedIcon: {
    fontSize: '40px',
    marginBottom: '10px'
  }
};

export default Home;