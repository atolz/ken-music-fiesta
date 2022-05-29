import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { baseInstanceAPI } from "../../axios";
import { DataContext } from "../../Context/fetchData";
import useLocalStorage from "../../hooks/useLocalStorage";
import useShowAlert from "../../hooks/useShowAlert";
import { setActivePage as setGlobalPage } from "../../store/pages";
import useLoading from "../../hooks/useLoading";
import Upload from "../../Components/Upload";
import AuthLayout from "../../Components/Layout/AuthLayout";

const CreateAccount = () => {
  const [userValid, setUserValid] = useState(true);
  const recordLabelRef = useRef();
  const AppData = useContext(DataContext);
  const fetchArtisteUserCatalogues = AppData.fetchArtisteUserCatalogues;
  const yearRef = useRef();
  const albumTitleRef = useRef();
  const toggleAlertBar = useShowAlert();
  const { getLocalStorage, isLoggedIn } = useLocalStorage();
  const { toggleLoad } = useLoading();
  const [catalogue, setCatalogue] = useState({
    recordLabel: "",
    yearOfRelease: "",
    albumTitle: "",
    isMusicArtist: true,
    coverImage: "",
    songTracks: [],
  });
  const router = useRouter();
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

  const onCreateCatalogue = async () => {
    if (!catalogue.albumTitle || !catalogue.recordLabel || !catalogue.coverImage || !catalogue.songTracks || !catalogue.yearOfRelease) {
      return toggleAlertBar("Please fill out all fields, or Upload your files!", "error", true, 6000);
    }
    toggleLoad();
    try {
      const resp = await baseInstanceAPI.post("/artist-catalogue/create", catalogue, {
        headers: {
          Authorization: `Bearer ${getLocalStorage("token")}`,
        },
      });
      console.log("Response catalogue is", resp.data);
      fetchArtisteUserCatalogues();
      toggleAlertBar("Catalogue created successfully!!", "success", true, 6000);
      toggleLoad();
      router.replace("/catalogues/dashboard");
    } catch (error) {
      if (error.response) {
        console.log("An error has occured", error.response.data.message);
      } else {
        console.log("An error has occured", error);
      }
      toggleAlertBar("Error creating catalogue. Try again later!", "error", true, 6000);
      toggleLoad();
    }
  };

  useEffect(() => {
    router.prefetch("/catalogues/dashboard");
  }, []);
  return (
    <div className="auth-container !mb-[5rem]">
      <form
        autoComplete="off"
        className="auth-form"
        onSubmit={(e) => {
          e.preventDefault();
          onCreateCatalogue();
        }}
      >
        <h3>Create first catalogue</h3>
        <p className="mb-[4.4rem]">Upload your first contents and get it published on Kennis Bites</p>
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
              placeholder="Enter Album Name"
            />
          </div>

          {/* Year Of Release */}
          <div className="form-group">
            <label>Year Of Release</label>
            <input
              max="2022-12-31"
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
            <Upload onUploaded={onUploadTracks} type={"audio"} htmlFor={"tracks"} caption={"Upload Single or Multiple Audio File"}></Upload>
          </div>

          <button className="btn !w-full">Create</button>
        </div>
      </form>
    </div>
  );
};

CreateAccount.Layout = AuthLayout;
export default CreateAccount;
