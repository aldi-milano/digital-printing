import React from 'react';
import Hero from './components/Hero/Hero';
import './App.scss';
import HowTo from './components/HowTo/HowTo';
import Features from './components/Features/Features';
import Products from './components/Products/Products';
import About from './components/About/About';

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Products />
      <Features />
      {/* <HowTo /> */}
    </div>
  );
};

export default App;
