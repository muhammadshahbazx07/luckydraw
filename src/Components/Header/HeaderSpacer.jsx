import React from 'react';

const HeaderSpacer = () => {
  return (
    <div className="w-full">
      {/* Social Bar height: py-3 (24px), Header height: py-4 (32px) = total 56px */}
      {/* Tuning with pt-[64px] for safety */}
      <div className="h-[100px] md:h-[100px]"></div>
    </div>
  );
};

export default HeaderSpacer;
