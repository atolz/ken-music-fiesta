import React from "react";

const Container = (props) => {
  return (
    <div className=" max-w-[136.3rem]" {...props}>
      {props.children}
    </div>
  );
};

export default Container;
