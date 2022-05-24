import React from 'react';
import Hero from './components/Hero/Hero';
import './App.scss';
import HowTo from './components/HowTo/HowTo';
import Features from './components/Features/Features';
import Products from './components/Products/Products';

const App = () => {
  return (
    <div>
      <Hero />
      {/* <HowTo /> */}
      <Features />
      <Products />
    </div>
  );
};

export default App;
