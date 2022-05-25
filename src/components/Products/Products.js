import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './Products.scss';

import img1 from '../../assets/sticker-1.jpg';
import img2 from '../../assets/sticker-2.jpg';
import img3 from '../../assets/sticker-3.jpg';
import img4 from '../../assets/sticker-4.jpg';
import img5 from '../../assets/sticker-5.jpg';
import img6 from '../../assets/sticker-6.jpg';
import img7 from '../../assets/sticker-7.jpg';

const Products = () => {
  return (
    <div className='products'>
      <p className='title'>HOW IT'S MADE</p>
      <h2>Finest Material We Are Using</h2>
      <div className='products__container'>
        <div className='desc'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            asperiores, cum commodi iste ullam odio dolorem voluptas ea quia,
            quos perferendis? Repellat quod minus debitis ea sunt reprehenderit
            ex provident?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            sequi quam porro ad omnis recusandae! Ducimus at molestiae optio
            numquam, nobis iure esse, et voluptas voluptatem, aut laborum
            cupiditate perferendis?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            consequatur labore quibusdam laborum asperiores, atque adipisci
            veritatis minima iste vel veniam aut voluptatem rem ipsa blanditiis
            molestiae earum mollitia dolorum?
          </p>
        </div>
        <Carousel
          className='carousel__container'
          autoPlay={true}
          interval={3000}
          centerSlidePercentage={50}
          infiniteLoop={true}
          swipeable={true}
          width={'80%'}
          thumbWidth={40}
        >
          <div className='product__container'>
            <img
              className='slider__img'
              src={img1}
              alt='printing'
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            />
          </div>
          <div className='product__container'>
            <img
              className='slider__img'
              src={img2}
              alt='printing'
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            />
          </div>
          <div className='product__container'>
            <img
              className='slider__img'
              src={img3}
              alt='printing'
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            />
          </div>
          <div className='product__container'>
            <img
              className='slider__img'
              src={img4}
              alt='printing'
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            />
          </div>
          <div className='product__container'>
            <img
              className='slider__img'
              src={img5}
              alt='printing'
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            />
          </div>
          <div className='product__container'>
            <img
              className='slider__img'
              src={img6}
              alt='printing'
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            />
          </div>
          <div className='product__container'>
            <img
              className='slider__img'
              src={img7}
              alt='printing'
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Products;
