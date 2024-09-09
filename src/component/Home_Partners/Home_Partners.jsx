import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import {
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
  threem,
  niccoeng,
  hempale,
  jjgandhi,
  aanadeng,
  AsianPaints,
  barger,
  mas,
  pidilite,
} from "../../Images/Images";
import { SectionTitle } from "../Function/Function";

// Custom arrow component
const CustomArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} custom-arrow`}
    style={{
      ...style,
      display: "block",
      marginTop: "20px",
      marginLeft: "auto",
      marginRight: "auto",
    }}
    onClick={onClick}
  >
    <i className="fa fa-chevron-right" aria-hidden="true"></i>
    <i className="fa fa-chevron-right" aria-hidden="true"></i>
  </div>
);

const Home_Partners = () => {
  const partners = [
    { id: 1, logo: threem },
    { id: 2, logo: partner8 },
    { id: 3, logo:partner5},
    { id: 4, logo: partner4 },
    { id: 5, logo: hempale },
    { id: 6, logo: partner3 },
    { id: 7, logo: aanadeng },
    { id: 8, logo: barger },
    { id: 9, logo: mas },
    { id: 10, logo: partner2 },
    { id: 11, logo: partner6 },
    { id: 12, logo: partner9 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 6,
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
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="bg-customBlue py-[50px]">
      <div className="lg:max-w-[1440px] px-[20px] m-auto">
        <div>
          {/* <div className="text-center mb-[50px] ">
            <SectionTitle title="Our Business Partner" />
          </div> */}

          <div className="lg:mt-[50px] flex flex-wrap gap-[30px] justify-center">
            {partners.map((partner) => (
              <motion.div
                key={partner.id}
                className="flex items-center justify-center bg-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: partner.id * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.1, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)" }}
              >
                <img
                  src={partner.logo}
                  alt={`Partner ${partner.id}`}
                  className="sm:w-[163px] max-w-full h-auto"
                />
              </motion.div>
            ))}
          </div>

          {/* <div className="lg:mt-[100px] hidden lg:block">
            <Slider {...settings}>
              {partners.map((partner) => (
                <motion.div
                  key={partner.id}
                  className="flex items-center justify-center bg-white"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <img
                    src={partner.logo}
                    alt={`Partner ${partner.id}`}
                    className="max-w-[150px] h-auto min-h-[100px] max-h-[100px]"
                  />
                </motion.div>
              ))}
            </Slider>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home_Partners;
