import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      
      {/* --- HERO SECTION --- */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <p style={styles.heroSubtitle}>HIGHER SPIRITUAL PATHS</p>
          <h1 style={styles.heroTitle}>EMBRACE YOUR<br />SPIRITUAL JOURNEY</h1>
          <p style={styles.heroDesc}>Discover transformative practices and insights to elevate your spiritual experience.</p>
          <button onClick={() => navigate('/the-path')} style={styles.exploreBtn}>EXPLORE NOW</button>
        </div>
      </div>

      {/* --- CORE BELIEFS --- */}
      <div style={styles.sectionPurple}>
        <div style={styles.splitContainer}>
          <div style={styles.splitText}>
            <div style={styles.beliefsHeader}>
              <span style={styles.starIcon}>✦</span>
              <h2 style={styles.headingWhite}>OUR CORE<br />BELIEFS</h2>
            </div>
            <p style={styles.bodyWhite}>
              At Higher Spiritual Paths, we embrace the journey of self-discovery and growth. Our teachings center on mindfulness, compassion, and the pursuit of inner peace through various spiritual practices.
            </p>
          </div>
          <div style={styles.splitImage}>
            <img src="/Landscape.jpg" alt="Spiritual Landscape" style={styles.landscapeImg} />
          </div>
        </div>
      </div>

      {/* --- HOLISTIC PRACTICES --- */}
      <div style={styles.sectionWhite}>
        <h2 style={styles.headingDark}>HOLISTIC<br />PRACTICES</h2>
        <div style={styles.practicesGrid}>
          <div style={styles.practiceCard}>
            <div style={styles.practiceImgPlaceholder}>🧘</div>
            <h3>Meditation</h3>
          </div>
          <div style={styles.practiceCard}>
            <div style={styles.practiceImgPlaceholder}>🌿</div>
            <h3>Cleansing</h3>
          </div>
          <div style={styles.practiceCard}>
            <div style={styles.practiceImgPlaceholder}>📿</div>
            <h3>Mantra</h3>
          </div>
        </div>
        <p style={styles.practicesDesc}>
          At Higher Spiritual Paths, we offer a variety of holistic practices designed to nurture your soul and calm your mind. Join us for meditation, group circles, and transformative workshops.
        </p>
      </div>

      {/* --- MEET OUR GUIDES --- */}
      <div style={styles.sectionPurple}>
        <h2 style={styles.headingWhite}>MEET OUR<br />GUIDES</h2>
        <div style={styles.guidesGrid}>
          <div style={styles.guideCard}>
            <div style={styles.guideIcon}>🙏</div>
            <h3 style={styles.guideName}>Kolawole Emmanuel</h3>
            <p style={styles.guideRole}>Founder</p>
          </div>
          <div style={styles.guideCard}>
            <div style={styles.guideIcon}>🕯️</div>
            <h3 style={styles.guideName}>Karen Johnson</h3>
            <p style={styles.guideRole}>Co-Founder</p>
          </div>
          <div style={styles.guideCard}>
            <div style={styles.guideIcon}>🕊️</div>
            <h3 style={styles.guideName}>Bennie Hollis</h3>
            <p style={styles.guideRole}>Co-Founder</p>
          </div>
        </div>
      </div>

      {/* --- COMMUNITY VOICES --- */}
      <div style={styles.sectionWhite}>
        <h2 style={styles.headingDark}>COMMUNITY<br />VOICES</h2>
        <div style={styles.communityGrid}>
          <div style={styles.communityCard}>
            <div style={styles.avatar}>✨</div>
            <p>"This path has completely changed how I view the world."</p>
            <span style={styles.name}>— Sarah M.</span>
          </div>
          <div style={styles.communityCard}>
            <div style={styles.avatar}>🌟</div>
            <p>"The peace I’ve found here is something I’ve been searching for."</p>
            <span style={styles.name}>— David T.</span>
          </div>
        </div>
      </div>

      {/* --- SPIRITUAL RESOURCES --- */}
      <div style={styles.sectionPurple}>
        <h2 style={styles.headingWhite}>SPIRITUAL<br />RESOURCES</h2>
        <div style={styles.resourcesContainer}>
          <div style={styles.resourceItem}>🪬 Crystals</div>
          <div style={styles.resourceItem}>🕯️ Candles</div>
          <div style={styles.resourceItem}>📿 Malas</div>
          <div style={styles.resourceItem}>📖 Books</div>
        </div>
        <p style={styles.bodyWhite}>
          Discover essential tools and resources to enhance your spiritual journey. From enlightening books to healing crystals, find everything you need to support your path.
        </p>
      </div>

      {/* --- CONNECT & FOOTER --- */}
      <div style={styles.sectionWhite}>
        <h2 style={styles.headingDark}>CONNECT WITH<br />US</h2>
        <p style={styles.connectDesc}>Join a vibrant community dedicated to spiritual growth.</p>
        <div style={styles.contactInfo}>
          <div>📞 Bennie Hollis: +1 (352) 544-9302</div>
          <div>📞 Karen Johnson: +1 (713) 384-0334</div>
          <div>📞 Kolawole Emmanuel: +234 (081) 08491093</div>
        </div>
        <div style={styles.footerDivider}></div>
        <div style={styles.footer}>THANK YOU! ❤️</div>
      </div>

    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    width: '100%',
    overflowX: 'hidden'
  },
  // --- HERO ---
  hero: {
    background: '#2E1A47',
    color: 'white',
    padding: '80px 20px',
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
  exploreBtn: {
    background: 'white',
    color: '#2E1A47',
    padding: '15px 40px',
    borderRadius: '30px',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer'
  },
  // --- SECTIONS ---
  sectionPurple: {
    background: '#2E1A47',
    color: 'white',
    padding: '60px 20px'
  },
  sectionWhite: {
    background: 'white',
    color: '#1A1A1A',
    padding: '60px 20px'
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
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
  },
  beliefsHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '15px',
    marginBottom: '20px'
  },
  starIcon: {
    fontSize: '32px',
    color: '#D4AF37'
  },
  headingWhite: {
    fontSize: '36px',
    fontWeight: 'bold',
    margin: 0
  },
  headingDark: {
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '0 0 30px 0',
    color: '#2E1A47'
  },
  bodyWhite: {
    fontSize: '18px',
    lineHeight: '1.8',
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
  practiceImgPlaceholder: {
    fontSize: '64px',
    marginBottom: '10px'
  },
  practicesDesc: {
    maxWidth: '600px',
    margin: '0 auto',
    fontSize: '16px',
    lineHeight: '1.6'
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
    textAlign: 'center'
  },
  guideIcon: {
    fontSize: '48px',
    marginBottom: '10px'
  },
  guideName: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '5px 0'
  },
  guideRole: {
    fontSize: '14px',
    opacity: 0.7
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
    background: '#F7F4FA',
    padding: '30px',
    borderRadius: '12px',
    textAlign: 'center'
  },
  avatar: {
    fontSize: '32px',
    marginBottom: '10px'
  },
  name: {
    display: 'block',
    marginTop: '15px',
    fontWeight: 'bold',
    color: '#2E1A47'
  },
  // --- RESOURCES ---
  resourcesContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '20px'
  },
  resourceItem: {
    background: 'rgba(255,255,255,0.1)',
    padding: '15px 25px',
    borderRadius: '30px',
    fontSize: '18px'
  },
  // --- CONNECT ---
  connectDesc: {
    fontSize: '18px',
    marginBottom: '20px',
    color: '#555'
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    marginBottom: '40px',
    fontSize: '16px',
    color: '#2E1A47'
  },
  footerDivider: {
    height: '1px',
    background: '#ddd',
    margin: '20px 0'
  },
  footer: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#2E1A47'
  }
};

export default Home;