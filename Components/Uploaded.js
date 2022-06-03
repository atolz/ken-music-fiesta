import axios from "axios";
import React, { useState, useRef, useContext } from "react";
import { baseInstanceAPI } from "../axios";
import { DataContext } from "../Context/fetchData";
import useLoading from "../hooks/useLoading";
import useLocalStorage from "../hooks/useLocalStorage";
import useShowAlert from "../hooks/useShowAlert";
// import { toggleLoading } from "../store/loading";

const Uploaded = ({ type, caption, uploaded, catId }) => {
  const [playingIndex, setPlayingIndex] = useState(0);
  const [inProgressIndex, setInProgressIndex] = useState();
  const [uploading, setUploading] = useState(false);
  const audioRef = useRef(null);
  const imgRef = useRef(null);
  const [files, setFiles] = useState(uploaded);
  const [playing, setPlaying] = useState(false);
  const { getLocalStorage, isLoggedIn } = useLocalStorage();
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();
  const AppData = useContext(DataContext);
  const fetchArtisteUserCatalogues = AppData.fetchArtisteUserCatalogues;

  const onSelectFles = (e) => {
    console.log("files are ", e.target.files[0]);
    setUploadPercentage(0);
    setFiles([...e.target.files]);

    if (type == "image") {
      setFiles([e.target.files[0]]);
      const url = URL.createObjectURL(e.target.files[0]);
      console.log("Type is file", url);
      imgRef.current.src = url;
    }

    e.target.value = null;
  };

  const onPlay = (url, i) => {
    setPlaying(true);
    console.log("src is", url);
    audioRef.current.src = url;
    audioRef.current.play();
    setPlayingIndex(i);
  };
  const pause = () => {
    setPlaying(false);
    audioRef.current.pause();
  };

  const removeTrack = async (i, fileUrl, catalogue_id, fileId) => {
    audioRef.current.src = null;
    console.log("uuid and cat id is", fileUrl, catalogue_id);
    console.log("track info", { fileUrl: fileUrl });
    toggleLoad();
    try {
      const resp = await baseInstanceAPI.delete(`/artist-catalogue/${catalogue_id}/song-delete`, {
        data: { fileUrl: fileUrl, fileUUID: fileId },
        headers: {
          Authorization: `Bearer ${getLocalStorage("token")}`,
        },
      });
      console.log("File deleted successfulllY!!!", resp.data);
      const newFiles = files.filter((el, index) => {
        return index != i;
      });
      setFiles(newFiles);
      toggleLoad();
      toggleAlertBar("Track deleted successfully!!", "success", true, 6000);
      fetchArtisteUserCatalogues();
    } catch (error) {
      toggleLoad();
      toggleAlertBar("Error deleting track!!", "error", true, 6000);

      if (error.response) {
        console.log("An error has occured while trying to delete", error.response.data);
      } else {
        console.log(error);
      }
    }
  };
  return (
    <>
      {/* Uploaded Tracks */}
      {type == "audio" && uploaded && uploaded[0] && (
        <div>
          {files[0] && <p className="text-white font-medium text-[1.4rem] !mb-[1.6rem] mt-[4.7rem]">Uploaded Tracks</p>}
          {files.map((el, i) => {
            return (
              <div key={i} className="flex items-center px-[2.9rem] py-[1.5rem] rounded-[2rem] border-[#606060] border mb-[1.6rem] relative overflow-hidden">
                {(function () {
                  if (!playing || (playing && playingIndex !== i)) {
                    return (
                      <i
                        onClick={() => {
                          onPlay(el.fileUrl, i);
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
                    removeTrack(i, el.fileUrl, catId, el.uuid);
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

export default Uploaded;
