import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import our_catelog from "../../Pdf/PSPC_CATALOUGE.pdf";
import { logo } from "../../Images/Images";


const Footer = () => {
    const location = useLocation();
    const path = location.pathname.substring(1);
  
    const NavbarMenu = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "About Us", link: "/aboutus" },
        { id: 3, name: "Products", link: "/product" },
        { id: 4, name: "Business Partners", link: "/partners" },
        { id: 5, name: "Clients", link: "/clients" },
    ];
  
    const NavbarMenu2 = [
      { id: 1, name: "Our Catalouge", link: our_catelog }
    ];
  
    return (
      <div className={` ${path === "machinery" ? "mt-[0px]" : "mt-[0px]"} bg-[#fff0f5]`}>
        <div className="footer pt-[50px]">
          <div className="lg:max-w-[1440px] m-auto flex flex-wrap justify-between px-[20px]">
            <div className="md:w-[40%]">
              <img src={logo} alt="logo" className="w-[350px]" />
              <p className="mt-[30px] text-[16px] font-poppins max-w-[500px] font-bold">
              Progress never takes a day off neither does our Determination to deliver by "Exploring Transformation"
              </p>
              {/* <div className="flex flex-row gap-[21px] mt-[26px]">
                <Link className="text-[20px] flex justify-center items-center bg-customBlue text-white w-[40px] h-[40px] text-center rounded-[50px] px-[10px]">
                  <span><i className="fa fa-facebook" aria-hidden="true"></i></span>
                </Link>
                <Link className="text-[20px] flex justify-center items-center bg-customBlue text-white w-[40px] h-[40px] text-center rounded-[50px] px-[10px]">
                  <span><i className="fa fa-instagram" aria-hidden="true"></i></span>
                </Link>
                <Link className="text-[20px] flex justify-center items-center bg-customBlue text-white w-[40px] h-[40px] text-center rounded-[50px] px-[10px]">
                  <span><i className="fa fa-youtube-play" aria-hidden="true"></i></span>
                </Link>
                <Link className="text-[20px] flex justify-center items-center bg-customBlue text-white w-[40px] h-[40px] text-center rounded-[50px] px-[10px]">
                  <span><i className="fa fa-linkedin" aria-hidden="true"></i></span>
                </Link>
              </div> */}
            </div>
  
            <div className="md:w-[20%] w-[100%] mt-[35px] md:mt-[0px]">
              <h1 className="text-[20px] font-Oxanium font-bold mb-[20px] text-customRed">Company</h1>
              <ul className="list-none p-0">
                {NavbarMenu.map((item) => (
                  <li key={item.id} className="mb-[10px]">
                    <Link to={item.link} className="text-gray-800 hover:text-customRed font-poppins">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
  
            <div className="md:w-[20%] mt-[35px] md:mt-[0px]">
              <h1 className="text-[20px] font-Oxanium font-bold mb-[20px] text-customRed">Other Link</h1>
              <ul className="list-none p-0">
                {NavbarMenu2.map((item) => (
                  <li key={item.id} className="mb-[10px]">
                    <a href={item.link} className="text-gray-800 hover:text-customRed font-poppins" download>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <Link className="bg-customBlue text-white py-[5px] px-[10px] mt-[10px] inline-block font-Oxanium rounded-[4px]">Group Companies</Link>
            </div>
          </div>
        </div>
        <div className="text-center py-[15px] text-black border-t-customBlue border-t-[2px] mt-[70px] px-[20px]">
          <Link to="https://brightensolutions.com/" >
            <p className="font-poppins font-medium text-[15px] lg:text-[18px]">
              © Copyright 2024 by <Link to="https://brightensolutions.com/" className="text-customRed font-Oxanium font-bold hover:text-customBlue"> Brighten Solutions </Link>
            </p>
          </Link>
        </div>
      </div>
    );
}

export default Footer;
