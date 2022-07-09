import React, { useState, useRef, useEffect } from "react";

const MusicPlayerV2 = ({ title, songList, albumTitle, theme = "dark" }) => {
  const audioRef = useRef(null);
  const [playingIndex, setPlayingIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [songs, setSongs] = useState(songList);
  // const [songs] = useState([
  //   { name: "On the low", src: "https://cdn.kennismusic.app/38a89545-40a8-4f69-bdde-34de37cf4a9d.mp3", album: "Kalakuta Republic" },
  //   { name: "Power rangers", src: "/Teni.mp3", album: "Joeboy Republic" },
  //   { name: "Don't call me back", src: "/Joeboy.mp3", album: "Joeboy Republic" },
  //   { name: "Rise of the sunset", src: "/Lauv.mp3", album: "Kalakuta Republic" },
  // ]);

  useEffect(() => {
    console.log("In Music player...:", songList);
    setSongs(songList);
  }, [songList]);

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
      audioRef.current.src = `${songs[i].fileUrl}`;
    }
    console.log("playing inde xand  i is", playingIndex, i);
    if (audioRef.current.src && playingIndex !== i) {
      console.log("should start new");
      audioRef.current.src = `${songs[i].fileUrl}`;
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
      audioRef.current.src = `${songs[++playingIndex].fileUrl}`;
      audioRef.current.play();
    }
  };
  const onPrev = (i) => {
    if (playingIndex == 0) {
    } else {
      setPlayingIndex((val) => --val);
      audioRef.current.src = `${songs[--playingIndex].fileUrl}`;
      audioRef.current.play();
    }
  };
  return (
    <>
      {title && <h1 className="mb-[1.6rem] text-primary font-bold text-[2.5rem]">Stream Artiste Music</h1>}
      <div className="w-[100%] overflow-x-scroll scroll_hide max-w-[79.3rem]">
        <div className=" w-full border-gray-lighter border-collapse  min-w-[7.3rem]">
          {/* Header */}
          <div className=" text-[#838383] whitespace-nowrap  grid grid-cols-[1fr_16.2rem_2fr_1fr_3fr_16.2rem] mb-[1.6rem]">
            <span className=" align-text-bottom  border-gray-lighter font-medium text-left pt-[10px] px-[16px]">#</span>

            <span className=" align-text-bottom border-gray-lighter font-medium text-left pt-[10px] px-[16px]">Title</span>

            <span className=" align-text-bottom border-gray-lighter font-medium text-left pt-[10px] px-[16px]">Artist</span>

            <span className=" align-text-bottom border-gray-lighter font-medium text-left pt-[10px] px-[16px] ">Time</span>

            <span className=" align-text-bottom border-gray-lighter font-medium text-left pt-[10px] px-[16px] ">Album</span>
            <span className=" align-text-bottom border-gray-lighter font-medium text-left pt-[10px] px-[16px]"></span>
          </div>
          {/* Body */}

          {songs?.map((el, i) => {
            return (
              <div
                style={{ color: `${theme == "light" ? "white" : "black"}` }}
                key={i}
                className=" hover:bg-primary rounded-full cursor-pointer grid grid-cols-[1fr_16.2rem_2fr_1fr_3fr_16.2rem] place-items-start items-center justify-start "
              >
                <span className=" border-gray-lighter p-[16px] !py-[14px] text-left align-text-bottom text-[1.2rem] font-medium">{i + 1}</span>
                <span className=" border-gray-lighter p-[16px] !py-[14px] text-left align-text-bottom text-[1.2rem] font-medium whitespace-nowrap">
                  <div className="flex items-center">
                    {playingIndex == i && (
                      <svg width="22" height="20" viewBox="0 0 22 20" fill="red" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 5H6V15H4V5ZM0 8H2V12H0V8ZM8 0H10V18H8V0ZM12 2H14V20H12V2ZM16 5H18V15H16V5ZM20 8H22V12H20V8Z" fill="current-color" />
                      </svg>
                    )}
                    <span className=" ml-4 text-ellipsis overflow-hidden max-w-[12rem]">{el.name}</span>
                  </div>
                </span>
                <span className=" border-gray-lighter p-[16px] !py-[14px] text-left align-text-bottom text-[1.2rem] font-medium whitespace-nowrap">Artist 1</span>
                <span className=" border-gray-lighter p-[16px] !py-[14px] text-right align-text-bottom text-[1.2rem] font-medium">1:30</span>
                <span className=" border-gray-lighter p-[16px] !py-[14px]  align-text-bottom text-[1.2rem] font-medium whitespace-nowrap">{albumTitle || el.albumTitle}</span>
                <span className=" border-gray-lighter p-[16px] !py-[14px] text-right align-text-bottom text-[1.2rem] font-medium ">
                  <div className="flex items-center gap-[1.4rem] place-self-start">
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
                </span>
              </div>
            );
          })}
        </div>
        <audio ref={audioRef}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
    </>
  );
};

export default MusicPlayerV2;
