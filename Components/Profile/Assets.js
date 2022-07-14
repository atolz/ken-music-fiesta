import { Dialog } from "@mui/material";
import React, { useState } from "react";
import AllAccessPass from "../PopUps/AllAccessPass";

const Assets = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeModal, setActiveModal] = useState();

  return (
    <div>
      <Dialog
        open={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        {activeModal == "ViewTicket" && (
          <AllAccessPass
            onClose={() => {
              setShowModal(false);
            }}
          ></AllAccessPass>
        )}
      </Dialog>
      <div className="flex items-center">
        <img src="/badge.jpg"></img>
        <div className=" flex flex-col ml-[2.5rem] self-start">
          <label>
            You have earned the Kennis<br></br> all access pass
          </label>
          <span>Download this ticket for easy verification</span>
        </div>

        <div className="flex items-center ml-auto">
          <a
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
              setActiveModal("ViewTicket");
            }}
            className="kef-link !text-[1.3rem]"
          >
            View Ticket
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
              setActiveModal("ViewTicket");
            }}
            className="kef-link !text-[1.3rem] ml-[1.6rem]"
          >
            Download Ticket
          </a>
        </div>
      </div>
    </div>
  );
};

export default Assets;
