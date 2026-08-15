import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar({ cartCount }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isHome = location.pathname === '/';

  const handleLogoClick = () => {
    if (isHome) {
      setDropdownOpen(!dropdownOpen);
    } else {
      navigate('/');
    }
  };

  return (
    <nav style={styles.nav}>
      <div 
        onClick={handleLogoClick} 
        style={styles.logo}
        onMouseEnter={() => isHome && setDropdownOpen(true)}
        onMouseLeave={() => isHome && setDropdownOpen(false)}
      >
        <span style={styles.logoIcon}>✦</span> Higher Spiritual Paths
        {isHome && dropdownOpen && (
          <div style={styles.dropdown}>
            <Link to="/about" style={styles.dropdownItem}>About</Link>
            <Link to="/practices" style={styles.dropdownItem}>Practices</Link>
            <Link to="/founders" style={styles.dropdownItem}>Founders</Link>
            <Link to="/shop" style={styles.dropdownItem}>Shop</Link>
            <Link to="/blog" style={styles.dropdownItem}>📖 Blog</Link>
            <Link to="/podcast" style={styles.dropdownItem}>🎙️ Podcast</Link>
            <Link to="/daily-wisdom" style={styles.dropdownItem}>🕯️ Wisdom</Link>
            <Link to="/tarot" style={styles.link}>🔮 Tarot</Link>
            <Link to="/guardian-angel" style={styles.link}>👼 Guardian</Link>
            <Link to="/angel-numbers" style={styles.link}>✨ Numbers</Link>
            <Link to="/cart" style={styles.dropdownItem}>🛒 Cart ({cartCount})</Link>
          </div>
        )}
      </div>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/practices" style={styles.link}>Practices</Link>
        <Link to="/founders" style={styles.link}>Founders</Link>
        <Link to="/shop" style={styles.link}>Shop</Link>
        <Link to="/blog" style={styles.link}>📖 Blog</Link>
        <Link to="/podcast" style={styles.link}>🎙️ Podcast</Link>
        <Link to="/daily-wisdom" style={styles.link}>🕯️ Wisdom</Link>
        <Link to="/tarot" style={styles.dropdownItem}>🔮 Tarot</Link>
        <Link to="/guardian-angel" style={styles.dropdownItem}>👼 Guardian</Link>
        <Link to="/angel-numbers" style={styles.dropdownItem}>✨ Numbers</Link>
        <Link to="/cart" style={styles.link}>
          🛒 {cartCount > 0 && <span style={styles.badge}>{cartCount}</span>}
        </Link>
      </div>
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
  links: {
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
  }
};

export default Navbar;