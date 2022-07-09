import React from "react";

const Popup = ({ children, actionText, cancelAction = () => {}, action = () => {}, footer = true }) => {
  return (
    <div className="bg-white rounded-[2rem] scroll_hide pop-up-animation">
      {/* Body */}
      <div className="border-b py-[3.5rem] sidebar:py-[3.5rem] sidebar:pt-[4.5rem] pb-[3.3rem] px-[3.5rem] sidebar:px-[4.4rem]">{children}</div>

      {/* Footer */}
      {footer && (
        <div className="py-[2.4rem] sidbar:py-[2.4rem] px-[3.5rem] sidebar:px-[5.4rem] flex items-center justify-end">
          <button
            onClick={() => {
              cancelAction();
            }}
            className=" border-2 font-bold text-[1.6rem] grid place-items-center rounded-[10px] h-[6rem] ml-[auto] !px-[2.8rem] sidebar:!px-[3.8rem] !text-[#4C4D50] !border-[#4C4D50]"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              action();
            }}
            className="btn ml-[2.4rem] !px-[2.8rem] sidebar:!px-[3.8rem] !py-[2rem]"
          >
            {actionText}
          </button>
        </div>
      )}
    </div>
  );
};

export default Popup;
