import { useState, useEffect } from 'react';

function Cart({ cart, removeFromCart, clearCart }) {
  const [checkout, setCheckout] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', address: '' });
  const [message, setMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paystackReady, setPaystackReady] = useState(false);

  useEffect(() => {
    const checkPaystack = setInterval(() => {
      if (window.PaystackPop) {
        setPaystackReady(true);
        clearInterval(checkPaystack);
        console.log('✅ Paystack is ready!');
      }
    }, 500);
    return () => clearInterval(checkPaystack);
  }, []);

  const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  const handlePaystackPayment = () => {
    if (!paystackReady) {
      alert('⏳ Payment system is still loading. Please try again in 2 seconds.');
      return;
    }

    setIsProcessing(true);

    try {
      // 🔥 PAYSTACK SETUP WITH YOUR EMAIL
      const handler = window.PaystackPop.setup({
        key: 'pk_test_ac9fa0f6232af51eedd512720eb32f8dc008289a', // ✅ Your Live Public Key
        email: 'kolawoleemanuel@gmail.com',              // ✅ Your email (where money alerts go)
        amount: Math.round(total * 100),                 // ✅ Converts dollars to cents
        currency: 'NGN',                                 // ✅ Change to 'NGN' if you want Naira
        callback: (response) => {
          setMessage(`✨ Thank you, ${form.name}. Payment successful! Reference: ${response.reference}`);
          clearCart();
          setCheckout(false);
          setIsProcessing(false);
        },
        onClose: () => {
          setIsProcessing(false);
          alert('Payment window closed.');
        }
      });
      
      // ✅ Explicitly open the popup (just in case)
      handler.openIframe();
      
    } catch (error) {
      console.error('Paystack error:', error);
      alert('❌ Error launching Paystack: ' + error.message);
      setIsProcessing(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address) {
      setMessage('⚠️ Please fill in all fields.');
      return;
    }
    handlePaystackPayment();
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
        <form onSubmit={handleSubmit} style={styles.form}>
          <h4>Shipping Details</h4>
          <input 
            placeholder="Full Name" 
            value={form.name} 
            onChange={e => setForm({...form, name: e.target.value})} 
            style={styles.input} 
            required 
          />
          <input 
            placeholder="Email" 
            value={form.email} 
            onChange={e => setForm({...form, email: e.target.value})} 
            style={styles.input} 
            required 
          />
          <input 
            placeholder="Address" 
            value={form.address} 
            onChange={e => setForm({...form, address: e.target.value})} 
            style={styles.input} 
            required 
          />
          <button 
            type="submit" 
            disabled={isProcessing || !paystackReady}
            style={isProcessing || !paystackReady ? { ...styles.submit, opacity: 0.6 } : styles.submit}
          >
            {!paystackReady ? '⏳ Loading Paystack...' : isProcessing ? 'Processing...' : `💳 Pay $${total.toFixed(2)}`}
          </button>
        </form>
      )}
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}

const styles = {
  container: { minHeight: '80vh', background: '#fdfbf7', padding: '4rem 2rem', fontFamily: 'Lato, sans-serif', textAlign: 'center', maxWidth: '600px', margin: '0 auto' },
  empty: { textAlign: 'center', padding: '4rem', fontSize: '1.5rem', color: '#888' },
  title: { fontSize: '2.5rem', color: '#4a4036', fontFamily: 'Playfair Display, serif' },
  list: { display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' },
  item: { display: 'flex', justifyContent: 'space-between', padding: '0.8rem', background: '#ffffff', borderRadius: '10px', boxShadow: '0 2px 10px rgba(216, 195, 165, 0.1)' },
  qty: { color: '#888', fontSize: '0.9rem' },
  remove: { background: 'transparent', border: 'none', color: '#e74c3c', cursor: 'pointer', fontSize: '1.2rem' },
  total: { fontSize: '1.8rem', color: '#4a4036', marginBottom: '1.5rem', fontFamily: 'Playfair Display, serif' },
  btn: { padding: '0.8rem 2rem', background: '#8fa88a', color: '#ffffff', border: 'none', borderRadius: '30px', fontSize: '1.1rem', cursor: 'pointer', fontFamily: 'Lato, sans-serif' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' },
  input: { padding: '0.8rem', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem' },
  submit: { padding: '0.8rem', background: '#e8c56d', color: '#4a4036', border: 'none', borderRadius: '10px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' },
  message: { marginTop: '2rem', fontSize: '1.2rem', color: '#27ae60' }
};

export default Cart;