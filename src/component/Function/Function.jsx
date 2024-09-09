import React from 'react';
import { bg_pluse } from '../../Images/Images';

export const SectionTitle = ({ title, textColor = 'text-white', bgColor = '#a2373a59' }) => {
  return (
    <h1
      className={`title_shadow w-[100%] sm:w-auto mb-[50px] lg:text-[46px] text-[36px] font-raleway font-bold ${textColor} inline-block lg:px-[50px] rounded-tl-[50px] rounded-br-[50px] border-[1px] border-[#5f9ea0]`}
      style={{ backgroundColor: bgColor }}
    >
      {title}
    </h1>
  );
};

export const Title_page = ({ title }) => {
  return (
    <div
      className="about-header relative pt-[160px] pb-[100px] text-center"
      style={{
        // backgroundImage: `url(${bg_pluse})`,
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundColor: '#0000004f',
        backgroundSize: '100% 100%',
        backgroundBlendMode: 'overlay',
        color: 'white',
      }}
    >
      <h1 className="font-bold md:text-[80px] sm:text-[45px] font-raleway bg-customBlue inline-block title_Section mt-[57px] sm:mt-0 text-[35px]">
        {title}
      </h1>
    </div>
  );
};
