import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Practices from './components/Practices';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Contact from './components/Contact';
import ThePath from './components/ThePath';
import Founders from './components/Founders';
import Footer from './components/Footer';

// ✨ NEW IMPORT FOR PERSISTENT CART
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  // 🔥 Instead of useState, we use our persistent hook
  const [cart, setCart] = useLocalStorage('spiritualCart', []);

  const addToCart = (item) => {
    // Check if item already exists in cart
    const existingItem = cart.find((i) => i.id === item.id);
    if (existingItem) {
      // If it exists, increase quantity (optional, if you want quantities)
      setCart(cart.map((i) => i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i));
    } else {
      // If it's new, add it with quantity 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/practices" element={<Practices />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route 
          path="/cart" 
          element={<Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />} 
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/the-path" element={<ThePath />} />
        <Route path="/founders" element={<Founders />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;