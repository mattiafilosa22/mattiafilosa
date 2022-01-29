import React from 'react';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Timeline from './components/Timeline/Timeline';
import Arrow from './components/Arrow/Arrow';
import './App.css';

const App = () => {
  return (
    <div>
      
      <HeroBanner />
      <Skills />
      <Timeline />
      <Portfolio />
      <Arrow />
      {/* <div className='buffer'></div> */}
      {/* <div className='buffer'></div> */}
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;
