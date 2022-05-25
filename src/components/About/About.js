import React from 'react';

import './About.scss';

import img1 from '../../assets/about-1.jpg';
import img2 from '../../assets/about-2.jpg';
import img3 from '../../assets/about-3.jpg';

const About = () => {
  return (
    <div className='about'>
      <p className='title'>ABOUT US</p>
      <div className='about__container'>
        {/* STEP 1 */}
        <div className='about__desc'>
          <h3>We Mainly focus on</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            suscipit similique earum, libero perferendis voluptatibus officia
            tempora, nesciunt culpa eveniet beatae tempore.
            <br />
            <br />
            Nostrum voluptates aperiam sint repudiandae dicta dolores quidem.
            Perspiciatis laborum, ipsam modi voluptate consectetur, esse alias
            ratione voluptatibus accusamus nostrum, quasi similique nesciunt
            expedita aspernatur cumque architecto reprehenderit veniam provident
            id culpa. Itaque architecto nobis exercitationem culpa ipsam.
          </p>
        </div>
        <div className='about__img'>
          <img src={img1} alt='race' />
        </div>

        {/* STEP 2 */}
        <div className='about__img'>
          <img src={img2} alt='race' />
        </div>
        <div className='about__desc'>
          <h3>And also</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            perferendis blanditiis, nulla velit dolor adipisci delectus neque,
            dolorum mollitia expedita aliquid impedit, quidem iusto quisquam
            officiis quos.
            <br />
            <br />
            Debitis, asperiores dignissimos! Consequatur, laborum alias!
            Perferendis necessitatibus adipisci impedit sit dolorum ipsam nihil
            saepe praesentium dignissimos. Laboriosam, dignissimos illo.
            Consequuntur quidem autem natus quam. Aliquid illum alias magnam
            quas esse molestiae laboriosam.
          </p>
        </div>

        {/* STEP 3 */}
        <div className='about__desc'>
          <h3>And also the last one</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
            eligendi rerum dignissimos ab totam et saepe sapiente amet ut natus
            dolor labore, explicabo autem.
            <br />
            <br />
            Magnam quaerat reprehenderit porro officia autem! Tempore eaque
            similique iste vel libero minima magnam molestiae, dignissimos
            nostrum, reprehenderit unde, neque sed ducimus odio ipsa laudantium
            ratione officiis molestias necessitatibus minus illum quae! Iusto
            amet minima veniam.
          </p>
        </div>
        <div className='about__img'>
          <img src={img3} alt='race' />
        </div>
      </div>
    </div>
  );
};

export default About;
