import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar({ cartCount }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleLoginModal = () => setLoginModalOpen(!loginModalOpen);

  // Dummy login handler
  const handleLogin = (e) => {
    e.preventDefault();
    alert('🔐 Membership login coming soon! For now, just enjoy the free content.');
    setLoginModalOpen(false);
  };

  return (
    <nav style={styles.nav}>
      {/* --- LOGO --- */}
      <Link to="/" style={styles.logo}>
        <span style={styles.logoIcon}>✦</span> Higher Spiritual Paths
      </Link>

      {/* --- RIGHT SIDE ICONS (Login + Hamburger) --- */}
      <div style={styles.rightIcons}>
        <button onClick={toggleLoginModal} style={styles.iconBtn}>
          🔑
        </button>
        <button onClick={toggleMobileMenu} style={styles.hamburger}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      {mobileMenuOpen && (
        <div style={styles.mobileLinks}>
          <Link to="/" style={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" style={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/practices" style={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Practices</Link>
          <Link to="/founders" style={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Founders</Link>
          <Link to="/shop" style={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Shop</Link>
          <Link to="/blog" style={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>📖 Blog</Link>
          <Link to="/podcast" style={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>🎙️ Podcast</Link>
          <Link to="/daily-wisdom" style={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>🕯️ Wisdom</Link>
          <Link to="/tarot" style={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>🔮 Tarot</Link>
          <Link to="/guardian-angel" style={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>👼 Guardian</Link>
          <Link to="/angel-numbers" style={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>✨ Numbers</Link>
          <Link to="/cart" style={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>🛒 Cart ({cartCount})</Link>
        </div>
      )}

      {/* --- LOGIN MODAL --- */}
      {loginModalOpen && (
        <div style={styles.modalOverlay} onClick={toggleLoginModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={toggleLoginModal}>✕</button>
            <h2 style={styles.modalTitle}>🔐 Member Login</h2>
            <form onSubmit={handleLogin} style={styles.form}>
              <input type="email" placeholder="Email" style={styles.input} required />
              <input type="password" placeholder="Password" style={styles.input} required />
              <button type="submit" style={styles.submitBtn}>Log In</button>
            </form>
            <p style={styles.demoNote}>Demo: Use any email/password</p>
          </div>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: '#5B2A8C',
    color: '#ffffff',
    fontFamily: 'Montserrat, sans-serif',
    boxShadow: '0 4px 20px rgba(91, 42, 140, 0.3)',
    position: 'relative',
    zIndex: 1000
  },
  logo: {
    fontSize: '1.4rem',
    fontWeight: '700',
    letterSpacing: '1px',
    color: '#ffffff',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  logoIcon: {
    color: '#D4AF37',
    fontSize: '1.8rem'
  },
  rightIcons: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  iconBtn: {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '1.5rem',
    cursor: 'pointer'
  },
  hamburger: {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '2rem',
    cursor: 'pointer'
  },
  mobileLinks: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: '#5B2A8C',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    gap: '0.8rem',
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
    animation: 'fadeIn 0.3s ease'
  },
  mobileLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    padding: '0.5rem 0',
    borderBottom: '1px solid rgba(255,255,255,0.1)'
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
    padding: '2rem',
    borderRadius: '20px',
    maxWidth: '400px',
    width: '90%',
    position: 'relative',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
  },
  closeBtn: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#999',
    background: 'none',
    border: 'none'
  },
  modalTitle: {
    color: '#5B2A8C',
    textAlign: 'center',
    marginBottom: '1rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  input: {
    padding: '0.8rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem'
  },
  submitBtn: {
    padding: '0.8rem',
    background: '#5B2A8C',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  demoNote: {
    textAlign: 'center',
    fontSize: '0.8rem',
    color: '#888',
    marginTop: '0.5rem'
  }
};

// Add CSS animation for the mobile menu fade in
const styleTag = document.createElement('style');
styleTag.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(styleTag);

export default Navbar;