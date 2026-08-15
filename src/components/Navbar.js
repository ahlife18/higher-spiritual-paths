import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar({ cartCount }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = location.pathname === '/';

  const handleLogoClick = () => {
    if (isHome) {
      setDropdownOpen(!dropdownOpen);
    } else {
      navigate('/');
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav style={styles.nav}>
      {/* DESKTOP LOGO & DROPDOWN */}
      <div 
        onClick={handleLogoClick} 
        style={styles.logo}
        onMouseEnter={() => isHome && setDropdownOpen(true)}
        onMouseLeave={() => isHome && setDropdownOpen(false)}
      >
        Higher Spiritual Paths
        {isHome && dropdownOpen && (
          <div style={styles.dropdown}>
            <Link to="/about" style={styles.dropdownItem}>About</Link>
            <Link to="/practices" style={styles.dropdownItem}>Practices</Link>
            <Link to="/founders" style={styles.dropdownItem}>Founders</Link>
            <Link to="/shop" style={styles.dropdownItem}>Shop</Link>
            <Link to="/blog" style={styles.dropdownItem}>📖 Blog</Link>
            <Link to="/podcast" style={styles.dropdownItem}>🎙️ Podcast</Link>
            <Link to="/daily-wisdom" style={styles.dropdownItem}>🕯️ Wisdom</Link>
            <Link to="/tarot" style={styles.dropdownItem}>🔮 Tarot</Link>
            <Link to="/guardian-angel" style={styles.dropdownItem}>👼 Guardian</Link>
            <Link to="/angel-numbers" style={styles.dropdownItem}>✨ Numbers</Link>
            <Link to="/cart" style={styles.dropdownItem}>🛒 Cart ({cartCount})</Link>
          </div>
        )}
      </div>

      {/* MOBILE HAMBURGER ICON */}
      <div style={styles.hamburger} onClick={toggleMobileMenu}>
        {mobileMenuOpen ? '✕' : '☰'}
      </div>

      {/* DESKTOP LINKS */}
      <div style={styles.desktopLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/practices" style={styles.link}>Practices</Link>
        <Link to="/founders" style={styles.link}>Founders</Link>
        <Link to="/shop" style={styles.link}>Shop</Link>
        <Link to="/blog" style={styles.link}>📖 Blog</Link>
        <Link to="/podcast" style={styles.link}>🎙️ Podcast</Link>
        <Link to="/daily-wisdom" style={styles.link}>🕯️ Wisdom</Link>
        <Link to="/tarot" style={styles.link}>🔮 Tarot</Link>
        <Link to="/guardian-angel" style={styles.link}>👼 Guardian</Link>
        <Link to="/angel-numbers" style={styles.link}>✨ Numbers</Link>
        <Link to="/cart" style={styles.link}>
          🛒 {cartCount > 0 && <span style={styles.badge}>{cartCount}</span>}
        </Link>
      </div>

      {/* MOBILE LINKS (Hidden by default, shows when hamburger is clicked) */}
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
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 1rem 1rem 1rem',
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
    cursor: 'pointer',
    position: 'relative',
    padding: '0.5rem 0',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  logoIcon: {
    color: '#fff',
    fontSize: '1.8rem'
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: '0',
    background: '#ffffff',
    padding: '1rem',
    borderRadius: '12px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
    minWidth: '200px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginTop: '0.5rem',
    border: '1px solid rgba(91, 42, 140, 0.1)',
    animation: 'fadeIn 0.3s ease'
  },
  dropdownItem: {
    color: '#1a1a1a',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    transition: 'background 0.2s',
    fontWeight: '500'
  },
  // Mobile Hamburger Styling
  hamburger: {
    display: 'none',
    fontSize: '2rem',
    cursor: 'pointer',
    color: '#fff'
  },
  // Desktop Links (Hidden on Mobile)
  desktopLinks: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-end'
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500'
  },
  badge: {
    background: '#D4AF37',
    color: '#5B2A8C',
    borderRadius: '50%',
    padding: '0.2rem 0.6rem',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    marginLeft: '0.3rem'
  },
  // Mobile Links (Shown when menu opens)
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
  }
};

// Add CSS animation for the mobile menu fade in
const styleTag = document.createElement('style');
styleTag.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @media (max-width: 768px) {
    .hamburger { display: block !important; }
    .desktopLinks { display: none !important; }
  }
`;
document.head.appendChild(styleTag);

export default Navbar;