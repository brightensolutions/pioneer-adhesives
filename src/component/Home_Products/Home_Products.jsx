import React from "react";
import { auto_light, CommercialConstruction, electrical_tapes, hylomarproducts, industrialcleaner, ips_product, LeakRepai, MASSEALINGSYSTEMS, mseal, Rubber_Repair_Protection, threeMsefty, Welding_Consumables } from "../../Images/Images";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionTitle } from "../Function/Function";

const ProductItem = ({ image, title, id }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger when 10% of the item is visible
  });

  const variants = {
    hidden: { opacity: 0, x: 20, y: 20 }, // Add x-direction animation
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
        transition: { duration: 0.3 } 
      }}
      className="xl:w-[22%] lg:w-[29.9%]  product-card product_card rounded-t-[10px] flex flex-col bg-white"
    >
      <div>
        <img
          src={image}
          alt={title}
          className="w-[100%] lg:max-h-[268px] rounded-t-[7px] lg:min-h-[268px]"
        />
      </div>
      <div className="flex flex-col flex-grow justify-center items-center">
        <div className="p-[15px] flex justify-center items-center">
          <h1 className="text-[23px] font-oxanium mb-[10px] font-bold text-center">
            {title}
          </h1>
        </div>
      </div>
      <div className="bg-customRed py-[13px] mt-auto">
        <Link
          to={`/productview/${id}`}
          className="flex gap-x-[10px] text-center justify-center lg:text-[19px] text-white font-oxanium"
        >
          I Have Required <span><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span>
        </Link>
      </div>
    </motion.div>
  );
};
export const products = [
  {
    id: 1,
    image: Rubber_Repair_Protection,
    title: "Rubber Repair Protection",
    features: [
      "Rubber Repair and Protection",
      "Weather and Waterproofing Systems",
      "High-Temperature Coatings",
      "Corrosion Protection",
      "Concrete Protection",
      "Safety Grip Systems",
      "Chocking Materials"
    ],
    description: "D&H Sécheron group has been in the forefront within the Indian welding fraternity since its inception in 1966. An ISO 9001-2008 company, a leading name in India and overseas welding industry offers a comprehensive package of welding products and services."
  },
  {
    id: 2,
    image: Welding_Consumables,
    title: "Welding & Cutting Equipment",
    features: [
      "Welding Consumables (Welding Electrodes, Welding Wires & Fluxes)",
      "Welding & Cutting Equipment",
      "Wear liner plates for various applications",
      "Welding Training – various levels of people in the field of welding",
      "Fabrication (Pressure Vessels, Heat Exchangers etc)",
    ],
    description: "D&H Sécheron group has been in the forefront within the Indian welding fraternity since its inception in 1966. An ISO 9001-2008 company, a leading name in India and overseas welding industry offers a comprehensive package of welding products and services."
  },
  {
    id: 3,
    image: electrical_tapes,
    title: "3M Electrical Tapes",
    features: [
      "Power Cable Accessories",
      "Maintenance, Repair & Overhaul (MRO) Electrical Products",
      "OEM Electrical Products",
      "Vinyl Electrical Tapes",
      "Mastic Tapes – Sealing & Insulation",
      "Rubber Tapes – Insulation & Splicing",
      "Heat shrink Sleeves",
    ],
    description: "The Electrical Solutions portfolio from 3M addresses the wide and varied requirements of power generation, transmission and distribution besides effectively catering to exacting needs of users across the Industrial, Construction & Maintenance, Electrical & Electronic OEM and Electrical Utility sectors. <br> With a wide range of products like Splice, termination, insulation materials, electrical tapes and other power cable accessories,3M has a solution for your every need, with a promise of quality, durability & safety - powered by 3M Innovation."
  },
{
  id: 4,
    image: ips_product,
      title: "LPS Products",
        features: [
          "Lubricants/Penetrants",
          " Corrosion Inhibitors",
          "Electronic Cleaners",
          "Industrial Degreasers",
          "Greases",
          "Cutting Fluids",
          "Power Fluids",
          " Specialty MRO",
        ],
          description: "AS A LEADER IN THE MRO INDUSTRY for more than five decades, LPS brand products has provided convenience-packaged maintenance chemicals to industrial, aerospace, military and telecommunications facilities world-wide. ITW Pro Brandsis an Illinois Tool Works (ITW) company. ITW is a leading global diversified manufacturer, designing and producing a wide array of engineered and specialty products. ITW was founded 100 years ago and is a Fortune 200 Company with revenues over $15 billion. <br>The LPS brand is recognized worldwide in the industrial channel as the value-added premium product. We offer over seven categories of products for Maintenance, Repair, and Overhaul (MRO). Our products maintain equipment's efficiency and productivity, preventing costly downtime, while meeting and exceeding specifications for leading automotive, industrial, manufacturer, military, and utilities."
},
{
  id: 5,
    image: threeMsefty,
      title: "3M Safety",
        features: [
          "Respiratory Protection",
          "Hearing Protection",
        ],
          description: "Products that work as hard as you do. From the most basic to the most specialized needs, 3M offers the health and safety protection you and your workers need most, so everyone can perform at their best."
},
{
  id: 6,
    image: auto_light,
      title: "Auto Glow Sinages",
        features: [
          "from any flaws.",
          "Auto Glow Sinages",
        ],
          description: "Our organization, ProliteAutoglo Limited, was established in 2007, which have been engrossed in manufacturing a commendable array of Lights and Signage’s. In addition to this, we are providing Emergency Lights, Exit Lights and Solar Products to our prestigious clients. Offered product range is highly acclaimed by the customers for their low maintenance, easy installation, high operational efficiency as well as long lasting functionality. Owing to these salient features, our offered products are highly demanded in the several industries. The provided products by us are optimum in terms of quality and free from any flaws."
},
{
  id: 7,
    image: LeakRepai,
      title: "Leak Repair",
        features: [
          "Leak Repair ",
          "Pipe Remediation",
          "Corrosion Control",
          "Easy to apply",
        ],
          description: "InduMar's product line has developed since 1986 from the Stop It® Pipe Repair System to include our formulated high strength systems for more demanding application, and the addition of the Viscotaq line of corrosion control products. We operate in all markets where pipe leaks and corrosion are a problem. <br>InduMar Products has been helping companies repair pipe and fitting leaks and get back online, quickly and safely for 30 years. As leaders in the field of leak repair, we offer the products and services you need."
},
{
  id: 8,
    image: mseal,
      title: "Adhesives & Sealant",
        features: [
          "M-Seal ",
          "Fevi Kwik",
          "Fevitite ",
          "Fevicol",
          "SteelGrip",
        ],
          description: "Since its inception in 1959, Pidilite Industries Limited has been a pioneer in consumer and specialities chemicals in India. Over two-third of the company’s sales come from products and segments it has pioneered in India. <br> Our product range includes Adhesives and Sealants, Construction and Paint Chemicals, Automotive Chemicals, Art Materials, Industrial Adhesives, Industrial and Textile Resins and Organic Pigments and Preparations. Most of the products have been developed through strong in-house R&D  <br> Pidilite Industries is the market leader in adhesives and sealants, construction chemicals, hobby colours and polymer emulsions in India. Our brand name Fevicol has become synonymous with adhesives to millions in India and is ranked amongst the most trusted brands in India."
},
{
  id: 9,
    image: MASSEALINGSYSTEMS,
      title: "MAS SEALING SYSTEMS",
        features: [
          "MAS NON ASBESTOS BRAIDED GLAND PACKINGS",
          "MAS GRAPHITE TAPES RINGS & GASKETS",
          "MAS PTFE JOINT SEALANTS",
          "MAS PTFE VALVE STEM PACKINGS",
          "MAS NON ASBESTOS BRAIDED GLAND PACKINGS",
          "MAS GRAPHITE TAPES RINGS & GASKETS",
          "MAS PTFE JOINT SEALANTS",
          "MAS PTFE VALVE STEM PACKINGS"
        ],
          description: "MAS SEALING SYSTEMS (P) LIMITED is one of India's leading packing and gaskets manufacturing company, established in 1993. Within its short span of existence, MAS SEALING SYSTEMS (P) LIMITED has firmly entrenched itself in the industry. MAS SEALING SYSTEMS (P) LIMITED has the set-up of a large company as far as resources and quality are concerned but operates with the speed and versatility of a small company. <br> The range of products handled include Non asbestos gland packing, Graphite sealing systems, Gaskets and Maintenance consumables. These products can be used in original equipments as well as in maintenance & repairs in all spheres of Industry."
},
{
  id: 10,
    image: industrialcleaner,
      title: "Molygraph®",
        features: [
          "Lubricating Greases",
          "Industrial Cleaners & Degreasers",
          "Food Grade Lubricants",
          "Industrial Cleaners & Degreasers",
          "Lubricating Greases",
          "Lubricating Oils",
          "Lubricating Pastes",
          "Metal Forming Lubricants",
          "Metal Working Fluids",
          "MRO",
          "Rust Preventives",
          "Thread Dope Compound",
        ],
          description: "Established in 1984, Molygraph® began with the aim of being better than the best. In the years since then, we have become synonymous with high quality speciality lubricants and maintenance, repairs & operation products that have won us loyal customers across India."
},
{
  id: 11,
    image: CommercialConstruction,
      title: "3M Fire Protection",
        features: [
          "Commercial Construction Firestop Solutions",
          "Healthcare Facility Firestop Solutions",
          "Industrial Firestop Solutions",
          "Oil & Gas Firestop Solutions",
        ],
          description: "3M fills international fire protection needs across the globe, from fire containment to fire suppression. 3M™ Fire Protection Products address fire containment and are an integral part of a well-designed fire protection system. Our understanding of the spread of fire, smoke and toxic gases helps us continue creating preventative and affordable firestopping solutions. <br>As a leader in international fire protection, 3M drives technologies that enable lower cost building solutions. For instance, 3M intumescent technology enabled the use of plastic pipes that were previously banned in commercial buildings due to their combustible nature – providing a cheaper, easy-to-install solution for plumbing pipes and electrical conduits. "
},
{
  id: 12,
    image: hylomarproducts,
      title: "Hylomar Products",
        features: [
          "Non-Setting Jointing Compounds",
          "Silicone Sealants",
          "Anaerobic – Thread Sealers, Lockers & Retainers",
          "Epoxy Adhesives & Putties",
          "Pre-Applied Adhesives & Sealants",
          "Exhaust Products",
          "MS Polymers",
          "Structural Adhesives",
          "Instant Adhesives"
        ],
          description: "Hylomar Limited manufactures a wide range of high performance sealants and adhesives used by some of the leading OEM’s in the world of automotive, aerospace, white goods, power generation/distribution, electronics/photonics and general engineering. <br> Hylomar products are also widely used and respected in the automotive, aerospace and industrial aftermarkets with Hylomar Universal Blue and Hylomar M probably being the leading non-setting gasket & jointing compounds in the world. <br>HylomarAerograde, Aerograde Ultra and Advanced Formulation are specified by various aero-engine manufacturers; including Rolls-Royce and Pratt & Whitney. HylomarAerograde is also specified by NATO. <br> Hylomar RTV silicone sealants are used to seal engines, gearboxes and transmissions for leading vehicle manufacturers around the globe with our amine curing products being particularly favoured <br>In addition, unlike many sealant and adhesive companies, Hylomar Limited are manufacturers and product formulators  Therefore, if commercially viable, we can develop products to specific customer requirements."
},
];

const Home_Products = () => {
  return (
    <div className="bg-[#cfc9c954] lg:py-[100px]">
      <div className="lg:max-w-[1440px] m-auto px-[20px]">
        <div className="text-center lg:mb-[50px]">
          <SectionTitle
            title="Our Products"
            textColor="text-white"
            bgColor="#2569ac"
          />
        </div>
        <div className="lg:mt-[100px] flex lg:flex-row flex-wrap  lg:gap-[48px] xl:gap-[49px] 2xl:gap-[50px]">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              features={product.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home_Products;
