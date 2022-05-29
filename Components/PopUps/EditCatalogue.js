import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useRef, useState } from "react";
import PopupLayout from "../Layout/Popup";
import Upload from "../Upload";

const EditCatalogue = ({ onCheckOut, onCancel }) => {
  const [userValid, setUserValid] = useState(true);
  const recordLabelRef = useRef();
  const yearRef = useRef();
  const albumTitleRef = useRef();
  const [user, setUser] = useState({
    recordLabel: "",
    year: "",
    albumTitle: "",
    isArtist: true,
  });
  const [selectedValue, setSelectedValue] = useState("Music Artist");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);

    console.log("selected value is", event.target.value);
  };

  return (
    <div>
      <PopupLayout
        cancelAction={onCancel}
        action={() => {
          onCheckOut(checkAmount, vendor);
        }}
        actionText={"Continue"}
      >
        <div className="popup-box">
          <form className="popup-form">
            <h3>Edit catalogue</h3>
            <p className="mb-[4.4rem]">Edit your contents and get it published on Kennis Bites</p>
            {/* {error && <p className=" !text-red-500">*{error}</p>} */}
            <div className="grid gap-5 gap-y-[2.4rem]">
              <div className="form-group">
                <label>Are you a music artist or Music producer?</label>
                <FormControl>
                  <RadioGroup row aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" value={selectedValue} onChange={handleChange}>
                    <FormControlLabel
                      value="Music Artist"
                      control={<Radio sx={{ "& span .MuiSvgIcon-root": { fontSize: "25px !important" } }} className="ml-[1rem] !text-white" />}
                      label={<p className="ml-[1.6rem]">Music Artist</p>}
                    />
                    <FormControlLabel
                      value="Music Producer"
                      control={<Radio sx={{ "& span .MuiSvgIcon-root": { fontSize: "25px !important" } }} className="ml-[2.8rem] !text-white" />}
                      label={<p className="ml-[1.6rem]">Music Producer</p>}
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
                    setUser({ ...user, albumTitle: e.target.value });
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
                    setUser({ ...user, year: e.target.value });
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
                    setUser({ ...user, recordLabel: e.target.value });
                  }}
                  required
                  placeholder="Enter Label Name"
                />
                {!userValid && <p className=" !text-[1.2rem] !font-normal !text-red-500">*Username is taken</p>}
              </div>

              {/* Upload Song/Album Cover */}
              <div className="form-group">
                <label>Upload Song/Album Cover</label>
                <Upload type={"image"} htmlFor={"cover-image"} caption={"Upload Image (Max. Size 10mb)"}></Upload>
              </div>
              {/* Upload Song/Album Cover */}
              <div className="form-group">
                <label>Upload Song/Album Track(s)</label>
                <Upload type={"audio"} htmlFor={"tracks"} caption={"Upload Single or Multiple Audio File"}></Upload>
              </div>
            </div>
          </form>
        </div>
      </PopupLayout>
    </div>
  );
};

export default EditCatalogue;
