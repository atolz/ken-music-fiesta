import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useContext, useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { baseInstanceAPI } from "../../axios";
import { DataContext } from "../../Context/fetchData";
import useLocalStorage from "../../hooks/useLocalStorage";
import useShowAlert from "../../hooks/useShowAlert";
import PopupLayout from "../Layout/Popup";
import Upload from "../Upload";
import { setActivePage as setGlobalPage } from "../../store/pages";
import useLoading from "../../hooks/useLoading";
// import { setActivePage as setGlobalPage } from "../../store/pages";

const EditCatalogue = ({ toggleModal, onCancel, catalogueObj }) => {
  const [userValid, setUserValid] = useState(true);
  const recordLabelRef = useRef();
  const AppData = useContext(DataContext);
  const fetchArtisteUserCatalogues = AppData.fetchArtisteUserCatalogues;
  const yearRef = useRef();
  const albumTitleRef = useRef();
  const toggleAlertBar = useShowAlert();
  const dispatch = useDispatch();
  const { getLocalStorage, isLoggedIn } = useLocalStorage();
  const { toggleLoad } = useLoading();
  const [catalogue, setCatalogue] = useState({
    recordLabel: "Unknown",
    yearOfRelease: catalogueObj.yearOfRelease,
    albumTitle: catalogueObj.albumTitle,
    // isMusicArtist: catalogueObj.isMusicArtist,
    isMusicArtist: true,
    coverImage: catalogueObj.coverImage,
    songTracks: catalogueObj.songTracks,
    // songTracks: [
    //   {
    //     name: "string",
    //     fileUrl: "string",
    //   },
    // ],
  });
  const [selectedValue, setSelectedValue] = useState("Music Artist");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    if (event.target.value == "Music Producer") {
      setCatalogue((val) => ({ ...val, isMusicArtist: false }));
    } else {
      setCatalogue((val) => ({ ...val, isMusicArtist: true }));
    }

    console.log("selected value is", event.target.value);
  };

  const onUploadCoverImage = (fileUrl) => {
    setCatalogue((val) => ({ ...val, coverImage: fileUrl }));
  };

  const onUploadTracks = (filesObj) => {
    setCatalogue((val) => ({ ...val, songTracks: filesObj }));
  };

  const setActivePage = (page) => {
    dispatch(setGlobalPage(page));
  };

  const onEditCatalogue = async () => {
    if (!catalogue.albumTitle || !catalogue.recordLabel || !catalogue.coverImage || !catalogue.songTracks[0] || !catalogue.yearOfRelease) {
      return toggleAlertBar("Please fill out all fields, or Upload your files!", "error", true, 6000);
    }
    console.log("catalogue is", catalogue);
    toggleLoad();
    try {
      const resp = await baseInstanceAPI.post(`/artist-catalogue/${catalogueObj.uuid}/edit`, catalogue, {
        headers: {
          Authorization: `Bearer ${getLocalStorage("token")}`,
        },
      });
      console.log("Response catalogue is", resp.data);
      fetchArtisteUserCatalogues();
      toggleAlertBar("Catalogue updated successfully!!", "success", true, 6000);
      toggleModal();
      setActivePage("Catalogue");
      toggleLoad();
    } catch (error) {
      if (error.response) {
        console.log("An error has occured", error.response.data);
      }
      console.log("An error has occured", error);
      toggleAlertBar("Error updating catalogue. Try again later!", "error", true, 6000);
      toggleLoad();
    }
  };

  useEffect(() => {
    console.log("uuid is catalgoeu is", catalogueObj);
  }, [catalogueObj]);

  return (
    <div>
      <PopupLayout
        cancelAction={onCancel}
        action={() => {
          console.log("Catalgoue Details are:", catalogue);
          onEditCatalogue();
        }}
        actionText={"Update"}
      >
        <div className="popup-box">
          <form className="popup-form">
            <h3>Edit catalogue</h3>
            <p className="mb-[4.4rem]">Upload your contents and get it published on Kennis Bites</p>
            {/* {error && <p className=" !text-red-500">*{error}</p>} */}
            <div className="grid gap-5 gap-y-[2.4rem]">
              <div className="form-group">
                <label>Are you a music artist or Music producer?</label>
                <FormControl>
                  <RadioGroup row aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" value={selectedValue} onChange={handleChange}>
                    <FormControlLabel
                      value="Music Artist"
                      control={<Radio sx={{ "& span .MuiSvgIcon-root": { fontSize: "25px !important" } }} className="ml-[1rem] !text-white" />}
                      label={<p className="ml-[.6rem] !mb-0">Music Artist</p>}
                    />
                    <FormControlLabel
                      value="Music Producer"
                      control={<Radio sx={{ "& span .MuiSvgIcon-root": { fontSize: "25px !important" } }} className="ml-[.8rem] !text-white" />}
                      label={<p className="ml-[.6rem] !mb-0">Music Producer</p>}
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              {/* Album Title */}
              <div className="form-group">
                <label>Album Title</label>
                <input
                  className={`w-full ${!userValid ? " !border-red-500 !border-[2px]" : ""}`}
                  name="username"
                  ref={albumTitleRef}
                  onChange={(e) => {
                    setCatalogue({ ...catalogue, albumTitle: e.target.value });
                  }}
                  required
                  value={catalogue.albumTitle}
                  placeholder="Enter Album Name"
                />
              </div>

              {/* Year Of Release */}
              <div className="form-group">
                <label>Year Of Release</label>
                <input
                  max="2022-12-31"
                  value={new Date(catalogue.yearOfRelease).toISOString().substring(0, 10)}
                  onChange={(e) => {
                    console.log("date is ", e.target.value);
                    setCatalogue({ ...catalogue, yearOfRelease: new Date(e.target.value).toISOString() });
                  }}
                  ref={yearRef}
                  className={`w-full !pr-[2rem] date`}
                  type="date"
                  required
                />
              </div>

              {/* Record Label */}
              <div className="form-group">
                <label>Record Label</label>
                <input
                  className={`w-full ${!userValid ? " !border-red-500 !border-[2px]" : ""}`}
                  name="username"
                  ref={recordLabelRef}
                  value={catalogue.recordLabel}
                  onChange={(e) => {
                    setCatalogue({ ...catalogue, recordLabel: e.target.value });
                  }}
                  required
                  placeholder="Enter Label Name"
                />
                {!userValid && <p className=" !text-[1.2rem] !font-normal !text-red-500">*Username is taken</p>}
              </div>

              {/* Upload Song/Album Cover */}
              <div className="form-group">
                <label>Upload Song/Album Cover</label>
                <Upload onUploaded={onUploadCoverImage} type={"image"} htmlFor={"cover-image"} caption={"Upload Image (Max. Size 10mb)"}></Upload>
              </div>
              {/* Upload Song/Album Cover */}
              <div className="form-group">
                <label>Upload Song/Album Track(s)</label>
                <Upload
                  catId={catalogueObj.uuid}
                  uploaded={catalogue.songTracks}
                  onUploaded={onUploadTracks}
                  type={"audio"}
                  htmlFor={"tracks"}
                  caption={"Upload Single or Multiple Audio File"}
                ></Upload>
              </div>
            </div>
          </form>
        </div>
      </PopupLayout>
    </div>
  );
};

export default EditCatalogue;
