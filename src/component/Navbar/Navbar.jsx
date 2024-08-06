import React from "react";
import { logo } from "../../Images/Images";
import { NavLink } from "react-router-dom";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const NavbarMenu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About Us", link: "/aboutus" },
    { id: 3, name: "Products", link: "/product" },
    { id: 4, name: "Business Partners", link: "/partners" },
    { id: 5, name: "Clients", link: "/clients" },
  ];

  return (
    <div>
      <div className="bg-[#e5e7eb] border-b-[1px] border-customRed md:block hidden">
        <div className="lg:max-w-[1440px] m-auto px-[20px]">
          <div className="flex justify-between items-center">
            <div>
              <img src={logo} alt="logo" className="xl:w-[300px] lg:w-[251px] md:w-[174px]" />
            </div>

            <div>
              <nav>
                <ul className="flex lg:gap-[18px] xl:gap-[50px] mg:gap-[9px]">
                  {NavbarMenu.map((item) => (
                    <li
                      key={item.id}
                      className="lg:text-[18px] font-semibold font-raleway relative group md:text-[14px]"
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
                className="lg:text-[17px] xl:text-[18px]font-semibold md:text-[12px] font-raleway bg-customBlue text-white px-[40px] py-[15px] rounded-[10px] border-[1px] border-customRed transition duration-300 hover:bg-customRed hover:text-white md:py-[14px] md:px-[18px]"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div>
          <div className="flex justify-between px-[20px] items-center top-0 fixed bg-white w-[100%] border-b-[2px] border-customRed" style={{ zIndex: "99999999999" }}>
            <div>
              <img src={logo} alt="logo" className="xl:w-[300px] lg:w-[251px] md:w-[174px] w-[215px]" />
            </div>
            <div>
              <button onClick={toggleDrawer} className="text-[36px]"><i class="fa fa-bars" aria-hidden="true"></i></button>
            </div>
          </div>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            className='bla bla bla'
            style={{ zIndex: "999999999" }}
          >
            <div className=" px-[20px] py-[80px]">
              <ul className="flex gap-[18px] flex-col">
                {NavbarMenu.map((item) => (
                  <li
                    key={item.id}
                    className="lg:text-[18px] font-semibold font-raleway relative group md:text-[14px]"
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
              <div className="mt-[35px]">
                <NavLink
                  to="/contactus"
                  className="lg:text-[17px] xl:text-[18px]font-semibold md:text-[12px] font-raleway bg-customBlue text-white px-[40px] py-[15px] rounded-[10px] border-[1px] border-customRed transition duration-300 hover:bg-customRed hover:text-white md:py-[14px] md:px-[18px]"
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
