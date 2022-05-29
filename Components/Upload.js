import axios from "axios";
import React, { useState, useRef } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useShowAlert from "../hooks/useShowAlert";

const Upload = ({ type, caption, htmlFor, onChange, onUploaded }) => {
  const [playingIndex, setPlayingIndex] = useState(0);
  const [inProgressIndex, setInProgressIndex] = useState();
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [uploading, setUploading] = useState(false);
  const audioRef = useRef(null);
  const imgRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [playing, setPlaying] = useState(false);
  const { getLocalStorage, isLoggedIn } = useLocalStorage();
  const toggleAlertBar = useShowAlert();

  const onSelectFles = (e) => {
    console.log("files are ", e.target.files);
    if (files) {
      setFiles([...e.target.files, ...files]);
    } else {
      setFiles([...e.target.files]);
    }
    if (type == "image") {
      setFiles([e.target.files[0]]);
      const url = URL.createObjectURL(e.target.files[0]);
      console.log("Type is file", url);
      imgRef.current.src = url;
    }
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

  const onUpload = async (files) => {
    console.log("in onUPload");
    const filesPromises = files.map((file, i) => {
      const formData = new FormData();
      formData.append("music", file);

      return axios.post("https://api.kennismusic.app/artist-catalogue/upload-music", formData, {
        // const res = await axios.post("http://a805df5bc8dc349ea81228a62f357233-654010950.eu-west-3.elb.amazonaws.com/v1/file/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getLocalStorage("token")}`,
        },
        onUploadProgress: (progressEvent) => {
          // console.log(progressEvent);
          console.log("uploadPercentage", uploadPercentage);
          console.log("Progress is", i, parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
          setInProgressIndex(i);
          // setUploadPercentage((val) => ({ ...val, i: parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)) }));
          setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
        },
      });
    });

    console.log("Files promisise are ", filesPromises);
    setUploading(true);
    try {
      const fileResp = (await Promise.all(filesPromises)).map((resp) => {
        return resp.data;
      });
      setUploading(false);
      toggleAlertBar("Uploaded Successfully!", "success", true);
      console.log("Uploaded Files are:", fileResp);
      if (type == "image") {
        onUploaded(fileResp[0].fileUrl);
      } else {
        onUploaded(fileResp);
      }
    } catch (error) {
      toggleAlertBar("Problem uploading. Pls check your internet or try again later!", "error", true);
      setUploading(false);
      if (error.response) {
        console.log("there was an error upload the file", error.response);
      } else {
        console.log("AN unknown error has occured", error);
      }
    }
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

      {type == "image" && (
        <div>
          <div className="relative">
            <div className="  absolute bottom-0 left-0 w-full h-[.5rem] bg-green-400 " style={{ width: `${uploadPercentage}%` }}></div>
            <img className="w-full h-[30rem] object-cover" ref={imgRef}></img>
          </div>
          {files[0] && (
            <>
              <span>{files[0]?.name}</span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onUpload([files[0]]);
                }}
                className="btn !w-full"
              >
                {uploading ? "Uploading..." : "Upload"}
              </button>
            </>
          )}
        </div>
      )}

      {/* Audio Display */}
      {type == "audio" && (
        <div>
          {files[0] && <p className="text-white font-medium text-[1.4rem] mb-[1.6rem] mt-[4.7rem]">Uploaded Tracks</p>}
          {files.map((el, i) => {
            return (
              <div key={i} className="flex items-center px-[2.9rem] py-[1.5rem] rounded-[2rem] border-[#606060] border mb-[1.6rem] relative overflow-hidden">
                <div className="  absolute bottom-0 left-0 w-full h-[.5rem] bg-green-400 " style={{ width: `${uploadPercentage}%` }}></div>
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
                <span className="ml-[2.6rem] font-medium text-[1.4rem] text-slate-800 max-w-[10rem] mobile:max-w-[20rem] sidebar:max-w-[30rem] whitespace-nowrap overflow-hidden text-ellipsis shrink block">
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
          {files[0] && (
            <button
              disabled={uploading}
              onClick={(e) => {
                e.preventDefault();
                console.log("should upload");
                onUpload(files);
              }}
              className="btn !w-full"
            >
              {uploading ? "Uploading..." : "Upload"}
            </button>
          )}
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
