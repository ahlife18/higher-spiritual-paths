import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar({ cartCount }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Check if we are on the home page
  const isHome = location.pathname === '/';

  const handleLogoClick = () => {
    if (isHome) {
      // If already home, toggle the dropdown
      setDropdownOpen(!dropdownOpen);
    } else {
      // If on another page, go home
      navigate('/');
    }
  };

  return (
    <nav style={styles.nav}>
      {/* ✨ Clickable Logo */}
      <div 
        onClick={handleLogoClick} 
        style={styles.logo}
        onMouseEnter={() => isHome && setDropdownOpen(true)}
        onMouseLeave={() => isHome && setDropdownOpen(false)}
      >
        🕯️ Higher Spiritual Paths
        {/* Dropdown Menu - only appears when on Home and open */}
        {isHome && dropdownOpen && (
          <div style={styles.dropdown}>
            <Link to="/about" style={styles.dropdownItem}>About</Link>
            <Link to="/practices" style={styles.dropdownItem}>Practices</Link>
            <Link to="/founders" style={styles.dropdownItem}>Founders</Link>
            <Link to="/shop" style={styles.dropdownItem}>Shop</Link>
            <Link to="/upload" style={styles.dropdownItem}>📤 Upload</Link>
            <Link to="/cart" style={styles.dropdownItem}>🛒 Cart ({cartCount})</Link>
          </div>
        )}
      </div>

      {/* Standard Nav Links - These remain visible for quick access */}
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/practices" style={styles.link}>Practices</Link>
        <Link to="/founders" style={styles.link}>Founders</Link>
        <Link to="/shop" style={styles.link}>Shop</Link>
        <Link to="/upload" style={styles.link}>📤 Upload</Link>
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
    background: '#d8c3a5', /* Sandy Gold */
    color: '#ffffff',
    fontFamily: 'Lato, sans-serif',
    boxShadow: '0 4px 20px rgba(216, 195, 165, 0.3)',
    position: 'relative',
    zIndex: 1000
  },
  logo: {
    fontSize: '1.4rem',
    fontWeight: '700',
    letterSpacing: '1px',
    fontFamily: 'Playfair Display, serif',
    cursor: 'pointer',
    position: 'relative',
    padding: '0.5rem 0',
    transition: 'opacity 0.3s'
  },
  /* 🌸 Beautiful Floating Petal Dropdown */
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: '0',
    background: '#ffffff',
    padding: '1rem',
    borderRadius: '20px',
    boxShadow: '0 10px 40px rgba(216, 195, 165, 0.3)',
    minWidth: '200px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginTop: '0.5rem',
    border: '1px solid rgba(216, 195, 165, 0.3)',
    animation: 'fadeIn 0.3s ease'
  },
  dropdownItem: {
    color: '#4a4036',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '10px',
    transition: 'background 0.2s',
    fontWeight: '500'
  },
  links: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500'
  },
  badge: {
    background: '#8fa88a', /* Sage Green */
    color: '#ffffff',
    borderRadius: '50%',
    padding: '0.2rem 0.6rem',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    marginLeft: '0.3rem'
  }
};

// Add a small CSS fade-in animation inline
const styleTag = document.createElement('style');
styleTag.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(styleTag);

export default Navbar;