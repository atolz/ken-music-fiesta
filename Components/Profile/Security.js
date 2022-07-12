import { Dialog } from "@mui/material";
import React, { useContext, useState } from "react";
import { popUpContext } from "../../Context/PopUps";
import TransactionPin from "../PopUps/TransactionPin";

const Security = () => {
  const popUpFunctions = useContext(popUpContext);
  const [activeModal, setActiveModal] = useState();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Dialog
        open={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        {activeModal == "TransactionPin" && <TransactionPin></TransactionPin>}
      </Dialog>
      <div className="grid grid-cols-[2fr,1fr] items-center mb-[3.2rem]">
        <div className=" flex flex-col">
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

      {/* Change Pin */}
      <div className="grid grid-cols-[2fr,1fr] items-center">
        <div className=" flex flex-col">
          <label>Change Pin</label>
          <span>Setup your transaction pin to ensure secure payments</span>
        </div>
        <a
          onClick={(e) => {
            e.preventDefault();
            setShowModal(true);
            setActiveModal("TransactionPin");
          }}
          className="kef-link"
        >
          Change Pin
        </a>
      </div>
    </>
  );
};

export default Security;
