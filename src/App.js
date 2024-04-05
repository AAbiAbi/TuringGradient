import logo from './logo.svg';
import './App.css';
import Navigation from './component/Navigation';
import Home from './component/Home';
import Products from './component/Products';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer'
import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';;


// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const footerRef = useRef(null); // Create a ref for the footer

  const scrollToFooter = () => {
    console.log(footerRef.current);
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="App">
        <Navigation onContactClick={scrollToFooter} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add other routes here */}
        </Routes>
        <Contact/>
        <Footer ref={footerRef}/>
      </div>
    </Router>
    );
}

export default App;
