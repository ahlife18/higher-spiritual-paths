import { products } from '../data/spiritualData';

function Shop({ addToCart }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>The Spiritual Shop</h1>
      <p style={styles.subtitle}>Tools for the inward journey.</p>
      <div style={styles.grid}>
        {products.map((item) => (
          <div key={item.id} style={styles.card}>
            <div style={styles.image}>{item.image}</div>
            <h3 style={styles.name}>{item.name}</h3>
            <p style={styles.desc}>{item.description}</p>
            <p style={styles.price}>${item.price.toFixed(2)}</p>
            <button onClick={() => addToCart(item)} style={styles.button}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '80vh',
    background: '#fcf6f0',
    padding: '4rem 2rem',
    fontFamily: 'Georgia, serif',
    textAlign: 'center'
  },
  title: {
    fontSize: '3rem',
    color: '#2c1b13',
    marginBottom: '0.5rem'
  },
  subtitle: {
    color: '#888',
    marginBottom: '2rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '2rem',
    maxWidth: '1100px',
    margin: '0 auto'
  },
  card: {
    background: 'white',
    padding: '1.5rem',
    borderRadius: '15px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s'
  },
  image: {
    fontSize: '4rem',
    marginBottom: '0.5rem'
  },
  name: {
    color: '#2c1b13',
    marginBottom: '0.3rem'
  },
  desc: {
    fontSize: '0.9rem',
    color: '#777',
    marginBottom: '0.5rem'
  },
  price: {
    fontWeight: 'bold',
    color: '#c2a66b',
    fontSize: '1.2rem',
    marginBottom: '1rem'
  },
  button: {
    padding: '0.6rem 1.5rem',
    background: '#3b2f4f',
    color: '#fcf6f0',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer'
  }
};

export default Shop;