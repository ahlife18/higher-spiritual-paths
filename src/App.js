import { BrowserRouter, Routes, Route } from 'react-router-dom';import Tarot from './components/Tarot';
import GuardianAngel from './components/GuardianAngel';
import AngelNumbers from './components/AngelNumbers';
import BlogPost from './components/BlogPost';
import Podcast from './components/Podcast';
import Blog from './components/Blog';
import DailyWisdom from './components/DailyWisdom';
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
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [cart, setCart] = useLocalStorage('spiritualCart', []);

  const addToCart = (item) => {
    const existingItem = cart.find((i) => i.id === item.id);
    if (existingItem) {
      setCart(cart.map((i) => i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i));
    } else {
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
        <Route path="/tarot-cards" element={<TarotCards />} />
        <Route path="/guardian-angel" element={<GuardianAngel />} />
        <Route path="/angel-numbers" element={<AngelNumbers />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/daily-wisdom" element={<DailyWisdom />} />
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