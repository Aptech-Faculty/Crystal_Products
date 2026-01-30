import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Location from './pages/Location';
import Compare from './pages/Compare';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </Layout>
  );
}

export default App;
