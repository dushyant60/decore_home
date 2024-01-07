import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Luxirious Creative and Comfortable Interiors' subtitle='Innovative Designs, Personalized for You' />
        </div>
      </section>
    </>
  )
}

export default Hero

// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Heading from '../../common/Heading';
// import './hero.css';

// import banner from '../../../images/banner.png';
// import banner2 from '../../../images/banner2.jpg';
// import banner3 from '../../../images/banner3.jpg';

// const CarouselSection = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000, // Change the speed as needed
//   };

//   const images = [banner, banner2, banner3]; // Using the imported image files

//   return (
//     <Slider {...settings}>
//       {images.map((image, index) => (
//         <div key={index} className='carousel-item' style={{ backgroundImage: `url(${image})` }}>
//           <div className='container'>
//             <Heading
//               title='Luxurious Creative and Comfortable Interiors'
//               subtitle='Find new & featured property located in your local city.'
//             />
//           </div>
//         </div>
//       ))}
//     </Slider>
//   );
// };

// const Hero = () => {
//   return (
//     <>
//       <section className='hero'>
//         <CarouselSection />
//       </section>
//     </>
//   );
// };

// export default Hero;

