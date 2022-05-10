import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { baseInstanceAPI } from "../../axios";
import useLocalStorage from "../../hooks/useLocalStorage";
import useShowAlert from "../../hooks/useShowAlert";
import { setUser } from "../../store/user";

const Profile = ({ user }) => {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    phone: user?.phone,
    username: user?.username,
  });
  const formEls = [
    { label: "Username", span: "View your username for your account", name: "username", value: user?.username },
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

  const onUpdate = async () => {
    console.log("Details is", { ...userDetails, username: undefined });
    setCanSubmit(false);
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
      // setCanSubmit(false);
    } catch (error) {
      console.log("There was an error, t", error?.response);
      toggleAlertBar("Problem Updating Profile. Please Ensure all Fields are Correct and Try Again!", "error", true, 4000);
      setCanSubmit(true);
    }
  };

  return (
    <form>
      <section className="mb-[9.6rem]">
        {/* Profile Picture */}
        <section className="flex items-center  flex-wrap gap-7 sidebar:gap-0">
          <div className="flex flex-col mr-[8.9rem]">
            <label>Profile Picture</label>
            <span>Choose a display picture for your account</span>
          </div>
          <div className="relative">
            <input className="hidden " id="upload" type="file"></input>
            <label htmlFor="upload" className="absolute bottom-1 right-0 !grid h-[2.9rem] w-[2.9rem] place-items-center bg-[#FFF6E4] rounded-full cursor-pointer !mb-[0]">
              <img src="/edit-pen.svg"></img>
            </label>
            <img src="/profile-pic.jpg" className="w-[14.5rem] h-[14.5rem]" alt="userImage"></img>
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
                  type="tel"
                  value={getValue(el.name)}
                  readOnly={el.name == "userName" ? true : false}
                  required
                  onChange={(e) => {
                    handleChange(e, el.name);
                  }}
                />
              </div>
            );
          })}
        </div>
      </section>
      <button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          onUpdate();
        }}
        type="submit"
        disabled={canSubmit ? false : true}
        className={`btn transition-all ml-auto ${canSubmit ? " !bg-[#fcac0d]" : " !bg-[#F0F0F0]"}  relative mt-auto`}
      >
        Save Changes
      </button>
    </form>
  );
};

export default Profile;
