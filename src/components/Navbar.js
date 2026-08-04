import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>🕯️ Higher Spiritual Paths</div>
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
    background: '#d8c3a5', /* Sandy Gold (Floral & Nature) */
    color: '#ffffff',
    fontFamily: 'Lato, sans-serif',
    boxShadow: '0 4px 20px rgba(216, 195, 165, 0.3)'
  },
  logo: {
    fontSize: '1.4rem',
    fontWeight: '700',
    letterSpacing: '1px',
    fontFamily: 'Playfair Display, serif'
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

export default Navbar;