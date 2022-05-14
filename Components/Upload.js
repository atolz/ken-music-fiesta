import React, { useState, useRef } from "react";

const Upload = ({ type, caption, htmlFor, onChange }) => {
  const [playingIndex, setPlayingIndex] = useState(0);
  const audioRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [playing, setPlaying] = useState(false);

  const onSelectFles = (e) => {
    console.log("files are ", e.target.files);
    if (files) {
      return setFiles([...e.target.files, ...files]);
    }
    setFiles([...e.target.files]);
  };

  const onPlay = (file, i) => {
    setPlaying(true);
    const url = URL.createObjectURL(file);
    console.log("src is", url);
    audioRef.current.src = url;
    audioRef.current.play();
    setPlayingIndex(i);
  };
  const pause = () => {
    setPlaying(false);
    audioRef.current.pause();
  };

  const removeFile = (i) => {
    audioRef.current.src = null;
    const newFiles = files.filter((el, index) => {
      return index != i;
    });
    setFiles(newFiles);
  };
  return (
    <>
      <label
        htmlFor={htmlFor}
        className=" min-w-[100px] h-[150px] p-3 text-center rounded-[4px] bg-[#474747] border-black-lighter  border-opacity-10 outline-[1px] bg-black-lightest-1 grid place-items-center"
      >
        <input accept={`${type}/*`} onChange={onSelectFles} id={htmlFor} className="  w-full invisible h-0" type={"file"} multiple={true}></input>

        {/* <span className="icon-Vector text-[32px] mb-1"></span> */}
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 16H18V9H20V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V9H2V16ZM11 6V13H9V6H4L10 0L16 6H11Z"
            fill="currentColor"
          />
        </svg>
        <p className=" text-black-default caption_heavy text-center mt-[8px]">
          <label htmlFor={htmlFor} className="caption_heavy text-primary cursor-pointer block">
            {caption}
          </label>
        </p>
      </label>

      {/* Audio Display */}
      {type == "audio" && (
        <div>
          <p className="text-white font-medium text-[1.4rem] mb-[1.6rem] mt-[4.7rem]">Uploaded Tracks</p>
          {files.map((el, i) => {
            return (
              <div key={i} className="flex items-center px-[2.9rem] py-[1.5rem] rounded-[2rem] border-[#606060] border mb-[1.6rem]">
                {(function () {
                  if (!playing || (playing && playingIndex !== i)) {
                    return (
                      <i
                        onClick={() => {
                          onPlay(el, i);
                        }}
                        className="icon-play cursor-pointer text-[#FCAC0D] text-[2rem] flex-shrink-0"
                      ></i>
                    );
                  }
                })()}
                {playing && playingIndex == i && (
                  <i
                    onClick={() => {
                      pause();
                    }}
                    className="icon-pause cursor-pointer text-[#FCAC0D] text-[2rem] flex-shrink-0"
                  ></i>
                )}
                <span className="ml-[2.6rem] font-medium text-[1.4rem] text-white max-w-[10rem] mobile:max-w-[20rem] sidebar:max-w-[30rem] whitespace-nowrap overflow-hidden text-ellipsis shrink block">
                  {el.name}
                </span>
                <div
                  onClick={() => {
                    removeFile(i);
                  }}
                  className="ml-auto cursor-pointer p-[1rem] rounded-full bg-[#FFE7E7] flex-shrink-0"
                >
                  <img src="/delete.svg"></img>
                </div>
              </div>
            );
          })}
          {/* Audio Element */}
          <audio ref={audioRef}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </div>
      )}
    </>
  );
};

export default Upload;
