import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

function Home() {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // --- LARGE POOL OF ANGEL NUMBER MEANINGS ---
  const angelPool = [
    { short: 'Divine Alignment.', long: 'The universe is orchestrating a perfect alignment for you. Trust that everything you are experiencing is leading you toward your highest good. Stay grounded and open to receiving.' },
    { short: 'Trust Your Intuition.', long: 'Your inner voice is speaking louder than ever. This is a sign that you must trust your gut feelings, even if they don’t make logical sense. Your intuition is your direct line to divine guidance.' },
    { short: 'New Opportunities Arriving.', long: 'A door you have been waiting for is about to open. Prepare yourself to step through it with confidence and faith. The universe is presenting you with a chance to grow.' },
    { short: 'Release and Let Go.', long: 'You are being asked to release control and trust the flow of life. Holding on too tightly is blocking your blessings. Surrender to the process and let the universe guide you.' },
    { short: 'You Are on the Right Path.', long: 'Even if things feel uncertain right now, you are exactly where you are meant to be. Trust the timing of your life. Your journey is unfolding perfectly.' },
    { short: 'Stay Positive & Focused.', long: 'Your thoughts are powerful. This number is a reminder to focus on what you want, not what you fear. Keep your vibration high and watch your reality shift.' },
    { short: 'Spiritual Awakening.', long: 'You are undergoing a deep spiritual transformation. Old beliefs are falling away, making room for a higher truth. Embrace the change—you are evolving.' },
    { short: 'Balance & Harmony.', long: 'Your angels are reminding you to bring balance to your life. Check in with your mind, body, and spirit. Restore harmony where there is chaos.' },
    { short: 'Protected by Light.', long: 'You are surrounded by a protective shield of divine light. Fear not the challenges ahead. You are safe, guided, and deeply loved by the universe.' },
    { short: 'A Miracle is Coming.', long: 'Something wonderful is on its way to you. It may arrive in an unexpected form, but it will bring you immense joy and relief. Stay open to receiving.' },
    { short: 'Healing Energy.', long: 'You are being bathed in restorative energy. If you have been feeling tired, stressed, or unwell, healing is on its way. Rest and allow the universe to restore you.' },
    { short: 'Take Inspired Action.', long: 'It is not enough to dream—you must act. This number is a call to take a step, no matter how small, toward your goals. The universe will meet you halfway.' },
    { short: 'Patience is Key.', long: 'Great things take time. Do not rush the process. The seed you have planted is growing, even if you cannot see it yet. Trust the slow work of the universe.' },
    { short: 'You Are Loved.', long: 'The universe is sending you a reminder that you are unconditionally loved. Not because of what you do, but because of who you are. You are worthy of love and abundance.' },
    { short: 'Shadow Work.', long: 'It is time to look within and heal the parts of yourself you have been avoiding. Facing your shadows is the path to true liberation. You are strong enough to do this.' }
  ];

  const [angelNumber, setAngelNumber] = useState('');
  const [angelMeaning, setAngelMeaning] = useState({ short: '', long: '' });
  const [showFullMeaning, setShowFullMeaning] = useState(false);

  const getAngelNumber = () => {
    // Step 1: Generate a random 3-digit number (100 - 999)
    const num = Math.floor(100 + Math.random() * 900).toString();
    setAngelNumber(num);
    
    // Step 2: Pick a RANDOM meaning from the pool
    const randomIndex = Math.floor(Math.random() * angelPool.length);
    const chosenMeaning = angelPool[randomIndex];
    
    setAngelMeaning(chosenMeaning);
    setShowFullMeaning(false); // Reset the "Read More" toggle
  };

  // --- LIFE PATH MEANINGS ---
  const lifePathMeanings = {
    '1': { title: 'The Leader', personality: 'Independent, ambitious, driven, and courageous.', strengths: 'Confidence, originality, determination.', weaknesses: 'Stubbornness, impatience.', purpose: 'To master self-reliance and pave the way for others.' },
    '2': { title: 'The Peacemaker', personality: 'Diplomatic, intuitive, cooperative, and highly sensitive.', strengths: 'Empathy, mediation skills, adaptability.', weaknesses: 'Over-sensitivity, indecisiveness.', purpose: 'To bring harmony and balance to relationships.' },
    '3': { title: 'The Creative', personality: 'Expressive, optimistic, artistic, and full of joy.', strengths: 'Communication, creativity, charisma.', weaknesses: 'Scatter-brained, moodiness.', purpose: 'To express creativity and inspire joy.' },
    '4': { title: 'The Builder', personality: 'Practical, disciplined, grounded, and hardworking.', strengths: 'Reliability, organization, patience.', weaknesses: 'Stubbornness, rigidity.', purpose: 'To build a secure foundation for self and others.' },
    '5': { title: 'The Freedom Seeker', personality: 'Adventurous, versatile, curious, and passionate.', strengths: 'Adaptability, charisma, open-mindedness.', weaknesses: 'Restlessness, impulsiveness.', purpose: 'To explore, seek freedom, and inspire change.' },
    '6': { title: 'The Nurturer', personality: 'Caring, responsible, protective, and devoted.', strengths: 'Compassion, generosity, intuition.', weaknesses: 'Smothering behavior, self-sacrifice.', purpose: 'To serve, heal, and nurture the community.' },
    '7': { title: 'The Seeker', personality: 'Analytical, spiritual, introspective, and wise.', strengths: 'Wisdom, logic, deep thinking.', weaknesses: 'Isolation, over-analysis.', purpose: 'To seek hidden truths and share deep insights.' },
    '8': { title: 'The Achiever', personality: 'Ambitious, powerful, authoritative, and strong-willed.', strengths: 'Business acumen, organization, manifestation.', weaknesses: 'Workaholism, arrogance.', purpose: 'To master the material world and uplift others.' },
    '9': { title: 'The Humanitarian', personality: 'Generous, artistic, wise, and deeply connected.', strengths: 'Compassion, forgiveness, global perspective.', weaknesses: 'Self-neglect, martyrdom.', purpose: 'To serve humanity and complete great cycles.' }
  };

  const [birthDate, setBirthDate] = useState('');
  const [lifePathNumber, setLifePathNumber] = useState('');
  const [lifePathData, setLifePathData] = useState(null);

  const calculateLifePath = (e) => {
    e.preventDefault();
    if (!birthDate) return;
    const digits = birthDate.replace(/-/g, '');
    let sum = digits.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    while (sum > 9) {
      sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    const numStr = sum.toString();
    setLifePathNumber(numStr);
    setLifePathData(lifePathMeanings[numStr]);
  };

  // --- ZODIAC & ELEMENTS ---
  const [zodiacDate, setZodiacDate] = useState('');
  const [zodiacResult, setZodiacResult] = useState(null);

  const calculateZodiac = (e) => {
    e.preventDefault();
    if (!zodiacDate) return;
    const date = new Date(zodiacDate);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    let sign = '', element = '', traits = '', strengths = '', weaknesses = '', bestMatch = '', purpose = '';

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      sign = 'Aries'; element = '🔥 Fire'; traits = 'Courageous, determined, confident, and optimistic.'; strengths = 'Leadership, bravery, enthusiasm.'; weaknesses = 'Impulsiveness, impatience.'; bestMatch = 'Leo & Sagittarius'; purpose = 'To initiate and inspire.';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      sign = 'Taurus'; element = '🌍 Earth'; traits = 'Reliable, patient, practical, and devoted.'; strengths = 'Stability, loyalty, a love for beauty.'; weaknesses = 'Stubbornness, possessiveness.'; bestMatch = 'Virgo & Capricorn'; purpose = 'To build and preserve.';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      sign = 'Gemini'; element = '💨 Air'; traits = 'Gentle, curious, adaptable, and intellectual.'; strengths = 'Communication, wit, versatility.'; weaknesses = 'Indecisiveness, inconsistency.'; bestMatch = 'Libra & Aquarius'; purpose = 'To connect and communicate.';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      sign = 'Cancer'; element = '💧 Water'; traits = 'Tenacious, highly intuitive, emotional, and sympathetic.'; strengths = 'Empathy, protection, nurturing.'; weaknesses = 'Over-sensitivity, moodiness.'; bestMatch = 'Scorpio & Pisces'; purpose = 'To nurture and protect.';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      sign = 'Leo'; element = '🔥 Fire'; traits = 'Creative, passionate, generous, and warm-hearted.'; strengths = 'Charisma, leadership, creativity.'; weaknesses = 'Arrogance, pride.'; bestMatch = 'Aries & Sagittarius'; purpose = 'To shine and inspire.';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      sign = 'Virgo'; element = '🌍 Earth'; traits = 'Loyal, analytical, kind, hardworking, and practical.'; strengths = 'Perfectionism, intelligence, work ethic.'; weaknesses = 'Over-critical, worrying.'; bestMatch = 'Taurus & Capricorn'; purpose = 'To serve and heal.';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      sign = 'Libra'; element = '💨 Air'; traits = 'Social, fair-minded, diplomatic, and gracious.'; strengths = 'Diplomacy, charm, balance.'; weaknesses = 'Indecisiveness, conflict avoidance.'; bestMatch = 'Gemini & Aquarius'; purpose = 'To bring balance and justice.';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      sign = 'Scorpio'; element = '💧 Water'; traits = 'Resourceful, brave, passionate, and stubborn.'; strengths = 'Determination, intuition, presence.'; weaknesses = 'Jealousy, suspicion.'; bestMatch = 'Cancer & Pisces'; purpose = 'To transform and regenerate.';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      sign = 'Sagittarius'; element = '🔥 Fire'; traits = 'Generous, idealistic, optimistic, and adventurous.'; strengths = 'Honesty, philosophical, freedom-loving.'; weaknesses = 'Bluntness, restlessness.'; bestMatch = 'Aries & Leo'; purpose = 'To explore and expand.';
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      sign = 'Capricorn'; element = '🌍 Earth'; traits = 'Responsible, disciplined, and self-controlled.'; strengths = 'Ambition, discipline, duty.'; weaknesses = 'Pessimism, rigidity.'; bestMatch = 'Taurus & Virgo'; purpose = 'To achieve and lead.';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      sign = 'Aquarius'; element = '💨 Air'; traits = 'Progressive, original, independent, and humanitarian.'; strengths = 'Inventiveness, objectivity, humanity.'; weaknesses = 'Detachment, rebellion.'; bestMatch = 'Gemini & Libra'; purpose = 'To innovate and liberate.';
    } else {
      sign = 'Pisces'; element = '💧 Water'; traits = 'Compassionate, artistic, intuitive, and gentle.'; strengths = 'Creativity, empathy, spiritual connection.'; weaknesses = 'Escapism, over-sensitivity.'; bestMatch = 'Cancer & Scorpio'; purpose = 'To dream and heal.';
    }

    setZodiacResult({ sign, element, traits, strengths, weaknesses, bestMatch, purpose });
  };

  return (
    <div style={styles.container}>
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
          {angelMeaning.short && (
            <div style={styles.meaningContainer}>
              <p style={styles.meaningText}>{angelMeaning.short}</p>
              <p style={styles.meaningLongText}>
                {showFullMeaning ? angelMeaning.long : angelMeaning.long.substring(0, 120) + '...'}
              </p>
              <button onClick={() => setShowFullMeaning(!showFullMeaning)} style={styles.textLink}>
                {showFullMeaning ? 'Read Less' : 'Continue Reading'}
              </button>
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
          {lifePathData && (
            <div style={styles.resultContainer}>
              <h3 style={styles.resultNumber}>Life Path {lifePathNumber}</h3>
              <p><strong>Title:</strong> {lifePathData.title}</p>
              <p><strong>Personality:</strong> {lifePathData.personality}</p>
              <p><strong>Strengths:</strong> {lifePathData.strengths}</p>
              <p><strong>Weaknesses:</strong> {lifePathData.weaknesses}</p>
              <p><strong>Purpose:</strong> {lifePathData.purpose}</p>
            </div>
          )}
        </div>
      </motion.div>

      {/* --- ZODIAC & BIRTH CHART --- */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} style={styles.sectionLavender}>
        <h2 style={styles.headingDarkPurple}>🌙 Zodiac & Birth Chart</h2>
        <div style={styles.card}>
          <form onSubmit={calculateZodiac} style={styles.calculatorForm}>
            <input type="date" value={zodiacDate} onChange={(e) => setZodiacDate(e.target.value)} style={styles.input} required />
            <button type="submit" style={styles.actionBtn}>Reveal My Chart</button>
          </form>
          {zodiacResult && (
            <div style={styles.resultContainer}>
              <h3 style={styles.resultNumber}>{zodiacResult.sign}</h3>
              <p><strong>Element:</strong> {zodiacResult.element}</p>
              <p><strong>Traits:</strong> {zodiacResult.traits}</p>
              <p><strong>Strengths:</strong> {zodiacResult.strengths}</p>
              <p><strong>Weaknesses:</strong> {zodiacResult.weaknesses}</p>
              <p><strong>Best Match:</strong> {zodiacResult.bestMatch}</p>
              <p><strong>Purpose:</strong> {zodiacResult.purpose}</p>
            </div>
          )}
        </div>
      </motion.div>

      {/* --- LATEST INSIGHTS --- */}
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
  meaningContainer: { marginTop: '20px' },
  meaningText: { fontSize: '18px', fontWeight: 'bold', color: '#5B2A8C' },
  meaningLongText: { fontSize: '16px', lineHeight: '1.6', color: '#444', marginTop: '10px' },
  textLink: { background: 'none', border: 'none', color: '#5B2A8C', textDecoration: 'underline', cursor: 'pointer', fontSize: '14px', marginTop: '5px' },
  calculatorForm: { display: 'flex', flexDirection: 'column', gap: '15px' },
  input: { padding: '12px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '16px' },
  resultContainer: { marginTop: '20px', textAlign: 'left' },
  resultNumber: { fontSize: '24px', color: '#5B2A8C', marginBottom: '10px', textAlign: 'center' },
  feedGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '800px', margin: '0 auto' },
  feedCard: { background: '#F5EEF8', padding: '30px', borderRadius: '20px', cursor: 'pointer', transition: 'transform 0.3s' },
  feedIcon: { fontSize: '40px', marginBottom: '10px' }
};

export default Home;