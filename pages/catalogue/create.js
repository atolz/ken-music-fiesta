import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import AuthLayout from "../../Components/Layout/AuthLayout";
import { useRouter } from "next/router";
import Alert from "@mui/material/Alert";
import useLoading from "../../hooks/useLoading";
import { baseInstanceAPI } from "../../axios";
import CircularProgress from "@mui/material/CircularProgress";
import useShowAlert from "../../hooks/useShowAlert";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import Upload from "../../Components/Upload";

const CreateAccount = () => {
  const passRef = useRef();
  const passConfRef = useRef();
  const usernameRef = useRef();
  const dateRef = useRef();
  const bvnRef = useRef();
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    uuid: "",
    dob: "",
    bvn: "",
    isDiaspora: false,
  });
  const [error, setError] = useState("");
  const [confError, setConfError] = useState("");
  const [userValid, setUserValid] = useState(true);
  const [passError, setPassError] = useState("");
  // const [dateError, setDateError] = useState(false);
  const router = useRouter();
  const { isLoading, toggleLoad } = useLoading();
  const toggleAlertBar = useShowAlert();
  const [verifying, setVerifying] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Music Artist");

  useEffect(() => {
    // usernameRef.current.value = "";
    // passRef.current.value = "";
    if (!router.isReady) return;
    console.log(router.query.uuid);
    setUser({ ...user, uuid: router.query.uuid });
    return () => {
      toggleAlertBar();
    };
  }, [router.isReady]);

  const onCreate = async (user) => {
    if (user.password !== user.confirmPassword) {
      console.log("Password does not match");
      setError("Password Must Match");
      console.log("submited user is", user);
      console.log("base url is", process.env.NEXT_PUBLIC_DEVELOPMENT_URL);
      setConfError("Password and Password Confirm must match!");
      return;
    }
    if (!userValid) {
      return;
    }
    try {
      toggleLoad();
      const response = await baseInstanceAPI.post("account/complete-signup", JSON.stringify(user));
      toggleLoad();
      console.log(response);
      toggleAlertBar("Account created successfully!", "success", true);
      router.replace("/auth/sign-in");
    } catch (error) {
      toggleLoad();
      if (!error.response) {
        console.log("No response from the server");
        toggleAlertBar("No response from the server. Pls check your network", "failed", true);
        // setError("Network Error");
        return;
      }

      if (error.response.data.message[0].includes("password")) {
        return setPassError("Password must contain at least special a character, number and capital letter");
      }
      if (error.response.data.message.includes("Sorry")) {
        console.log("response error", error.response);
        toggleAlertBar(error.response.data.message, "failed", true);
        return;
      } else {
        toggleAlertBar("Something's not right", "failed", true, 10000);
      }
      console.log("there was an error", error?.response);
    }
  };

  // To reduce the amount of API calls
  const debounce = (callback, wait) => {
    console.log("in debounce");
    let timeoutId = null;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        console.log("befor make call");
        callback.apply(null, args);
      }, wait);
    };
  };

  const verifyUserName = async () => {
    console.log("in verify user");
    setUserValid(true);
    setVerifying(true);
    setUser({ ...user, username: usernameRef.current.value });
    try {
      const response = await baseInstanceAPI.post("account/verify-username", JSON.stringify({ username: usernameRef.current.value }));
      console.log(response);
      toggleAlertBar();
      setCanSubmit(true);
      setVerifying(false);
    } catch (error) {
      if (!error.response) {
        setVerifying(false);
        toggleAlertBar("No response from the server. Pls check your network", "failed", true);
        return console.log("no response from the server");
      }
      if (error.response) {
        setUserValid(false);
        setVerifying(false);
        setCanSubmit(false);
      }
      console.log("there was an error", error);
    }
  };
  const handleTyping = debounce(verifyUserName, 900);

  const showPassword = (ref) => {
    ref.current.type = ref.current.type == "text" ? "password" : "text";
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);

    console.log("selected value is", event.target.value);
  };

  return (
    <div className="auth-container !mb-[5rem]">
      <form
        autoComplete="off"
        className="auth-form"
        onSubmit={(e) => {
          e.preventDefault();
          onCreate(user);
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
              ref={bvnRef}
              onChange={(e) => {
                setUser({ ...user, bvn: e.target.value });
              }}
              required
              placeholder="Enter Label Name"
            />
          </div>

          {/* Year Of Release */}
          <div className="form-group">
            <label>Year Of Release</label>
            <input
              max="2022-12-31"
              onChange={(e) => {
                console.log("date is ", e.target.value);
                setUser({ ...user, dob: e.target.value });
              }}
              ref={dateRef}
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
              autoComplete="off"
              autofill="off"
              name="username"
              ref={usernameRef}
              onChange={handleTyping}
              required
              placeholder="Enter Label Name"
            />
            {verifying && (
              <span className="mt-3">
                <CircularProgress color="warning" size={20} />
              </span>
            )}
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

          <button hidden={canSubmit} className={`btn mt-[3.8rem] ${canSubmit ? "" : "cursor-not-allowed"}`}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

CreateAccount.Layout = AuthLayout;
export default CreateAccount;
