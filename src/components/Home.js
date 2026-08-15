import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

function Home() {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // --- ANGEL NUMBER DATABASE (Deep Meanings) ---
  const angelMeanings = {
    '111': { 
      short: 'Manifestation & New Beginnings.', 
      long: 'The universe is aligning to support your thoughts. You are a powerful creator. Whatever you are focusing on right now is beginning to take form. Stay positive, stay clear, and trust that you are exactly where you need to be. This is a sign that your angels are working behind the scenes to manifest your desires. Keep your vibrations high and watch your reality shift.' 
    },
    '222': { 
      short: 'Balance, Harmony, and Trust.', 
      long: 'You are being asked to trust the process. Things may feel chaotic, but the universe is orchestrating a perfect balance. This number appears when you need to pause, breathe, and have faith. Do not force outcomes. Trust that the right doors will open at the right time. Your angels are reminding you that you are exactly where you need to be.' 
    },
    '333': { 
      short: 'Divine Protection & Awakening.', 
      long: 'This is a call to awaken to your spiritual gifts. The ascended masters are near, offering guidance and protection. You are being supported in your path. If you have been feeling a pull towards a spiritual practice, a new study, or a deeper connection, this is the confirmation you have been waiting for. Step forward with courage. You are not alone.' 
    },
    '444': { 
      short: 'Angels Are With You.', 
      long: 'A sign of strong foundation and stability. Your angels are surrounding you with unconditional love and protection. This number often appears when you are building something important in your life—whether it is a business, a relationship, or a home. Trust that your hard work is being seen, and the foundation you are laying right now is solid. Keep going.' 
    },
    '555': { 
      short: 'Major Transformation is Here.', 
      long: 'Change is not just coming—it is already here. Embrace it fully. This number signifies a major life shift that is necessary for your growth. It may feel uncomfortable, but it is clearing the path for something greater. Release fear, let go of the old, and embrace the new chapter that is unfolding. The universe is pushing you forward because it knows you are ready.' 
    },
    '666': { 
      short: 'Reflect and Realign.', 
      long: 'A gentle reminder to bring your mind and spirit into balance. This number does not signify evil, but rather an invitation to realign your thoughts and actions with your highest good. Are you overthinking? Are you focusing on fears rather than faith? Pause. Reflect. Adjust your mindset and bring your vibration back to harmony.' 
    },
    '777': { 
      short: 'Good Fortune & Alignment.', 
      long: 'This is a sign that you are in perfect spiritual alignment. Your hard work and inner growth are paying off. Miracles and lucky breaks are heading your way. This is a time to trust your intuition, as your inner knowing is currently speaking to you louder than ever. Listen closely, and follow the guidance you receive.' 
    },
    '888': { 
      short: 'Abundance & Prosperity.', 
      long: 'A powerful sign of financial and spiritual abundance. A cycle is ending, and a new, more prosperous one is beginning. This number often appears when you are about to experience a major windfall, a career breakthrough, or a shift in your wealth consciousness. Be open to receiving. You have worked hard, and the universe is ready to reward you.' 
    },
    '999': { 
      short: 'Completion & A New Chapter.', 
      long: 'You have reached the end of a major cycle in your life. It is time to close this chapter with gratitude and grace. The number 9 represents the culmination of wisdom and experience. As you complete this phase, you are being called to let go of what no longer serves you. Trust that the door closing is making way for a much better one to open.' 
    }
  };

  const [angelNumber, setAngelNumber] = useState('');
  const [angelMeaning, setAngelMeaning] = useState('');
  const [showFullMeaning, setShowFullMeaning] = useState(false);

  const getAngelNumber = () => {
    const num = Math.floor(100 + Math.random() * 900).toString();
    setAngelNumber(num);
    const data = angelMeanings[num];
    if (data) {
      setAngelMeaning(data);
      setShowFullMeaning(false);
    } else {
      setAngelMeaning({
        short: 'A Unique Message for You.',
        long: 'This number holds a unique and deeply personal vibration for you today. Look at it and reflect: What was on your mind when this number appeared? Trust that your angels are communicating directly with you, and the answer is already within your heart.'
      });
      setShowFullMeaning(false);
    }
  };

  // --- LIFE PATH DETAILED READINGS ---
  const lifePathMeanings = {
    '1': {
      title: 'The Leader',
      personality: 'Independent, ambitious, driven, and courageous. You are born to lead and inspire.',
      strengths: 'Confidence, originality, determination, and the ability to create your own reality.',
      weaknesses: 'Stubbornness, impatience, and a tendency to take on too much alone.',
      purpose: 'Your life purpose is to master self-reliance and use your unique gifts to pave the way for others. You are here to break new ground.'
    },
    '2': {
      title: 'The Peacemaker',
      personality: 'Diplomatic, intuitive, cooperative, and highly sensitive to the needs of others.',
      strengths: 'Empathy, mediation skills, adaptability, and a deep sense of fairness.',
      weaknesses: 'Over-sensitivity, indecisiveness, and a tendency to avoid conflict.',
      purpose: 'Your life purpose is to bring harmony and balance to your relationships and your community. You are the glue that holds people together.'
    },
    '3': {
      title: 'The Creative',
      personality: 'Expressive, optimistic, artistic, and full of joy and enthusiasm.',
      strengths: 'Communication, creativity, charisma, and a natural ability to uplift others.',
      weaknesses: 'Scatter-brained, moodiness, and a tendency to over-promise.',
      purpose: 'Your life purpose is to express your unique creativity and inspire others to find their own joy. You are here to bring color and light to the world.'
    },
    '4': {
      title: 'The Builder',
      personality: 'Practical, disciplined, grounded, and incredibly hardworking.',
      strengths: 'Reliability, organization, patience, and a strong work ethic.',
      weaknesses: 'Stubbornness, rigidity, and a fear of change.',
      purpose: 'Your life purpose is to build a solid, secure foundation for yourself and those you love. You are the architect of your own world.'
    },
    '5': {
      title: 'The Freedom Seeker',
      personality: 'Adventurous, versatile, curious, and deeply passionate about life.',
      strengths: 'Adaptability, charisma, open-mindedness, and a love for variety.',
      weaknesses: 'Restlessness, impulsiveness, and a fear of commitment.',
      purpose: 'Your life purpose is to explore, seek freedom, and inspire others to break free from their own limitations. You are a catalyst for change.'
    },
    '6': {
      title: 'The Nurturer',
      personality: 'Caring, responsible, protective, and deeply devoted to family and community.',
      strengths: 'Compassion, generosity, intuition, and a natural healing ability.',
      weaknesses: 'Smothering behavior, self-sacrifice, and a tendency to carry the world on your shoulders.',
      purpose: 'Your life purpose is to serve, heal, and nurture those around you. You are the heart of your community.'
    },
    '7': {
      title: 'The Seeker',
      personality: 'Analytical, spiritual, introspective, and deeply drawn to the mysteries of life.',
      strengths: 'Wisdom, logic, deep thinking, and a natural ability to uncover hidden truths.',
      weaknesses: 'Isolation, over-analysis, and a tendency to withdraw from the world.',
      purpose: 'Your life purpose is to seek knowledge, understand the unseen, and share your deep insights with humanity.'
    },
    '8': {
      title: 'The Achiever',
      personality: 'Ambitious, powerful, authoritative, and a natural-born leader.',
      strengths: 'Strong will, business acumen, organization, and the ability to manifest wealth.',
      weaknesses: 'Workaholism, arrogance, and a tendency to prioritize success over relationships.',
      purpose: 'Your life purpose is to master the material world and use your power and abundance to uplift others.'
    },
    '9': {
      title: 'The Humanitarian',
      personality: 'Generous, artistic, wise, and deeply connected to the universal consciousness.',
      strengths: 'Compassion, forgiveness, wisdom, and a broad understanding of the human experience.',
      weaknesses: 'Self-neglect, martyrdom, and a tendency to give until you are empty.',
      purpose: 'Your life purpose is to serve humanity in a global and selfless way. You are here to complete cycles and pave the way for the next generation.'
    }
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

  // --- ZODIAC & BIRTH CHART CALCULATOR ---
  const [zodiacDate, setZodiacDate] = useState('');
  const [zodiacResult, setZodiacResult] = useState(null);

  const calculateZodiac = (e) => {
    e.preventDefault();
    if (!zodiacDate) return;
    const date = new Date(zodiacDate);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    let sign = '', traits = '', strengths = '', weaknesses = '', bestMatch = '', purpose = '';

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      sign = 'Aries'; traits = 'Courageous, determined, confident, and optimistic.'; strengths = 'Leadership, bravery, and enthusiasm.'; weaknesses = 'Impulsiveness, impatience, and a short temper.'; bestMatch = 'Leo & Sagittarius'; purpose = 'To initiate and inspire.';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      sign = 'Taurus'; traits = 'Reliable, patient, practical, and devoted.'; strengths = 'Stability, loyalty, and a love for beauty.'; weaknesses = 'Stubbornness, possessiveness, and resistance to change.'; bestMatch = 'Virgo & Capricorn'; purpose = 'To build and preserve.';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      sign = 'Gemini'; traits = 'Gentle, curious, adaptable, and intellectual.'; strengths = 'Communication, wit, and versatility.'; weaknesses = 'Indecisiveness, inconsistency, and nervousness.'; bestMatch = 'Libra & Aquarius'; purpose = 'To connect and communicate.';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      sign = 'Cancer'; traits = 'Tenacious, highly intuitive, emotional, and sympathetic.'; strengths = 'Empathy, protection, and a nurturing nature.'; weaknesses = 'Over-sensitivity, moodiness, and a tendency to cling.'; bestMatch = 'Scorpio & Pisces'; purpose = 'To nurture and protect.';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      sign = 'Leo'; traits = 'Creative, passionate, generous, and warm-hearted.'; strengths = 'Charisma, leadership, and creativity.'; weaknesses = 'Arrogance, pride, and a need for constant attention.'; bestMatch = 'Aries & Sagittarius'; purpose = 'To shine and inspire.';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      sign = 'Virgo'; traits = 'Loyal, analytical, kind, hardworking, and practical.'; strengths = 'Perfectionism, intelligence, and a strong work ethic.'; weaknesses = 'Over-critical, worrying, and perfectionistic.'; bestMatch = 'Taurus & Capricorn'; purpose = 'To serve and heal.';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      sign = 'Libra'; traits = 'Social, fair-minded, diplomatic, and gracious.'; strengths = 'Diplomacy, charm, and a love for balance.'; weaknesses = 'Indecisiveness, avoidance of conflict, and a tendency to be superficial.'; bestMatch = 'Gemini & Aquarius'; purpose = 'To bring balance and justice.';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      sign = 'Scorpio'; traits = 'Resourceful, brave, passionate, and stubborn.'; strengths = 'Determination, intuition, and a powerful presence.'; weaknesses = 'Jealousy, suspicion, and a tendency to be controlling.'; bestMatch = 'Cancer & Pisces'; purpose = 'To transform and regenerate.';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      sign = 'Sagittarius'; traits = 'Generous, idealistic, optimistic, and adventurous.'; strengths = 'Honesty, philosophical thinking, and a love for freedom.'; weaknesses = 'Bluntness, restlessness, and a fear of commitment.'; bestMatch = 'Aries & Leo'; purpose = 'To explore and expand.';
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      sign = 'Capricorn'; traits = 'Responsible, disciplined, and self-controlled.'; strengths = 'Ambition, discipline, and a strong sense of duty.'; weaknesses = 'Pessimism, rigidity, and workaholism.'; bestMatch = 'Taurus & Virgo'; purpose = 'To achieve and lead.';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      sign = 'Aquarius'; traits = 'Progressive, original, independent, and humanitarian.'; strengths = 'Inventiveness, objectivity, and a love for humanity.'; weaknesses = 'Detachment, rebellion, and unpredictability.'; bestMatch = 'Gemini & Libra'; purpose = 'To innovate and liberate.';
    } else {
      sign = 'Pisces'; traits = 'Compassionate, artistic, intuitive, and gentle.'; strengths = 'Creativity, empathy, and a deep spiritual connection.'; weaknesses = 'Escapism, over-sensitivity, and a lack of boundaries.'; bestMatch = 'Cancer & Scorpio'; purpose = 'To dream and heal.';
    }

    setZodiacResult({ sign, traits, strengths, weaknesses, bestMatch, purpose });
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
          {angelMeaning && (
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

      {/* --- ZODIAC & ASTROLOGY --- */}
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
              <p><strong>Traits:</strong> {zodiacResult.traits}</p>
              <p><strong>Strengths:</strong> {zodiacResult.strengths}</p>
              <p><strong>Weaknesses:</strong> {zodiacResult.weaknesses}</p>
              <p><strong>Best Match:</strong> {zodiacResult.bestMatch}</p>
              <p><strong>Purpose:</strong> {zodiacResult.purpose}</p>
            </div>
          )}
        </div>
      </motion.div>

      {/* --- FEED --- */}
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