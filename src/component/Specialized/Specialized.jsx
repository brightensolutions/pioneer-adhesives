import React from "react";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion"; // Import framer-motion
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
        {[...Array(4)].map((_, index) => (
          <div key={index} className="relative w-full md:h-[800px] h-[700px]">
            <img
              src={bg_img_slider}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>

      <div className="absolute inset-0 flex flex-col justify-center text-white bg-[#000e2ac9] bg-opacity-80 px-[20px]">
        <div className="lg:max-w-[1440px] m-auto ">
          <div className="flex lg:flex-row md:flex-row items-center flex-col-reverse">
            <motion.div
              className="lg:w-[50%] bg-[#0000004a] lg:p-[44px] rounded-[10px] box w-[100%]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p className="lg:text-[29px] xl:text-[35px] text-center text-[26px] font-oxanium text-customRed font-bold bg-[#3d3d3e5e] pt-[5px] welcome_border border-[1px] border-[#ffffff12] ">
                Welcome To Our Website
              </p>
              <div className="flex flex-col items-center">
                <h1 className="threed_text lg:text-[104px] xl:text-[128px] font-oxanium text-customBlue text-[58px]">
                  PIONEER
                </h1>
                <p className="lg:text-[50px] font-oxanium text-customBlue md:mt-[-37px] font-bold text_shedow text-[30px]">
                  CORPORATION
                </p>
              </div>
              <motion.p
                className="text-white font-raleway mt-[10px] md:text-[25px] lg:text-[20px] xl:text-[25px] text-[15px] sm:text-[18px] text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                We would like to introduce ourselves as a service provider
                company incorporated for providing industrial scaffolding and
                painting at major industries.
              </motion.p>
            </motion.div>

            <motion.div
              className="md:w-[50%] w-[100%]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Fade duration={1000} triggerOnce>
                <img
                  src={logo2}
                  alt="logo"
                  className="sm:w-[500px] w-[100%] m-auto"
                />
              </Fade>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialized;
