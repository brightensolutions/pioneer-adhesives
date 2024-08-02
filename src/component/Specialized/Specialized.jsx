import React from "react";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Bounce, Fade } from "react-awesome-reveal";
import { bg_img_slider, logo2 } from "../../Images/Images";

const Specialized = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="relative">
      <Slider {...sliderSettings} className="absolute inset-0">
        <div className="relative w-full h-[800px]">
          <img
            src={bg_img_slider}
            alt="Banner 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative w-full h-[800px]">
          <img
            src={bg_img_slider}
            alt="Banner 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative w-full h-[800px]">
          <img
            src={bg_img_slider}
            alt="Banner 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative w-full h-[800px]">
          <img
            src={bg_img_slider}
            alt="Banner 4"
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>

      <div className="absolute inset-0 flex flex-col justify-center text-white bg-[#000e2ac9] bg-opacity-80 px-[20px]">
        <div className="lg:max-w-[1440px] m-auto ">
          <div className="flex lg:flex-row md:flex-row items-center">
            <div className="lg:w-[50%] bg-[#0000004a] lg:p-[44px] rounded-[10px] box">
                <p className="lg:text-[35px] text-center font-oxanium text-customRed font-bold bg-[#3d3d3e5e] pt-[5px] welcome_border border-[1px] border-[#ffffff12] ">Welcome To Our Website</p>
              <div className="flex flex-col items-center">
                <h1 className="threed_text lg:text-[128px] font-oxanium text-customBlue">
                 PIONEER
                </h1>
                <p className=" lg:text-[50px] font-oxanium text-customBlue mt-[-37px] font-bold text_shedow">
                  CORPORATION
                </p>
              </div>
              <p className="text-white font-raleway mt-[10px] md:text-[25px] text-[15px] sm:text-[18px] text-center">
                We would like to introduce ourselves as a service provider
                company incorporated for providing industrial scaffolding and
                painting at major industries.
              </p>
            </div>

            <div className="w-[50%] ">
              <div className="animate-vertical flex items-center justify-center">
                <img src={logo2} alt="logo" className="w-[500px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialized;
