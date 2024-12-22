import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Reviews from './Reviews'
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/reviews">Reviews</Link> | <Link to="/benefits">Benefits</Link>  
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/benefits" element={<Benefits />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
