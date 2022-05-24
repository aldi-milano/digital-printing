import React from 'react';

import { Wallet, Smiley, HourglassHigh, CircleWavyCheck } from 'phosphor-react';

import './Features.scss';

const Features = () => {
  return (
    <div className='features'>
      <h2>Why Choose Us?</h2>
      <div className='features__container'>
        <div className='feature'>
          <CircleWavyCheck className='icon' />
          <p className='feature__title'>We Deliver Quality</p>
          <p className='feature__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className='feature'>
          <HourglassHigh className='icon' />
          <p className='feature__title'>Long lasting product</p>
          <p className='feature__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className='feature'>
          <Wallet className='icon' />
          <p className='feature__title'>Affordable</p>
          <p className='feature__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className='feature'>
          <Smiley className='icon' />
          <p className='feature__title'>Guarantee satisfaction</p>
          <p className='feature__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
