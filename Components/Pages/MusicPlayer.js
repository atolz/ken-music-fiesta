import React, { useState, useRef } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [playingIndex, setPlayingIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [songs] = useState([
    { name: "On the low", src: "Burna.mp3", album: "Kalakuta Republic" },
    { name: "Power rangers", src: "Teni.mp3", album: "Joeboy Republic" },
    { name: "Don't call me back", src: "Joeboy.mp3", album: "Joeboy Republic" },
    { name: "Rise of the sunset", src: "Lauv.mp3", album: "Kalakuta Republic" },
  ]);

  const togglePlay = (i) => {
    console.log("playing song is", songs[i].src);
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.src = songs[i].src;
      audioRef.current.play();
      setPlaying(true);
    }
  };

  const play = (i) => {
    setPlayingIndex(i);
    setPlaying(true);
    if (!audioRef.current.src) {
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
    if (playingIndex == songs.length - 1) {
    } else {
      setPlayingIndex((val) => ++val);
      audioRef.current.src = `/${songs[++playingIndex].src}`;
      audioRef.current.play();
    }
  };
  const onPrev = (i) => {
    if (playingIndex == 0) {
    } else {
      setPlayingIndex((val) => --val);
      audioRef.current.src = `/${songs[--playingIndex].src}`;
      audioRef.current.play();
    }
  };
  return (
    <>
      <h1 className="mb-[1.6rem] text-[#FCAC0D] font-bold text-[2.5rem]">Stream Artist Music</h1>
      <div className="w-[100%] overflow-x-scroll scroll_hide max-w-[79.3rem]">
        <table className=" w-full border-gray-lighter border-collapse  min-w-[7.3rem]">
          <thead className="text-bl text-black-light whitespace-nowrap bg-gray-lightest-2 caption_heavy h-[48px] font-medium">
            <tr>
              <th className=" text-[#838383] border-gray-lighter font-medium text-left pt-[10px] px-[16px] ">
                <span className=" align-text-bottom mt-auto">#</span>
              </th>
              <th className=" text-[#838383] border-gray-lighter font-medium text-left pt-[10px] px-[16px] ">
                <span className=" align-text-bottom mt-auto">Title</span>
              </th>
              <th className=" text-[#838383] border-gray-lighter font-medium text-left pt-[10px] px-[16px]">
                <span className=" align-text-bottom mt-auto">Artist</span>
              </th>
              <th className=" text-[#838383] border-gray-lighter font-medium text-right pt-[10px] px-[16px]">
                <span className=" align-text-bottom mt-auto">Time</span>
              </th>
              <th className=" text-[#838383] border-gray-lighter font-medium text-right pt-[10px] px-[16px]">
                <span className=" align-text-bottom mt-auto">Album</span>
              </th>
              <th className=" text-[#838383] border-gray-lighter font-medium text-right pt-[10px] px-[16px]"></th>
            </tr>
          </thead>
          <tbody className="caption_light text-black-default whitespace-nowrap h-[48px]">
            {songs.map((el, i) => {
              return (
                <tr key={i} className=" hover:bg-[#FCAC0D] rounded-lg cursor-pointer">
                  <td className="text-white border-gray-lighter p-[16px] text-left align-text-bottom text-[1.2rem] font-medium">{i + 1}</td>
                  <td className="text-white border-gray-lighter p-[16px] text-left align-text-bottom text-[1.2rem] font-medium">
                    <div className="flex items-center">
                      {playingIndex == i && (
                        <svg width="22" height="20" viewBox="0 0 22 20" fill="red" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 5H6V15H4V5ZM0 8H2V12H0V8ZM8 0H10V18H8V0ZM12 2H14V20H12V2ZM16 5H18V15H16V5ZM20 8H22V12H20V8Z" fill="current-color" />
                        </svg>
                      )}
                      <span className=" ml-4">{el.name}</span>
                    </div>
                  </td>
                  <td className="text-white border-gray-lighter p-[16px] text-left align-text-bottom text-[1.2rem] font-medium">Artist 1</td>
                  <td className="text-white border-gray-lighter p-[16px] text-right align-text-bottom text-[1.2rem] font-medium">1:30</td>
                  <td className="text-white border-gray-lighter p-[16px] text-right align-text-bottom text-[1.2rem] font-medium rounded-lg">{el.album}</td>
                  <td className="text-white border-gray-lighter p-[16px] text-right align-text-bottom text-[1.2rem] font-medium rounded-lg">
                    <div className="flex items-center gap-[1.4rem]">
                      <img
                        onClick={() => {
                          onPrev(i);
                        }}
                        src="/prev.png"
                      ></img>
                      {/* Pause */}
                      <img
                        onClick={() => {
                          pause(i);
                        }}
                        src="/pause.png"
                      ></img>
                      {/* Play */}
                      <img
                        onClick={() => {
                          play(i);
                        }}
                        src="/play.svg"
                      ></img>
                      <img
                        onClick={() => {
                          onNext(i);
                        }}
                        className=" rotate-180"
                        src="/prev.png"
                      ></img>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <audio ref={audioRef}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
    </>
  );
};

export default MusicPlayer;
