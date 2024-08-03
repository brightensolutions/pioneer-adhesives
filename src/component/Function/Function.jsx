import React from 'react';

const SectionTitle = ({ title, textColor = 'text-white', bgColor = '#a2373a59' }) => {
  return (
    <h1
      className={`title_shadow lg:text-[46px] font-raleway font-bold ${textColor} inline-block lg:px-[50px] rounded-tl-[50px] rounded-br-[50px] border-[1px] border-[#5f9ea0]`}
      style={{ backgroundColor: bgColor }}
    >
      {title}
    </h1>
  );
};

export default SectionTitle;
