import React from "react";
import { logo } from "../../Images/Images";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const NavbarMenu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About Us", link: "/aboutus" },
    { id: 3, name: "Products", link: "/product" },
    { id: 4, name: "Business Partners", link: "/partners" },
    { id: 5, name: "Clients", link: "/clients" },
  ];

  return (
    <div className="bg-[#e5e7eb] border-b-[1px] border-customRed">
      <div className="lg:max-w-[1440px] m-auto px-[20px]">
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} alt="logo" className="lg:w-[300px]" />
          </div>

          <div>
            <nav>
              <ul className="flex lg:gap-[50px]">
                {NavbarMenu.map((item) => (
                  <li
                    key={item.id}
                    className="lg:text-[18px] font-semibold font-raleway relative group"
                  >
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        isActive
                          ? "text-customRed relative border-b-2 border-customRed pb-1 hover:border-none" 
                          : "text-customBlue relative group-hover:text-customBlue pb-1"
                      }
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-customBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <NavLink
              to="/contactus"
              className="lg:text-[18px] font-semibold font-raleway bg-customBlue text-white px-[40px] py-[15px] rounded-[10px] border-[1px] border-customRed transition duration-300 hover:bg-customRed hover:text-white"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
