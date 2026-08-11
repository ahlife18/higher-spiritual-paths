import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div style={styles.container}>
      
      {/* --- HERO SECTION (LIGHTER PURPLE) --- */}
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={fadeUp} 
        style={styles.hero}
      >
        <div style={styles.heroContent}>
          <p style={styles.heroSubtitle}>HIGHER SPIRITUAL PATHS</p>
          <h1 style={styles.heroTitle}>EMBRACE YOUR<br />SPIRITUAL JOURNEY</h1>
          <p style={styles.heroDesc}>Discover transformative practices and insights to elevate your spiritual experience.</p>
          <button onClick={() => navigate('/the-path')} style={styles.exploreBtn}>EXPLORE NOW</button>
        </div>
      </motion.div>

      {/* --- OUR CORE BELIEFS (Using nature.png) --- */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        style={styles.sectionLavender}
      >
        <div style={styles.splitContainer}>
          <motion.div variants={fadeLeft} style={styles.splitText}>
            <div style={styles.beliefsHeader}>
              <span style={styles.starIcon}>✦</span>
              <h2 style={styles.headingDarkPurple}>OUR CORE<br />BELIEFS</h2>
            </div>
            <p style={styles.bodyDarkPurple}>
              At Higher Spiritual Paths, we embrace the journey of self-discovery and growth. Our teachings center on mindfulness, compassion, and the pursuit of inner peace.
            </p>
          </motion.div>
          <motion.div variants={fadeRight} style={styles.splitImage}>
            {/* ✅ MATCHED: nature.png */}
            <img src="/nature.png" alt="Spiritual Landscape" style={styles.landscapeImg} />
          </motion.div>
        </div>
      </motion.div>

      {/* --- HOLISTIC PRACTICES (Using works.png) --- */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        style={styles.sectionWhite}
      >
        <h2 style={styles.headingDark}>HOLISTIC<br />PRACTICES</h2>
        <div style={styles.practicesGrid}>
          <div style={styles.practiceCard}>
            {/* ✅ MATCHED: works.png */}
            <img src="/works.png" alt="Holistic Practices" style={styles.practiceImg} />
            <h3>Meditation & Circles</h3>
          </div>
        </div>
        <p style={styles.practicesDesc}>
          At Higher Spiritual Paths, we offer a variety of holistic practices designed to nurture your soul and calm your mind.
        </p>
      </motion.div>

      {/* --- MEET OUR GUIDES (Using meditaion.png) --- */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        style={styles.sectionLavender}
      >
        <h2 style={styles.headingDarkPurple}>MEET OUR<br />GUIDES</h2>
        <div style={styles.guidesGrid}>
          <div style={styles.guideCard}>
            {/* ✅ MATCHED: meditaion.png */}
            <img src="/meditaion.png" alt="Guide" style={styles.guideImg} />
            <h3 style={styles.guideName}>Kolawole Emmanuel</h3>
            <p style={styles.guideRole}>Founder</p>
          </div>
          <div style={styles.guideCard}>
            <img src="/meditaion.png" alt="Guide" style={styles.guideImg} />
            <h3 style={styles.guideName}>Karen Johnson</h3>
            <p style={styles.guideRole}>Co-Founder</p>
          </div>
          <div style={styles.guideCard}>
            <img src="/meditaion.png" alt="Guide" style={styles.guideImg} />
            <h3 style={styles.guideName}>Bennie Hollis</h3>
            <p style={styles.guideRole}>Co-Founder</p>
          </div>
        </div>
      </motion.div>

      {/* --- COMMUNITY VOICES (Using group circles.png) --- */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        style={styles.sectionWhite}
      >
        <h2 style={styles.headingDark}>COMMUNITY<br />VOICES</h2>
        <div style={styles.communityGrid}>
          <div style={styles.communityCard}>
            {/* ✅ MATCHED: group circles.png */}
            <img src="/group circles.png" alt="Community" style={styles.communityImg} />
            <p>"This path has completely changed how I view the world."</p>
            <span style={styles.name}>— Sarah M.</span>
          </div>
          <div style={styles.communityCard}>
            <img src="/group circles.png" alt="Community" style={styles.communityImg} />
            <p>"The peace I’ve found here is something I’ve been searching for."</p>
            <span style={styles.name}>— David T.</span>
          </div>
        </div>
      </motion.div>

      {/* --- SPIRITUAL RESOURCES (Using routine.png) --- */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        style={styles.sectionWhite}
      >
        <h2 style={styles.headingDark}>SPIRITUAL<br />RESOURCES</h2>
        <div style={styles.resourcesContainer}>
          {/* ✅ MATCHED: routine.png */}
          <img src="/routine.png" alt="Resources" style={styles.resourceImg} />
        </div>
        <p style={styles.practicesDesc}>
          Discover essential tools to enhance your spiritual journey—crystals, books, malas, and more.
        </p>
      </motion.div>

      {/* --- CONNECT & FOOTER (Using practice.png) --- */}
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
          <div>📞 Karen Johnson: +1 (713) 384-0334</div>
          <div>📞 Kolawole Emmanuel: +234 (081) 08491093</div>
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
  // --- HERO (LIGHTER PURPLE) ---
  hero: {
    background: '#F5EEF8', /* Light lavender from Canva */
    color: '#5B2A8C', /* Darker purple text */
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
    color: '#5B2A8C',
    marginBottom: '10px'
  },
  heroTitle: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '20px',
    lineHeight: '1.2',
    color: '#5B2A8C'
  },
  heroDesc: {
    fontSize: '18px',
    marginBottom: '30px',
    color: '#5B2A8C',
    opacity: 0.9
  },
  exploreBtn: {
    background: '#5B2A8C', /* Darker purple button */
    color: 'white',
    padding: '15px 40px',
    borderRadius: '30px',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer'
  },
  // --- SECTIONS ---
  sectionLavender: {
    background: '#F5EEF8',
    color: '#5B2A8C',
    padding: '80px 20px'
  },
  sectionWhite: {
    background: 'white',
    color: '#1A1A1A',
    padding: '80px 20px'
  },
  // --- BELIEFS ---
  splitContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
    alignItems: 'center'
  },
  splitText: {
    flex: 1,
    minWidth: '300px',
    paddingRight: '40px'
  },
  splitImage: {
    flex: 1,
    minWidth: '300px'
  },
  landscapeImg: {
    width: '100%',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  },
  beliefsHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '15px',
    marginBottom: '20px'
  },
  starIcon: {
    fontSize: '32px',
    color: '#5B2A8C'
  },
  headingDarkPurple: {
    fontSize: '36px',
    fontWeight: 'bold',
    margin: 0,
    color: '#5B2A8C'
  },
  headingDark: {
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '0 0 30px 0',
    color: '#5B2A8C'
  },
  bodyDarkPurple: {
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#5B2A8C',
    opacity: 0.9
  },
  // --- PRACTICES ---
  practicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
    maxWidth: '600px',
    margin: '0 auto 30px'
  },
  practiceCard: {
    textAlign: 'center'
  },
  practiceImg: {
    width: '100%',
    maxWidth: '300px',
    borderRadius: '12px',
    margin: '0 auto 15px'
  },
  practicesDesc: {
    maxWidth: '600px',
    margin: '0 auto',
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#5B2A8C'
  },
  // --- GUIDES ---
  guidesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px',
    maxWidth: '900px',
    margin: '0 auto'
  },
  guideCard: {
    textAlign: 'center',
    background: 'rgba(255,255,255,0.5)',
    padding: '20px',
    borderRadius: '15px'
  },
  guideImg: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '50%',
    margin: '0 auto 10px'
  },
  guideName: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '5px 0',
    color: '#5B2A8C'
  },
  guideRole: {
    fontSize: '14px',
    opacity: 0.7,
    color: '#5B2A8C'
  },
  // --- COMMUNITY ---
  communityGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    maxWidth: '800px',
    margin: '0 auto'
  },
  communityCard: {
    background: '#F5EEF8',
    padding: '30px',
    borderRadius: '12px',
    textAlign: 'center'
  },
  communityImg: {
    width: '100%',
    maxWidth: '300px',
    borderRadius: '12px',
    margin: '0 auto 15px'
  },
  name: {
    display: 'block',
    marginTop: '15px',
    fontWeight: 'bold',
    color: '#5B2A8C'
  },
  // --- RESOURCES ---
  resourcesContainer: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  resourceImg: {
    maxWidth: '300px',
    borderRadius: '12px'
  },
  // --- CONNECT ---
  footerImg: {
    width: '100%',
    maxWidth: '600px',
    borderRadius: '12px',
    margin: '20px auto',
    display: 'block'
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    marginTop: '20px',
    fontSize: '16px',
    color: '#5B2A8C'
  },
  footerDivider: {
    height: '1px',
    background: 'rgba(91, 42, 140, 0.2)',
    margin: '30px 0'
  },
  footer: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#5B2A8C'
  }
};

export default Home;