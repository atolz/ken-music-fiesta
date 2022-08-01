import { Avatar } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { baseInstanceAPI } from "../../axios";
import { DataContext } from "../../Context/fetchData";
import useLoading from "../../hooks/useLoading";
import useLocalStorage from "../../hooks/useLocalStorage";
import useShowAlert from "../../hooks/useShowAlert";
import { setUser } from "../../store/user";

const Profile = ({ user }) => {
  const baseURL = process.env.NEXT_PUBLIC_DEVELOPMENT_URL;
  const imageRef = useRef(null);
  const [detailsChanged, setUserDetailsChanged] = useState(false);
  const [uploadImgUrl, setUploadImgUrl] = useState("");
  const dispatch = useDispatch();
  const [imageFile, setImageFile] = useState(null);
  const AppData = useContext(DataContext);
  const { toggleLoad } = useLoading();
  const [detailsChange, setDetailsChange] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    phone: user?.phone,
    username: user?.username,
    avatar: user?.avatar,
  });
  const formEls = [
    // { label: "Username", span: "View your username for your account", name: "username", value: user?.username },
    { label: "First Name", span: "This a name your account will be identified by", name: "firstName", value: user?.firstName },
    { label: "Last Name", span: "This a name your account will be identified by", name: "lastName" },
    { label: "Email Address", span: "Email that is linked to the account", name: "email" },
    { label: "Phone Number", span: "Enter the phone number that is valid", name: "phone" },
  ];
  const [canSubmit, setCanSubmit] = useState(false);
  const toggleAlertBar = useShowAlert();
  const { getLocalStorage } = useLocalStorage();

  const getValue = (name) => {
    return userDetails[name];
  };
  const handleChange = (e, name) => {
    setCanSubmit(true);
    console.log("the value", name, e.target.value);
    if (name == "firstName") {
      setUserDetails((val) => ({ ...val, firstName: e.target.value }));
    }
    if (name == "lastName") {
      setUserDetails((val) => ({ ...val, lastName: e.target.value }));
    }
    if (name == "email") {
      setUserDetails((val) => ({ ...val, email: e.target.value }));
    }
    if (name == "phone") {
      setUserDetails((val) => ({ ...val, phone: e.target.value }));
    }
    console.log(userDetails);
  };

  const onUpdateUserDetails = async () => {
    console.log("Details is", { ...userDetails, username: undefined });
    toggleLoad();
    setCanSubmit(false);
    setUserDetailsChanged(true);
    try {
      const resp = await baseInstanceAPI.post(
        "/profile/update-profile",
        { ...userDetails, username: undefined },
        {
          headers: {
            Authorization: `Bearer ${getLocalStorage("token")}`,
          },
        }
      );
      console.log("response is", resp.data);
      console.log("user details is ", userDetails);
      dispatch(setUser({ ...userDetails }));
      toggleAlertBar("Profile Updated Successfully!", "success", true, 4000);
      setDetailsChange(false);
      toggleLoad();
      // setCanSubmit(false);
    } catch (error) {
      console.log("There was an error, t", error?.response);
      toggleAlertBar("Problem Updating Profile. Please Ensure all Fields are Correct and Try Again!", "error", true, 4000);
      setCanSubmit(true);
      toggleLoad();
    }
  };

  const onFileChange = (e) => {
    setCanSubmit(true);
    console.log("Image ref is ", imageRef.current.firstChild);
    const newImageUrl = URL.createObjectURL(e.target.files[0]);
    setUploadImgUrl(newImageUrl);
    console.log("b4 revode new image rul is", newImageUrl);
    imageRef.current.firstChild.src = newImageUrl;
    // URL.revokeObjectURL(newImageUrl);
    console.log("after revoke url is", newImageUrl);

    setImageFile(e.target.files[0]);
  };
  const updateAvatar = async () => {
    toggleLoad();
    const formData = new FormData();
    formData.append("avatar", imageFile);
    try {
      const resp = await baseInstanceAPI.post("/profile/upload-avatar", formData, {
        headers: {
          Authorization: `Bearer ${getLocalStorage("token")}`,
        },
      });
      console.log("Proife avaartar response is", resp.data);
      AppData.fetchUserDetails();
      toggleAlertBar(resp.data.message, "success", true, 3000);
      setImageFile(null);
      setCanSubmit(false);
      URL.revokeObjectURL(uploadImgUrl);
      toggleLoad();
    } catch (error) {
      toggleAlertBar("Problem Updating Profile Picture. Please Ensure all Fields are Correct and Try Again!", "error", true, 8000);
      toggleLoad();
    }
  };

  return (
    <form className="profile-form">
      <section className="mb-[6.6rem]">
        {/* Profile Picture */}
        <section className="flex items-center  flex-wrap gap-7 sidebar:gap-0">
          <div className="flex flex-col mr-1 sm:mr-[8.9rem]">
            <label>Profile Picture</label>
            <span>Choose a display picture for your account</span>
          </div>
          <div className="relative m-auto">
            <input onChange={onFileChange} className="hidden " id="upload" type="file" accept="image/*"></input>
            <Avatar ref={imageRef} sx={{ width: 145, height: 145, bgcolor: "orange" }} alt="Remy Sharp" src={`${user?.avatar}`}>
              <span className=" !text-white !text-[5rem] font-semibold"> {user?.firstName ? user?.firstName[0] : "N"}</span>
            </Avatar>
            {/* <img src={`${user?.avatar}`}></img> */}

            <label htmlFor="upload" className="absolute bottom-8 right-0 !grid h-[2.9rem] w-[2.9rem] place-items-center bg-[#FFF6E4] rounded-full cursor-pointer !mb-[0]">
              <img src="/edit-pen.svg"></img>
            </label>
            {imageFile && (
              <span onClick={() => {}} className=" !text-red-500  underline-offset-1 block !text-right translate-y-2 text-[2rem]">
                *Save changes
              </span>
            )}
            {/* <img src={`${baseURL}${user?.avatar}`} className="w-[14.5rem] h-[14.5rem]" alt="userImage"></img> */}
          </div>
        </section>
        {/* Input Form */}
        <div className="mt-[4.8rem] ">
          {formEls.map((el, i) => {
            return (
              <div key={i} className="flex justify-between items-center mb-[3.2rem] flex-wrap">
                <p className="flex flex-col min-w-[22.8rem] mr-[2rem]">
                  <label>{el.label}</label>
                  <span className="mb-[1.3rem]">{el.span}</span>
                </p>
                <input
                  className=" max-w-[36.4rem] w-full placeholder:text-[#D5D6D8] px-[3.2rem] text-[1.6rem] font-medium py-[1.7rem] rounded-[1rem] outline outline-[#C4C4C4] outline-1"
                  placeholder={el.label}
                  value={getValue(el.name)}
                  readOnly={el.name == "userName" ? true : false}
                  required
                  onChange={(e) => {
                    console.log("on details change");
                    handleChange(e, el.name);
                    setDetailsChange(true);
                  }}
                />
              </div>
            );
          })}
        </div>
      </section>
      <button
        style={{ background: canSubmit ? "" : "#F0F0F0" }}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          if (imageFile && !detailsChange) {
            console.log("image change and no details change");
            updateAvatar();
            // onUpdateUserDetails();
            return;
          }
          if (imageFile && detailsChange) {
            console.log("image change and detais change");

            updateAvatar();
            onUpdateUserDetails();
            return;
          } else {
            onUpdateUserDetails();
          }
        }}
        type="submit"
        disabled={canSubmit ? false : true}
        title={canSubmit ? "Save changes" : "Edit profile"}
        className={`btn transition-all ml-auto ${canSubmit ? " cursor-pointer" : " !text-black cursor-not-allowed"}  relative mt-auto`}
      >
        Save Changes
      </button>
    </form>
  );
};

export default Profile;
