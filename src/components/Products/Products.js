import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './Products.scss';

import img1 from '../../assets/sticker-1.jpg';
import img2 from '../../assets/sticker-2.jpg';
import img3 from '../../assets/sticker-3.jpg';
import img4 from '../../assets/sticker-4.jpg';
import img5 from '../../assets/sticker-5.jpg';
import img6 from '../../assets/sticker-9.jpg';
import img7 from '../../assets/sticker-10.jpg';

const Products = () => {
  return (
    <div className='products'>
      <h2>Finest Material We Are Using</h2>
      <Carousel
        className='container'
        autoPlay={true}
        interval={3000}
        centerSlidePercentage={50}
        infiniteLoop={true}
        swipeable={true}
      >
        <div className='product__container'>
          <img src={img1} alt='printing' />
        </div>
        <div className='product__container'>
          <img src={img2} alt='printing' />
        </div>
        <div className='product__container'>
          <img src={img3} alt='printing' />
        </div>
        <div className='product__container'>
          <img src={img4} alt='printing' />
        </div>
        <div className='product__container'>
          <img src={img5} alt='printing' />
        </div>
        <div className='product__container'>
          <img src={img6} alt='printing' />
        </div>
        <div className='product__container'>
          <img src={img7} alt='printing' />
        </div>
      </Carousel>
    </div>
  );
};

export default Products;
