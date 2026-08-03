import { useState } from 'react';

function Cart({ cart, removeFromCart, clearCart }) {
  const [checkout, setCheckout] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', address: '' });
  const [message, setMessage] = useState('');

  const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  const handleCheckout = (e) => {
    e.preventDefault();
    setMessage(`✨ Thank you, ${form.name}. Your sacred tools are on their way. A confirmation has been sent to ${form.email}.`);
    setCheckout(false);
    clearCart(); // Clear cart after successful purchase
  };

  if (cart.length === 0) {
    return <div style={styles.empty}>🕯️ Your cart is empty. Return to the shop.</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Your Sacred Cart</h2>
      <div style={styles.list}>
        {cart.map((item) => (
          <div key={item.id} style={styles.item}>
            <span>
              {item.image} {item.name} 
              {item.quantity > 1 && <span style={styles.qty}> x{item.quantity}</span>}
              — ${(item.price * (item.quantity || 1)).toFixed(2)}
            </span>
            <button onClick={() => removeFromCart(item.id)} style={styles.remove}>✕</button>
          </div>
        ))}
      </div>
      <h3 style={styles.total}>Total: ${total.toFixed(2)}</h3>
      
      {!checkout ? (
        <button onClick={() => setCheckout(true)} style={styles.btn}>Proceed to Checkout</button>
      ) : (
        <form onSubmit={handleCheckout} style={styles.form}>
          <h4>Shipping Details</h4>
          <input placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={styles.input} required />
          <input placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={styles.input} required />
          <input placeholder="Address" value={form.address} onChange={e => setForm({...form, address: e.target.value})} style={styles.input} required />
          <button type="submit" style={styles.submit}>Complete Purchase</button>
        </form>
      )}
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}

const styles = {
  container: { minHeight: '80vh', background: '#fcf6f0', padding: '4rem 2rem', fontFamily: 'Georgia, serif', textAlign: 'center', maxWidth: '600px', margin: '0 auto' },
  empty: { textAlign: 'center', padding: '4rem', fontSize: '1.5rem', color: '#888' },
  title: { fontSize: '2.5rem', color: '#2c1b13' },
  list: { display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' },
  item: { display: 'flex', justifyContent: 'space-between', padding: '0.8rem', background: 'white', borderRadius: '10px' },
  qty: { color: '#888', fontSize: '0.9rem' },
  remove: { background: 'transparent', border: 'none', color: '#e74c3c', cursor: 'pointer', fontSize: '1.2rem' },
  total: { fontSize: '1.8rem', color: '#2c1b13', marginBottom: '1.5rem' },
  btn: { padding: '0.8rem 2rem', background: '#3b2f4f', color: 'white', border: 'none', borderRadius: '30px', fontSize: '1.1rem', cursor: 'pointer' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' },
  input: { padding: '0.8rem', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem' },
  submit: { padding: '0.8rem', background: '#c2a66b', color: '#2c1b13', border: 'none', borderRadius: '10px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' },
  message: { marginTop: '2rem', fontSize: '1.2rem', color: '#27ae60' }
};

export default Cart;