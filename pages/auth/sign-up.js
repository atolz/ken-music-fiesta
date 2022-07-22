import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import AuthLayout from "../../Components/Layout/AuthLayout";
import GotMail from "../../Components/Auth/GotMail";
import { baseInstanceAPI } from "../../axios";
import useLoading from "../../hooks/useLoading";
import useShowAlert from "../../hooks/useShowAlert";
import { useRouter } from "next/router";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignUp = () => {
  const passRef = useRef();
  const passConfRef = useRef();
  const { isLoading, toggleLoad } = useLoading();
  const toggleAlertBar = useShowAlert();
  const [gotMail, setGotMail] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneErrror] = useState("");
  const [confError, setConfError] = useState("");
  const [passError, setPassError] = useState("");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    ref: "",
    location: {
      country: "",
      ip: "",
    },
  });
  const router = useRouter();

  function emailValidation() {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!user.email || regex.test(user.email) === false) {
      setEmailError("Email is not valid");
      return false;
    }
    return true;
  }

  const showPassword = (ref) => {
    ref.current.type = ref.current.type == "text" ? "password" : "text";
  };

  const getGeoInfo = async () => {
    console.log("in get geo info");
    try {
      const resp = await axios.get("https://geolocation-db.com/json/");
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      console.log("a location error occured", error.message);
      toggleAlertBar("An Error Occured getting your location. Pls ensure you have adblocker disabled in your browser or try using another browser", "fail", true, 50000);
    }
  };

  const onSignUp = async (user) => {
    // const locationData = await getGeoInfo();
    // console.log("In signup data", locationData);
    if (!emailValidation()) {
      console.log("Email is not valid");
      return;
    }

    if (user.password !== user.confirmPassword) {
      console.log("Password does not match");
      setError("Password Must Match");
      console.log("submited user is", user);
      console.log("base url is", process.env.NEXT_PUBLIC_DEVELOPMENT_URL);
      setConfError("Password and Password Confirm must match!");
      return;
    }

    toggleLoad();
    const locationData = await getGeoInfo();
    console.log("In signup data", locationData);
    let userObj = { ...user, ref: router?.query?.ref, location: { country: locationData?.country_name, ip: locationData?.IPv4 } };
    console.log("base url is", process.env.NEXT_PUBLIC_DEVELOPMENT_URL);
    try {
      console.log("submited user is", JSON.stringify(userObj));
      const response = await baseInstanceAPI.post("account/signup", JSON.stringify(userObj));
      toggleAlertBar("Verification email sent.", "success", 5000);
      console.log(response);
      setGotMail(true);
      toggleLoad();
    } catch (error) {
      toggleLoad();
      if (!error.response) {
        toggleAlertBar("No response from the server. Pls check your internet connection", "fail", 10000);
        return console.log("No response from the server");
      }

      if (error.response.data.message[0].includes("phone")) {
        setPhoneErrror(error.response.data.message[0]);
        console.log(error.response);
        console.log("Phone error error...", error.response.data.message[0]);
        return;
      }
      if (error.response.data.message[0].includes("location")) {
        toggleAlertBar("An Error Occured getting your location. Pls ensure you have adblocker disabled in your browser or try using another browser", "fail", true, 50000);

        return;
      }
      if (error.response.data.message.includes("email")) {
        // setEmailError(error.response.data.message);
        setEmailError(error.response.data.message);
        return;
        // console.log("email eroro");
      }
      if (error.response.data.message.includes("same phone")) {
        // setEmailError(error.response.data.message);
        setPhoneErrror(error.response.data.message);
        return;
        // console.log("email eroro");
      }
      if (error.response.data.message[0]?.includes("password")) {
        // setEmailError(error.response.data.message);
        setPassError(error.response.data.message[0]);
        return;
        // console.log("email eroro");
      } else {
        console.log("error is", error.response);
        toggleAlertBar("Something went wrong! Pls try again later.", "fail", 20000);
      }
      // toggleLoad();
      // console.log("AN error has occured", error.response);
    }
    console.log("end of try catch");
    // toggleLoad();
  };
  useEffect(() => {
    // return () => {
    //   if (isLoading) {
    //     toggleLoad();
    //   }
    // };
  }, []);

  return (
    <>
      {!gotMail && (
        <div className="auth-container !mb-[5rem]">
          <form
            className="auth-form"
            onSubmit={(e) => {
              e.preventDefault();
              onSignUp(user);
            }}
          >
            <h3>Sign up</h3>
            <p className="mb-[3.4rem]">
              Hey there! Not yet a member fill the form below to register. Already a member?{" "}
              <Link href="/auth/sign-in">
                <a className=" !font-medium !text-[1.6rem] !text-[#FA6BFF]">Sign In</a>
              </Link>
            </p>
            {error && <span className="text-white text-lg">*Error MEssage </span>}
            <div className="grid grid-cols-2 gap-5 gap-y-[2.4rem]">
              <div className="form-group">
                <label>First Name</label>
                <input
                  onChange={(e) => {
                    setUser({ ...user, firstName: e.target.value });
                  }}
                  required
                  placeholder="Ex. Jonathan"
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  onChange={(e) => {
                    setUser({ ...user, lastName: e.target.value });
                  }}
                  required
                  placeholder="Ex. Fredwell"
                />
              </div>
              {/* Email */}
              <div className="form-group col-span-2">
                <label>Email</label>
                <input
                  className={`${emailError ? "!border-red-500 !border-[2px]" : ""}`}
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                    setEmailError("");
                  }}
                  type="email"
                  required
                  placeholder="Enter email"
                />
                {emailError && <p className=" !text-[1.4rem] !text-red-500">*{emailError}</p>}
              </div>

              {/* Phone Number */}
              <div className="form-group col-span-2">
                <label>Phone Number</label>
                {/* <input
                  className={`${phoneError ? "!border-red-500 !border-[2px]" : ""} focus:!border-[#FA6BFF]`}
                  onChange={(e) => {
                    setUser({ ...user, phone: e.target.value });
                    setPhoneErrror("");
                    // if (e.target.value.match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g)) {
                    //   console.log("value match");
                    // }
                  }}
                  type="tel"
                  title="+234..."
                  // pattern="/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g"
                  required
                  placeholder="+2348110377770"
                /> */}

                <PhoneInput
                  containerClass=""
                  inputClass={`!h-[6rem]  !w-full !rounded-2xl px-[2rem] !text-black !font-medium !text-[1.6rem] !placeholder:text-[#D5D6D8] !border-2  focus:!border-primary !outline-none ${
                    phoneError ? " !border-red-500 !border-[2px]" : ""
                  }`}
                  country={"ng"}
                  enableAreaCodes={true}
                  enableSearch={true}
                  value={user.phone}
                  onChange={(phone) => {
                    setUser({ ...user, phone: `+${phone}` });
                    setPhoneErrror("");
                  }}
                />
                {phoneError && <p className=" !text-[1.4rem] !text-red-500">*{phoneError ?? "Phone number must be valid"}</p>}
              </div>

              <div className="form-group col-span-2">
                <label>Password</label>
                <div className="relative">
                  <input
                    className={`w-full ${passError ? " !border-red-500 !border-[2px]" : ""}`}
                    ref={passRef}
                    minLength={8}
                    onChange={(e) => {
                      setPassError("");
                      setConfError("");
                      setUser({ ...user, password: e.target.value });
                    }}
                    required
                    type="password"
                    placeholder="xxxxxxxxxxxx"
                  />
                  <svg
                    onClick={() => {
                      showPassword(passRef);
                    }}
                    className="a absolute right-8 cursor-pointer top-10"
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00002 0.643555C11.5947 0.643555 14.5854 3.23022 15.2127 6.64355C14.586 10.0569 11.5947 12.6436 8.00002 12.6436C4.40535 12.6436 1.41469 10.0569 0.787354 6.64355C1.41402 3.23022 4.40535 0.643555 8.00002 0.643555ZM8.00002 11.3102C9.35967 11.3099 10.6789 10.8481 11.7419 10.0003C12.8049 9.15257 13.5486 7.96907 13.8514 6.64355C13.5475 5.31909 12.8033 4.13689 11.7404 3.29024C10.6776 2.44359 9.35889 1.98257 8.00002 1.98257C6.64115 1.98257 5.32248 2.44359 4.2596 3.29024C3.19673 4.13689 2.45253 5.31909 2.14869 6.64355C2.45142 7.96907 3.19514 9.15257 4.25812 10.0003C5.3211 10.8481 6.64037 11.3099 8.00002 11.3102ZM8.00002 9.64355C7.20437 9.64355 6.44131 9.32748 5.8787 8.76488C5.31609 8.20227 5.00002 7.4392 5.00002 6.64355C5.00002 5.84791 5.31609 5.08484 5.8787 4.52223C6.44131 3.95963 7.20437 3.64355 8.00002 3.64355C8.79567 3.64355 9.55873 3.95963 10.1213 4.52223C10.6839 5.08484 11 5.84791 11 6.64355C11 7.4392 10.6839 8.20227 10.1213 8.76488C9.55873 9.32748 8.79567 9.64355 8.00002 9.64355ZM8.00002 8.31022C8.44205 8.31022 8.86597 8.13463 9.17853 7.82207C9.49109 7.50951 9.66669 7.08558 9.66669 6.64355C9.66669 6.20153 9.49109 5.7776 9.17853 5.46504C8.86597 5.15248 8.44205 4.97689 8.00002 4.97689C7.55799 4.97689 7.13407 5.15248 6.82151 5.46504C6.50895 5.7776 6.33335 6.20153 6.33335 6.64355C6.33335 7.08558 6.50895 7.50951 6.82151 7.82207C7.13407 8.13463 7.55799 8.31022 8.00002 8.31022Z"
                      fill="#FA6BFF"
                    />
                  </svg>
                </div>
                {passError && <p className=" !text-[1.2rem] !font-normal !text-red-500">*{passError}</p>}
                <span className=" mt-2 text-[1.2rem] text-gray-100">Must contain: a captital letter & number</span>
              </div>
              <div className="form-group col-span-2">
                <label>Confirm Password</label>
                <div className="relative">
                  <input
                    ref={passConfRef}
                    className={`w-full ${confError ? " !border-red-500 !border-[2px]" : ""}`}
                    minLength={8}
                    onChange={(e) => {
                      setPassError("");
                      setConfError("");
                      setUser({ ...user, confirmPassword: e.target.value });
                    }}
                    type="password"
                    required
                    placeholder="xxxxxxxxxxxx"
                  />
                  <svg
                    onClick={() => {
                      showPassword(passConfRef);
                    }}
                    className="a absolute right-8 cursor-pointer top-10"
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00002 0.643555C11.5947 0.643555 14.5854 3.23022 15.2127 6.64355C14.586 10.0569 11.5947 12.6436 8.00002 12.6436C4.40535 12.6436 1.41469 10.0569 0.787354 6.64355C1.41402 3.23022 4.40535 0.643555 8.00002 0.643555ZM8.00002 11.3102C9.35967 11.3099 10.6789 10.8481 11.7419 10.0003C12.8049 9.15257 13.5486 7.96907 13.8514 6.64355C13.5475 5.31909 12.8033 4.13689 11.7404 3.29024C10.6776 2.44359 9.35889 1.98257 8.00002 1.98257C6.64115 1.98257 5.32248 2.44359 4.2596 3.29024C3.19673 4.13689 2.45253 5.31909 2.14869 6.64355C2.45142 7.96907 3.19514 9.15257 4.25812 10.0003C5.3211 10.8481 6.64037 11.3099 8.00002 11.3102ZM8.00002 9.64355C7.20437 9.64355 6.44131 9.32748 5.8787 8.76488C5.31609 8.20227 5.00002 7.4392 5.00002 6.64355C5.00002 5.84791 5.31609 5.08484 5.8787 4.52223C6.44131 3.95963 7.20437 3.64355 8.00002 3.64355C8.79567 3.64355 9.55873 3.95963 10.1213 4.52223C10.6839 5.08484 11 5.84791 11 6.64355C11 7.4392 10.6839 8.20227 10.1213 8.76488C9.55873 9.32748 8.79567 9.64355 8.00002 9.64355ZM8.00002 8.31022C8.44205 8.31022 8.86597 8.13463 9.17853 7.82207C9.49109 7.50951 9.66669 7.08558 9.66669 6.64355C9.66669 6.20153 9.49109 5.7776 9.17853 5.46504C8.86597 5.15248 8.44205 4.97689 8.00002 4.97689C7.55799 4.97689 7.13407 5.15248 6.82151 5.46504C6.50895 5.7776 6.33335 6.20153 6.33335 6.64355C6.33335 7.08558 6.50895 7.50951 6.82151 7.82207C7.13407 8.13463 7.55799 8.31022 8.00002 8.31022Z"
                      fill="#FA6BFF"
                    />
                  </svg>
                </div>
                {confError && <p className=" !text-[1.2rem] !font-normal !text-red-500">*{confError}</p>}
              </div>

              <button className="btn col-span-2 mt-[3.8rem] shiny_slide_2 depress">Sign Up</button>
            </div>
          </form>
        </div>
      )}
      {gotMail && <GotMail></GotMail>}
    </>
  );
};

SignUp.Layout = AuthLayout;

export default SignUp;
