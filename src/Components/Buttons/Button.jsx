import React from 'react';

const Button = ({
  children,
  onClick,
  bgColor = '#000',
  textColor = '#fff',
  borderColor = '#000',
  variant = 'solid',
  fullWidth = false,
}) => {

  const baseClasses = `
  px-5 py-2 sm:px-8 sm:py-3 md:px-10 md:py-3 
  rounded-lg font-semibold 
  transition-transform duration-200 ease-out 
  text-center cursor-pointer 
  active:scale-90 focus:outline-none
`;

  const widthClass = fullWidth ? 'w-full' : 'w-fit';

  let styles = {
    fontFamily: 'Urbanist',
  };

  if (variant === 'solid') {
    
    styles = {
      ...styles,
      backgroundColor: bgColor,
      color: textColor,
      border: `1.6px solid ${borderColor}`,
    };
  } else if (variant === 'outline') {
    styles = {
      ...styles,
      backgroundColor: 'transparent',
      color: textColor,
      border: `1.6px solid ${borderColor}`,
    };
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${widthClass}`}
      style={styles}
    >
      {children}
    </button>
  );
};

export default Button;
