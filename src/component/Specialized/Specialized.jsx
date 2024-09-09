import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { bg_img_slider, bg_pluse, logo2 } from "../../Images/Images";
import video from "../../Images/video.mp4";

const Specialized = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const bgImageVariants = {
    initial: { opacity: 0, scale: 1.2 },
    animate: { opacity: 1, scale: 1, transition: { duration: 2 } },
    exit: { opacity: 0, scale: 1.2, transition: { duration: 2 } },
  };

  const logoAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 3, ease: "easeInOut", repeat: Infinity },
    },
  };

  return (
    <div className="relative overflow-hidden pt-[60px]">
      <video
        src={video}
        autoPlay
        muted
        loop
        className="inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-center text-white  bg-opacity-80 px-[20px]">
        <div className="lg:max-w-[1440px] m-auto">
          <div className="flex lg:flex-row md:flex-row items-center flex-col-reverse">
            {/* <motion.div
              className="lg:w-[50%] bg-[#f1f1f187] lg:p-[44px] rounded-[10px] box w-[100%]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p className="lg:text-[29px] xl:text-[35px] text-center text-[26px] font-oxanium text-black font-bold bg-[#3d3d3e5e] pt-[5px] welcome_border border-[1px] border-[#ffffff12]">
                Welcome To Our Website
              </p>
              <div className="flex flex-col items-center">
                <h1 className="threed_text lg:text-[104px] xl:text-[128px] font-oxanium text-customBlue text-[58px] md:text-[136px]">
                  PIONEER
                </h1>
                <p className="lg:text-[50px] font-oxanium text-customBlue lg:mt-[-37px] font-bold text_shedow text-[30px] md:mt-0">
                  CORPORATION
                </p>
              </div>
              <motion.p
                className="text-black font-bold font-raleway mt-[10px] md:text-[25px] lg:text-[20px] xl:text-[25px] text-[15px] sm:text-[18px] text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                We would like to introduce ourselves as a service provider
                company incorporated for providing industrial scaffolding and
                painting at major industries.
              </motion.p>
            </motion.div> */}

            {/* <motion.div
              className="md:w-[100%] w-[100%] md:hidden lg:block block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.img
                src={logo2}
                alt="logo"
                className="sm:w-[500px] w-[100%] m-auto"
                variants={logoAnimation}
                animate="animate"
              />
            </motion.div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialized;
