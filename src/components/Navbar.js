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
    background: '#2c1b13',
    color: '#fcf6f0',
    fontFamily: 'Georgia, serif'
  },
  logo: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    letterSpacing: '1px'
  },
  links: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
  },
  link: {
    color: '#e8d5b5',
    textDecoration: 'none',
    fontSize: '1rem'
  },
  badge: {
    background: '#c2a66b',
    color: '#2c1b13',
    borderRadius: '50%',
    padding: '0.2rem 0.6rem',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    marginLeft: '0.3rem'
  }
};

export default Navbar;