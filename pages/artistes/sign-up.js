import React, { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import AuthLayout from "../../Components/Layout/AuthLayout";
import GotMail from "../../Components/Auth/GotMail";
import { baseInstanceAPI } from "../../axios";
import useLoading from "../../hooks/useLoading";
import useShowAlert from "../../hooks/useShowAlert";
import AuthStatus from "../../Components/Auth/Status";
import { useRouter } from "next/router";
import useLocalStorage from "../../hooks/useLocalStorage";
import { DataContext } from "../../Context/fetchData";

const SignUp = () => {
  const { isLoading, toggleLoad } = useLoading();
  const toggleAlertBar = useShowAlert();
  const [created, setCreated] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneErrror] = useState("");
  const [user, setUser] = useState({
    artistName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [confError, setConfError] = useState("");
  const [passError, setPassError] = useState("");
  const passRef = useRef();
  const passConfRef = useRef();
  const router = useRouter();
  const { setLocalStorage } = useLocalStorage();
  const AppData = useContext(DataContext);

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

  const onSignUp = async (user) => {
    if (user.password !== user.confirmPassword) {
      console.log("Password does not match");
      setError("Password Must Match");
      console.log("submited user is", user);
      console.log("base url is", process.env.NEXT_PUBLIC_DEVELOPMENT_URL);
      setConfError("Password and Password Confirm must match!");
      return;
    }

    if (!emailValidation()) {
      console.log("Email is not valid");
      return;
    }
    console.log("base url is", process.env.NEXT_PUBLIC_DEVELOPMENT_URL);
    toggleLoad();

    try {
      console.log("submited user is", JSON.stringify(user));
      const response = await baseInstanceAPI.post("/artist/signup", JSON.stringify(user));
      toggleAlertBar("Account created successfully!!", "success", 5000);
      console.log(response);
      setCreated(true);
      toggleLoad();
      // Loggin user to get token for creating Catalogue or redirecting to dashboard: User is not redirected to Artiste Signin after signup
      const loginResp = await baseInstanceAPI.post(
        "/artist/login",
        JSON.stringify({
          email: user.email,
          password: user.password,
        })
      );
      setLocalStorage("token", loginResp.data.access_token);
      setLocalStorage("section", "Artiste");
      AppData.setUserOnLogin("Artiste", { username: user.email });
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
      {!created && (
        <div className="auth-container !mb-[5rem]">
          <form
            className="auth-form"
            onSubmit={(e) => {
              e.preventDefault();
              onSignUp(user);
            }}
          >
            <h3>Artiste Sign Up</h3>
            <p className="mb-[3.4rem]">
              Hey there! Not yet a member fill the form below to register. Already a member?{" "}
              <Link href="/artistes/sign-in">
                <a className="text-[#FCAC0D]">Sign In</a>
              </Link>
            </p>
            {error && <span className="text-white text-lg">*Error MEssage </span>}
            <div className="grid grid-cols-2 gap-5 gap-y-[2.4rem]">
              <div className="form-group col-span-2">
                <label>Artist Name</label>
                <input
                  onChange={(e) => {
                    setUser({ ...user, artistName: e.target.value });
                  }}
                  required
                  placeholder="Ex. Jonathan"
                />
              </div>
              <div className="form-group col-span-2">
                <label>Email Address</label>
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
                      fill="#FCAC0D"
                    />
                  </svg>
                </div>
                {passError && <p className=" !text-[1.2rem] !font-normal !text-red-500">*{passError}</p>}
              </div>
              <div className="form-group col-span-2">
                <label>Confirm Password</label>
                <div className="relative">
                  <input
                    ref={passConfRef}
                    className={`w-full ${confError ? " !border-red-500 !border-[2px]" : ""}`}
                    minLength={8}
                    onChange={(e) => {
                      //   setCanSubmit(true);
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
                      fill="#FCAC0D"
                    />
                  </svg>
                </div>
                {confError && <p className=" !text-[1.2rem] !font-normal !text-red-500">*{confError}</p>}
              </div>

              <button className="btn col-span-2 mt-[3.8rem]">Sign Up</button>
            </div>
          </form>
        </div>
      )}
      {created && (
        <AuthStatus
          action={() => {
            router.push("/catalogues/create");
          }}
          link={"/catalogues/dashboard"}
          caption="Hey! super glad you are here. Start building your catalogue and get streams"
          title="Account Created"
          actionText={"Create First Catalogue"}
          status="success"
          linkText="Skip"
        ></AuthStatus>
      )}
    </>
  );
};

SignUp.Layout = AuthLayout;

export default SignUp;
