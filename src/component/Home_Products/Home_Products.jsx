import React from "react";
import { antiseizetapes, auto_light, barger, CommercialConstruction, dhlogo, electrical_tapes, hempale, hylomarproducts, industrialcleaner, Interior, ips_product, LeakRepai, mas, MASSEALINGSYSTEMS, molygraph, mseal, paintproduct, partner2, partner5, partner8, partner9, product1, product2, product3, product4, product5, product6, product7, prolite, Rubber_Repair_Protection, soudal, soudalproduct, threem, threeMsefty, Welding_Consumables } from "../../Images/Images";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";  // Import useLocation
import { SectionTitle } from "../Function/Function";

const ProductItem = ({ image, title, logo, id, link }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, x: 20, y: 20 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 },
      }}
      className="xl:w-[30.32%] lg:w-[33%] rounded-[10px] flex flex-col bg-white sm:w-[47.9%] " 
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="flex justify-center items-center h-[250px] border-b-2">  
          <img
            src={image}
            alt={title}
            className="w-[100%] h-[100%] object-cover"  
          />
        </div>
        <div className="flex justify-center items-center flex-grow h-[150px]">  
          <div className="flex justify-center items-center">
            <img
              src={logo}
              alt="logo"
              className="w-[150px]"  
            />
          </div>
        </div>
      </a>
    </motion.div>
  );
};



export const products = [
  {
    id: 1,
    image: product1,
    logo: dhlogo,
    link: "https://www.dnhsecheron.com/"
  },
  {
    id: 2,
    image: product2,
    logo: partner5,
    link: "https://belzona.com/en/index.aspx"
  },
  {
    id: 3,
    image: product3,
    logo: threem,
    link: "https://www.3mindia.in/3M/en_IN/company-in/"
  },
  {
    id: 4,
    image: auto_light,
    logo: prolite,
    link: "https://www.prolite.in/"
  },
  {
    id: 5,
    image: product4,
    logo: partner9,
    link: "https://www.pidilite.com/"
  },
  {
    id: 6,
    image: product7,
    logo: molygraph,
    link: "https://www.molygraph.com/"
  },
  {
    id: 7,
    image: product5,
    logo: partner8,
    link: "https://www.akzonobel.com/en"
  },
  {
    id: 8,
    image: product6,
    logo: hempale,
    link: "https://www.hempel.com/"
  },
  {
    id: 9,
    image: hylomarproducts,
    logo: partner2,
    link: "https://hylomar.com/"
  },
  {
    id: 10,
    image: soudalproduct,
    logo: soudal,
    link: "https://soudal.in/"
  },
  {
    id: 11,
    image: Interior,
    logo: barger,
    link: "https://www.bergerpaints.com/"
  },
  {
    id: 12,
    image: antiseizetapes,
    logo: mas,
    link: "https://www.masseal.com/"
  },
];

const Home_Products = () => {
  const location = useLocation();  // Get the current location

  return (
    <div className="bg-[#cfc9c954] lg:py-[100px] py-[50px] overflow-hidden">
      <div className="lg:max-w-[1440px] m-auto px-[20px]">
        {/* Conditionally render the SectionTitle */}
        {location.pathname !== "/product" && (
          <div className="text-center lg:mb-[50px]">
            <SectionTitle
              title="Our Products"
              textColor="text-white"
              bgColor="#2569ac"
            />
          </div>
        )}
        <div className=" flex justify-center lg:flex-row flex-wrap lg:gap-[48px] xl:gap-[49px] 2xl:gap-[50px] gap-[25px]">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title} 
              logo={product.logo}
              link={product.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home_Products;
