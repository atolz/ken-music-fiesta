import React, { useEffect, useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const AppConfetti = ({ show, setShow, recycle, setRecycle }) => {
  const { width, height } = useWindowSize();
  const [cW, setCW] = useState(width);
  const [cH, setCH] = useState(height);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {show && (
        <div className="fixed w-screen h-screen z-[10001]">
          {isClient && (
            <Confetti
              onConfettiComplete={() => {
                console.log("Confeti finish falling");
                setShow(false);
              }}
              tweenDuration={10}
              recycle={recycle}
              numberOfPieces={350}
              width={width}
              height={height}
            />
          )}
        </div>
      )}
    </>
  );
};

export default AppConfetti;
