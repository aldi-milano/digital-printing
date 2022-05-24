import React from 'react';

import './Hero.scss';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__container'>
        <div className='hero__container__desc'>
          <h1>Digital printing product solution</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quis
            itaque dolor, vitae earum laborum quisquam, laboriosam debitis.
            <br />
            necessitatibus fuga maiores architecto placeat
          </p>
          <a href='#' className='cta'>
            Click Here!
          </a>
        </div>
        <div className='hero__container__img'></div>
      </div>
    </div>
  );
};

export default Hero;
