import React from "react";

const SvgIconWrapper = ({ className, iconName, action }) => {
  return (
    <svg onClick={() => action()} className={`stroke-current inline-block fill-current stroke-0 w-10 h-10 ${className}`}>
      <use xlinkHref={`svg-icons-defs.svg#icon-${iconName}`}></use>
    </svg>
  );
};

export default SvgIconWrapper;
