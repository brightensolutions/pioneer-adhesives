import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { bg_img_slider, bg_pluse, logo2, slider1, slider2, slider3, slider4 } from "../../Images/Images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Specialized = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const slides = [
    {
      bgImage: slider1,
      content: (
        <div className="text-center">
          {/* <h1 className="text-white text-[58px] font-bold">Slide 1 Title</h1>
          <p className="text-white text-[20px]">This is the content for slide 1.</p> */}
        </div>
      ),
    },
    {
      bgImage: slider4,
      content: (
        <div className="text-center">
          {/* <h1 className="text-white text-[58px] font-bold">Slide 1 Title</h1>
          <p className="text-white text-[20px]">This is the content for slide 1.</p> */}
        </div>
      ),
    },
    {
      bgImage: slider2,
      content: (
        <div className="text-center">
          {/* <h1 className="text-white text-[58px] font-bold">Slide 2 Title</h1>
          <p className="text-white text-[20px]">This is the content for slide 2.</p> */}
        </div>
      ),
    },
    {
      bgImage: slider3,
      content: (
        <div className="text-center">
          {/* <h1 className="text-white text-[58px] font-bold">Slide 3 Title</h1>
          <p className="text-white text-[20px]">This is the content for slide 3.</p> */}
        </div>
      ),
    },
  ];

  return (
    <div className="relative overflow-hidden md:pt-[90px] pt-[50px]">
      {/* Slider Wrapper */}
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full md:h-[600px] h-[400px]">
            {/* Background Image */}
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              {slide.content}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Specialized;
