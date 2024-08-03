import React from "react";
import { auto_light, electrical_tapes, ips_product, Rubber_Repair_Protection, threeMsefty, Welding_Consumables } from "../../Images/Images";
import SectionTitle from "../Function/Function";
import { Link } from "react-router-dom";

const ProductItem = ({ image, title, features }) => (
  <div className="lg:w-[30%] product_card rounded-t-[10px] flex flex-col bg-white">
    <div>
      <img
        src={image}
        alt={title}
        className="w-[100%] lg:max-h-[268px] rounded-t-[7px] lg:min-h-[268px]"
      />
    </div>
    <div className="flex flex-col flex-grow">
      <div className="p-[15px] flex-grow">
        <h1 className="text-[26px] font-oxanium mb-[10px] font-bold">
          {title}
        </h1>
        <div>
          <ul>
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex gap-[10px] items-center lg:text-[17px] font-raleway lg:mb-[8px] font-medium"
              >
                <span className="text-[10px] text-customBlue">
                  <i className="fa fa-circle" aria-hidden="true"></i>
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-customRed py-[13px] mt-auto rounded-t-[15px]">
      <Link className="flex gap-x-[10px] text-center justify-center lg:text-[19px] text-white font-oxanium">
        I Have Required <span><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span>
      </Link>
    </div>
  </div>
);

const Home_Products = () => {
  const products = [
    {
      id: 1,
      image: Rubber_Repair_Protection,
      title: "Rubber Repair Protection",
      features: [
        "Casting/Injection Materials",
        "Weather and Waterproofing Systems",
        "High-Temperature Coatings",
        "Corrosion Protection",
        "Concrete Protection",
        "Safety Grip Systems",
        "Chocking Materials",
      ],
    },
    {
      id: 2,
      image: Welding_Consumables,
      title: "Welding & Cutting Equipment",
      features: [
        "Welding_Consumables",
        "Welding_Consumables",
        "Wear liner plates for various applications",
        "Welding Training – various levels of people in the field of welding",
        "Fabrication (Pressure Vessels, Heat Exchangers etc)"
      ],
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
          "Heat shrink Sleeves"
        ],
      },
      {
        id: 3,
        image: ips_product,
        title: "LPS Products",
        features: [
          "Lubricants/Penetrants",
          "Corrosion Inhibitors",
          "Electronic Cleaners",
          "Industrial Degreasers",
          "Greases",
          "Cutting Fluids",
          "Power Fluids"
        ],
      },
      {
        id: 4,
        image: threeMsefty,
        title: "3M Safety",
        features: [
          "Products Nigeria",
          "Ghana",
          "Algeria",
          "Mauritania",
          "Tanzania",
          "Kenya",
          "Uganda",
          "Other More"
        ],
      },
      {
        id: 5,
        image: auto_light,
        title: "Auto Glow Sinages",
        features: [
          "Emergency Lights",
          "Exit Lights",
          "Solar",
          "Other More"
        ],
      },
  ];

  return (
    <div className="bg-[#cfc9c9] lg:py-[100px]">
      <div className="lg:max-w-[1440px] m-auto px-[20px]">
        <div className="text-center lg:mb-[50px]">
          <SectionTitle
            title="Our Products"
            textColor="text-white"
            bgColor="#2569ac"
          />
        </div>
        <div className="lg:mt-[100px] flex lg:flex-row flex-wrap gap-[50px]">
          {products.map((product) => (
            <ProductItem
              key={product.id}
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
