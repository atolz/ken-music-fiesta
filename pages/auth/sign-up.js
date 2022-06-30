import React, { useEffect, useState } from "react";
import Link from "next/link";
import AuthLayout from "../../Components/Layout/AuthLayout";
import GotMail from "../../Components/Auth/GotMail";
import { baseInstanceAPI } from "../../axios";
import useLoading from "../../hooks/useLoading";
import useShowAlert from "../../hooks/useShowAlert";

const SignUp = () => {
  const { isLoading, toggleLoad } = useLoading();
  const toggleAlertBar = useShowAlert();
  const [gotMail, setGotMail] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneErrror] = useState("");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  function emailValidation() {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!user.email || regex.test(user.email) === false) {
      setEmailError("Email is not valid");
      return false;
    }
    return true;
  }

  const onSignUp = async (user) => {
    if (!emailValidation()) {
      console.log("Email is not valid");
      return;
    }
    console.log("base url is", process.env.NEXT_PUBLIC_DEVELOPMENT_URL);
    toggleLoad();

    try {
      console.log("submited user is", JSON.stringify(user));
      const response = await baseInstanceAPI.post("account/initiate", JSON.stringify(user));
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
      if (error.response.data.message.includes("email")) {
        // setEmailError(error.response.data.message);
        setEmailError(error.response.data.message);
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
                <a className="text-[#FCAC0D]">Sign In</a>
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
              <div className="form-group col-span-2">
                <label>Phone Number</label>
                <input
                  className={`${phoneError ? "!border-red-500 !border-[2px]" : ""} focus:!border-[#fcac0d]`}
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
                />
                {phoneError && <p className=" !text-[1.4rem] !text-red-500">*Phone number must be valid</p>}
              </div>
              <button className="btn col-span-2 mt-[3.8rem]">Sign Up</button>
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
