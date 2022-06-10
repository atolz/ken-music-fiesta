import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { popUpContext } from "../../Context/PopUps";
import useShowAlert from "../../hooks/useShowAlert";

const ProgressiveToken = () => {
  const popUpFunctions = useContext(popUpContext);
  const toggleAlertBar = useShowAlert();
  return (
    <section
      //   style={{ backgroundSize: "100%" }}
      className="px-[2rem] overflow-hidden relative bg-[#FFF6E4] p-[6.6rem] bg-cover bg-center bg-[url(/performing.jpg)] bg-no-repeat w-full h-[70vh] mobile:h-[70vh] md:!h-[79vh] rounded-[2rem] grid place-items-end "
    >
      <ReactPlayer
        className=" absolute top-0 left-0 w-full h-full"
        config={{
          youtube: {
            playerVars: { showinfo: 1, start: 658, modestbranding: 1 },
            modestbranding: 1,
            // controls: 0,
            // start: 30000,
            // playsinline: 1,
          },
        }}
        pip={true}
        stopOnUnmount={false}
        width={"100%"}
        height={"100%"}
        light={"/performing.jpg"}
        controls={true}
        // url="https://www.youtube.com/watch?v=PfpEefKiG2I"
        url="https://www.youtube.com/watch?v=oKKKDfkgBho"
        // url={["https://www.youtube.com/watch?v=PfpEefKiG2I", "https://www.youtube.com/watch?v=oKKKDfkgBho"]}
        onError={() => {
          console.log("An error occured trying to play video");
          toggleAlertBar("An error occured playing the livestream. Pls check your internet or try again later!", "error", true, 10000);
        }}
      />

      {/* <ReactPlayer controls={true} url="https://www.youtube.com/watch?v=xTI5BW_jZXY" /> */}
      <div className=" py-[1.8rem] px-[3.8rem] rounded-[2rem] bg-white flex flex-wrap gap-[4rem] justify-between mx-auto relative items-center">
        <p className=" font-bold text-[1.8rem] leading-[3.5rem] max-w-[34.9rem]">
          Participate in our quick raffle draw and win <span className="text-[#FCAC0D]">amazing prices!</span>
        </p>
        <button
          onClick={() => {
            popUpFunctions.initBuyToken();
          }}
          className="btn btn--outlined !px-[3.2rem]"
        >
          Buy Token
        </button>
      </div>
    </section>
  );
};

export default ProgressiveToken;
