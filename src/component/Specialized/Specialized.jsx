import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { akzonobel, belzonaimg, DandH, dns, Hempel, mccoy, Mcompany, slider1, slider2, slider3 } from "../../Images/Images";
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
    autoplaySpeed: 1500,
    fade: true,
  };

  const slides = [
    {
      bgImage:Hempel
    },
    {
      bgImage: slider1,
      // content: (
      //   <div className="text-center sm:max-w-[500px] max-w-[350px] p-[10px] sm:p-0">
      //     <h1 className="text-white sm:text-[52px] text-[30px] font-bold">Pioneer Adhesives</h1>
      //     <h4 className="text-white font-bold sm:text-[30px] text-[25px]">D & H Secheron</h4>
      //     <p className="text-white sm:text-[20px] text-[18px]">Pioneer Adhesives is a trusted distributor of DNH Secheron, offering top-quality welding and industrial solutions. We provide innovative products designed to meet the needs of various industries.</p>
      //   </div>
      // ),
    },
    {
      bgImage: belzonaimg,
      // content: (
      //   <div className="text-center sm:max-w-[500px] max-w-[350px] p-[10px]">
      //     <h1 className="text-white sm:text-[52px] text-[30px] font-bold">Pioneer Adhesives</h1>
      //     <h4 className="text-white font-bold sm:text-[30px] text-[25px]">Belzona</h4>
      //     <p className="text-white sm:text-[20px] text-[18px]">Pioneer Adhesives proudly distributes Belzona products, offering advanced repair and protection solutions for machinery, equipment, and structures. Our range ensures long-lasting performance in various industrial applications.</p>
      //   </div>
      // ),
    },
    {
      bgImage: Mcompany,
      // content: (
      //   <div className="text-center sm:max-w-[500px] max-w-[350px] p-[10px]">
      //     <h1 className="text-white sm:text-[52px] text-[30px] font-bold">Pioneer Adhesives</h1>
      //     <h4 className="text-white font-bold sm:text-[30px] text-[25px]">3M Company</h4>
      //     <p className="text-white sm:text-[20px] text-[18px]">Pioneer Adhesives supplies high-quality safety gear from 3M and advanced repair solutions from Belzona, ensuring reliable protection for both personal safety and machinery.</p>
      //   </div>
      // ),
    },
    {
      bgImage: akzonobel,
      // content: (
      //   <div className="text-center sm:max-w-[500px] max-w-[350px] p-[10px]">
      //     <h1 className="text-white sm:text-[52px] text-[30px] font-bold">Pioneer Adhesives</h1>
      //     <h4 className="text-white font-bold text-[30px]">Akzonobel</h4>
      //     <p className="text-white sm:text-[20px] text-[18px]">Pioneer Adhesives provides AkzoNobel's Nordsjö paints for Artscape’s urban art projects. These vibrant murals, created with our high-quality paints, enhance cityscapes and foster community spirit.</p>
      //   </div>
      // ),
    },
    {
      bgImage:mccoy
    },
    {
      bgImage: slider2,
    },
    {
      bgImage: slider3,
    },
    {
      bgImage:dns,
    },
    {
      bgImage:DandH,
    },
  ];

  return (
    <div className="relative overflow-hidden md:pt-[90px] pt-[50px]">
      {/* Slider Wrapper */}
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[400px] md:h-[680px]">
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
            {slide.content && (
              <div className="absolute top-[18%] flex flex-col items-end justify-end z-10 right-0 bg-[#0000005c] md:p-[65px] p-[10px] border-[2px] border-r-0">
                {slide.content}
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Specialized;
