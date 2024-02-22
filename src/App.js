import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/index'
import About from './pages/about'
import Contact from './pages/contact'
import Service from './pages/service'
import Product from './pages/product'
import ProductItem from './pages/productItem';
import Login from './pages/login'
import SignIn from './pages/signIn' 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productItem" element={<ProductItem />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </Router>
  );
  
}

export default App;
