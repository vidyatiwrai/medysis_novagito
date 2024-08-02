import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Components/common/Navbar';
import SubNavbar from './Components/common/Subnavbar';
import HomePage from './Pages/Home';
import Footer from './Components/common/Footer';
import ShopBrand from "./Pages/shopbrand";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <SubNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shopbrand" element={<ShopBrand />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
