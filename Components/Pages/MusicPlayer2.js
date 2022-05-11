import React, { useRef, useState } from "react";
import Image from "next/image";

const MusicPlayer2 = () => {
  const audioRef = useRef(null);
  const [playProgress, setPlayProgress] = useState(0);
  const [playingIndex, setPlayingIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [songs] = useState([
    { name: "On the low", src: "Burna.mp3", album: "Kalakuta Republic", artist: "Burna boy" },
    { name: "Power rangers", src: "Teni.mp3", album: "Joeboy Republic", artist: "Teni" },
    { name: "Rise of the sunset", src: "Lauv.mp3", album: "Kalakuta Republic", artist: "Lauv (with Anne-Marie)" },
    { name: "Don't call me back", src: "Joeboy.mp3", album: "Joeboy Republic", artist: "Joe boy" },
  ]);

  const play = (i) => {
    setPlayingIndex(i);
    setPlaying(true);
    if (!audioRef?.current?.src) {
      audioRef.current.src = `/${songs[i].src}`;
    }
    console.log("playing inde xand  i is", playingIndex, i);
    if (audioRef.current.src && playingIndex !== i) {
      console.log("should start new");
      audioRef.current.src = `/${songs[i].src}`;
    }
    audioRef.current.play();
  };

  const pause = (i) => {
    setPlaying(false);
    audioRef.current.pause();
  };

  const onNext = (i) => {
    setPlaying(true);
    if (playingIndex == songs.length - 1) {
    } else {
      setPlayingIndex((val) => ++val);
      audioRef.current.src = `/${songs[++playingIndex].src}`;
      audioRef.current.play();
    }
  };
  const onPrev = (i) => {
    setPlaying(true);
    if (playingIndex == 0) {
    } else {
      setPlayingIndex((val) => --val);
      audioRef.current.src = `/${songs[--playingIndex].src}`;
      audioRef.current.play();
    }
  };

  const calcWidth = (ref) => {
    let time = (parseInt(ref?.current?.currentTime) * 100) / parseInt(ref?.current?.duration);
    console.log("current time is", time);
    console.log(ref?.current?.duration);
    console.log(ref?.current?.currentTime);
    setPlayProgress(time);
  };
  return (
    <div className="max-w-[79.3rem]">
      <h1 className="mb-[1.6rem] text-[#FCAC0D] font-bold text-[2.5rem]">Stream Artist Music</h1>

      {/* Main  */}
      <main className="">
        {/* Songs List */}
        <section>
          {songs.map((el, i) => {
            return (
              <div key={i} className={`flex items-center py-[1.5rem] hover:bg-[#FCAC0D] cursor-pointer rounded-[2rem] px-[1.9rem] ${playingIndex == i ? "!bg-[#FCAC0D]" : ""}`}>
                {/* Playing icon */}
                <svg width="22" height="20" viewBox="0 0 22 20" fill="black" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 5H6V15H4V5ZM0 8H2V12H0V8ZM8 0H10V18H8V0ZM12 2H14V20H12V2ZM16 5H18V15H16V5ZM20 8H22V12H20V8Z" fill="current-color" />
                </svg>
                {/* Details section */}
                <div className="flex flex-col gap-[.8rem] ml-[1.8rem] text-white font-medium">
                  <p className={`!font-medium text-[1.2rem] ${playingIndex == i ? "!text-black" : "text-white"} whitespace-nowrap`}>{el.name}</p>
                  <div className={` ${playingIndex == i ? "!text-black" : "text-[#797676]"} flex gap-[1.4rem]`}>
                    <span className={` ${playingIndex == i ? "!text-black" : "text-white"} block whitespace-nowrap max-w-[7.5rem] overflow-hidden text-ellipsis`}>{el.artist}</span>
                    <span className={` ${playingIndex == i ? "!text-black" : "text-white"} block whitespace-nowrap max-w-[5.5rem] overflow-hidden text-ellipsis`}>{el.album}</span>
                  </div>
                </div>

                {/* Action Controls */}
                <div className="flex items-center gap-[1.7rem] mr-[2.4rem] ml-auto">
                  <i
                    onClick={() => {
                      onPrev(i);
                    }}
                    className="icon-next cursor-pointer text-black text-[1.4rem] rotate-180"
                  ></i>
                  <i
                    onClick={() => {
                      play(i);
                    }}
                    className="icon-play cursor-pointer text-black text-[1.8rem]"
                  ></i>
                  <i
                    onClick={() => {
                      onNext(i);
                    }}
                    className="icon-next cursor-pointer text-black text-[1.4rem]"
                  ></i>
                </div>
                {/* Time */}
                <p className={`font-medium text-[1.2rem] ml-auto text-white ${playingIndex == i ? "!text-black" : "text-white"}`}>1:30</p>
              </div>
            );
          })}
        </section>

        {/* Action Bar---Dashboard */}
        <section className="min-h-[7.1rem] flex items-center relative mt-[1.2rem] px-[2rem] py-[1.9rem]">
          {/* Progress bar */}
          <div style={{ width: playProgress }} className={`h-[2px] bg-[#FCAC0D]  absolute left-0 top-0 `}>
            <div className=" h-3 w-3 rounded-full bg-[#FCAC0D] absolute right-0 -top-[.3rem]"></div>
          </div>
          {/* Playing icon */}
          {/* <svg width="22" height="20" viewBox="0 0 22 20" fill="#FCAC0D" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 5H6V15H4V5ZM0 8H2V12H0V8ZM8 0H10V18H8V0ZM12 2H14V20H12V2ZM16 5H18V15H16V5ZM20 8H22V12H20V8Z" fill="current-color" />
          </svg> */}
          <i className="icon-playing text-[#FCAC0D] text-[2.4rem]"></i>

          {/* Details section */}
          <div className="flex flex-col flex-wrap  ml-[1.8rem] text-white">
            <p className=" font-medium text-[1.4rem] mb-[.8rem]">{songs[playingIndex].name}</p>
            <div className="">
              <span className="mr-auto">{songs[playingIndex].artist}</span>
              <span className="ml-[1.6rem]">Kalakuta Republic</span>
            </div>
          </div>

          {/* Action BUttons */}
          <div className="flex items-center gap-[1.7rem] ml-auto">
            <i
              onClick={() => {
                onPrev(playingIndex);
              }}
              className="icon-next cursor-pointer text-white text-[1.8rem] rotate-180"
            ></i>
            {!playing && (
              <i
                onClick={() => {
                  play(playingIndex);
                }}
                className="icon-play cursor-pointer text-white text-[2rem]"
              ></i>
            )}
            {playing && (
              <i
                onClick={() => {
                  pause(playingIndex);
                }}
                className="icon-pause cursor-pointer text-white text-[2rem]"
              ></i>
            )}
            <i
              onClick={() => {
                onNext(playingIndex);
              }}
              className="icon-next cursor-pointer text-white text-[1.8rem]"
            ></i>
          </div>
        </section>

        {/* Audio Element */}
        <audio
          onTimeUpdate={() => {
            console.log("time updateing");
            calcWidth(audioRef);
          }}
          ref={audioRef}
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </main>
    </div>
  );
};

export default MusicPlayer2;
