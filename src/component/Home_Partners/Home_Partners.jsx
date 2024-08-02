import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9, partner10 } from '../../Images/Images';

const Home_Partners = () => {
  const partners = [
    { id: 1, logo: partner1 },
    { id: 2, logo: partner2 },
    { id: 3, logo: partner3 },
    { id: 4, logo: partner4 },
    { id: 5, logo: partner5 },
    { id: 6, logo: partner6 },
    { id: 7, logo: partner7 },
    { id: 8, logo: partner8 },
    { id: 9, logo: partner9 },
    { id: 10, logo: partner10 }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='bg-customBlue py-[50px]'>
      <div className='lg:max-w-[1440px] px-[20px] m-auto'>
        <Slider {...settings}>
          {partners.map((partner) => (
            <div key={partner.id} className='flex items-center justify-center'>
              <img src={partner.logo} alt={`Partner ${partner.id}`} className='max-w-[150px]' />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home_Partners;
