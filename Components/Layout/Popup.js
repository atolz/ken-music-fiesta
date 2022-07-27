import React from "react";

const Popup = ({ children, actionText, cancelAction = () => {}, action = () => {}, footer = true, disabled = false }) => {
  return (
    <div className="bg-white rounded-[2rem] scroll_hide pop-up-animation relative">
      <img
        onClick={() => {
          cancelAction();
        }}
        className=" absolute right-[2.5rem] top-[2.5rem] cursor-pointer"
        src="/cancel-filled.png"
      ></img>
      {/* Body */}
      <div className="border-b py-[3.5rem] sidebar:py-[3.5rem] sidebar:pt-[5.5rem] pb-[3.3rem] px-[3.5rem] sidebar:px-[4.4rem]">{children}</div>

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
            title={disabled ? "Action required" : ""}
            disabled={disabled}
            onClick={() => {
              if (disabled) {
                return;
              }
              action();
            }}
            className={`btn ml-[2.4rem] !px-[2.8rem] sidebar:!px-[3.8rem] depress !py-[2rem] ${disabled ? "cursor-not-allowed" : ""}`}
          >
            {actionText}
          </button>
        </div>
      )}
    </div>
  );
};

export default Popup;
