import React, { useContext } from "react";
import { popUpContext } from "../../Context/PopUps";

const Security = () => {
  const popUpFunctions = useContext(popUpContext);
  return (
    <div className="flex items-center">
      <div className="mr-[12rem] flex flex-col">
        <label>Login Password</label>
        <span>Choose a display picture for your account</span>
      </div>
      <a
        onClick={(e) => {
          e.preventDefault();
          popUpFunctions.initChangePassword();
          // console.log("cshout show popout....", popUpFunctions.initChangePassword());
        }}
        className="kef-link"
      >
        Change Password
      </a>
    </div>
  );
};

export default Security;
