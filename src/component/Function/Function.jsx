import React from 'react';
import { bg_pluse } from '../../Images/Images';

export const SectionTitle = ({ title, textColor = 'text-white', bgColor = '#a2373a59' }) => {
  return (
    <h1
      className={`title_shadow lg:text-[46px] font-raleway font-bold ${textColor} inline-block lg:px-[50px] rounded-tl-[50px] rounded-br-[50px] border-[1px] border-[#5f9ea0]`}
      style={{ backgroundColor: bgColor }}
    >
      {title}
    </h1>
  );
};

export const Title_page = ({ title }) => {
  return (
    <div
      className="about-header relative py-[100px] text-center"
      style={{
        backgroundImage: `url(${bg_pluse})`,
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundSize: '100% 100%',
        backgroundBlendMode: 'overlay',
        color: 'white',
      }}
    >
      <h1 className="font-bold sm:text-[80px] font-raleway bg-[#94a3b861] inline-block title_Section">
        {title}
      </h1>
    </div>
  );
};
