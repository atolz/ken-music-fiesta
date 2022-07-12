import React, { useState } from "react";
import StatusCircle from "../../Components/StatusCircle";
import SvgIconWrapper from "../../Components/SvgIconWrapper";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../../store/pages";
import PaymentDetailsBox from "../../Components/PaymentDetailsBox";

const ContainerBlur = ({ children }) => {
  return <div className="p-[5.5rem] rounded-primary bg-[rgba(255,255,255,0.16)] backdrop-blur-[44px] max-w-[55.3rem] m-10 mt-[17rem] h-max">{children}</div>;
};

const ToggleButton = ({ text, active, action = () => {} }) => {
  return (
    <button
      onClick={() => action()}
      className={`h-[3.2rem] px-[1.6rem] box-border rounded-[10px] font-bold text-[1.2rem] grid place-content-center transition-all duration-100 ${
        active
          ? " border-primary text-primary !bg-[linear-gradient(255.14deg,_#a608a3_34.14%,_#c6155f_76.78%,_#d82023_122.17%)] !text-white"
          : "  !bg-[linear-gradient(rgba(255, 255, 255, 0),_rgba(255, 255, 255, 0))] !text-white"
      }`}
    >
      {text}
    </button>
  );
};

const InputTextField = ({ label, placeholder = "placeholder", className, name, type }) => {
  return (
    <div className={`${className}`}>
      <label className="!leading-[2.6] font-medium text-[1.6rem] text-white mb-8px]" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        className="h-[6rem] w-full rounded-2xl px-[2rem] text-black font-medium text-[1.6rem] placeholder:text-[#D5D6D8] border-2 border-transparent focus:border-primary outline-none"
        id={name}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

const KennisLogo = ({ className }) => {
  return (
    // <Link href={"/"}>
    <img className={`h-[66.5px] cursor-pointer ${className}`} src="/new_logo.png"></img>
    // </Link>
  );
};
const H1 = ({ children, className }) => {
  return <h2 className={`mb-[8px] font-bold text-[3.2rem] text-white ${className}`}>{children}</h2>;
};

const P = ({ children, className }) => {
  return <p className={`text-[1.6rem] font-medium text-white mb-[3rem] max-w-[475px] h-[5.2rem] ${className}`}>{children}</p>;
};

const PaymentStatus = ({ status }) => {
  const items = [
    { name: "Amount", value: 5000 },
    { name: "Phone Number", value: "0800044455555" },
    { name: "Transaction ID", value: "34538590584736s" },
  ];
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div className=" grid place-items-center ">
      <StatusCircle color={"#FCAC0D"}>
        <SvgIconWrapper className={" text-black w-[2.84rem] h-[2.84rem]"} iconName={"info-circle"}></SvgIconWrapper>
      </StatusCircle>
      <H1 className={"mt-[4.8rem] mb-[2.6rem]"}>Payment Initiated</H1>

      <div className=" place-self-stretch sidebar:!w-[43.6rem] w-auto">
        <PaymentDetailsBox items={items}></PaymentDetailsBox>
      </div>
      <span
        onClick={() => {
          router.push("/dashboard");
          dispatch(setActivePage("Payment"));
        }}
        className="kef-link mt-[5rem]"
      >
        Go to Initiate payment
      </span>
    </div>
  );
};

const Payment = ({ action }) => {
  const sections = [
    { name: "Initiate Payment", desc: "Provide your purchase details and purchase location and confirm your payment" },
    { name: "Pending Payments", desc: "Details of payments that has been processed" },
  ];
  const [activeTab, setActiveTab] = useState(sections[0]);
  return (
    <>
      {/* Toggle Filter */}
      <section className="flex items-center gap-[2rem] mb-[3.5rem]">
        {sections.map((el, i) => {
          return (
            <ToggleButton
              action={() => {
                setActiveTab(el);
              }}
              active={activeTab.name == el.name}
              key={i}
              text={el.name}
            ></ToggleButton>
          );
        })}
      </section>
      {/* Main */}
      <main>
        <H1>{activeTab.name}</H1>
        <P className={"sidebar:!w-[45.6rem] w-auto"}>{activeTab.desc}</P>
        <InputTextField name="Phone number" className={"mb-[2.4rem]"} type="text" label={"Phone number"} placeholder={"Ex. 1234567890"}></InputTextField>
        <InputTextField name="Amount" className={"mb-[4.4rem]"} type="tel" label={"Amount"} placeholder="5000"></InputTextField>
        <button
          onClick={() => {
            action();
          }}
          className=" btn w-full"
        >
          Continue
        </button>
      </main>
    </>
  );
};

const Review = ({ action }) => {
  const items = [
    { name: "Phone Number", value: "0800044455555" },
    { name: "Amount", value: 5000 },
  ];
  return (
    <>
      <H1>Review Payment</H1>
      <P className={"mb-[5rem] max-w-[45.6rem]"}>Provide your purchase details and purchase location and confirm your payment</P>
      <PaymentDetailsBox items={items}></PaymentDetailsBox>
      <button
        onClick={() => {
          action();
        }}
        className=" btn w-full mt-[6rem]"
      >
        Continue
      </button>
    </>
  );
};

const SelfCheckOut = () => {
  const [activePage, setActivePage] = useState("Payment");
  return (
    <div className="grid justify-center bg-flare bg-no-repeat bg-cover h-screen w-screen overflow-x-hidden overflow-y-scroll scroll_hide">
      <header className=" fixed top-0 left-0 w-full flex justify-center pt-[6rem]">
        <KennisLogo></KennisLogo>
      </header>
      <ContainerBlur>
        {activePage == "Payment" && (
          <Payment
            action={() => {
              setActivePage("Review");
            }}
          ></Payment>
        )}
        {activePage == "Review" && (
          <Review
            action={() => {
              setActivePage("PaymentStatus");
            }}
          ></Review>
        )}
        {activePage == "PaymentStatus" && <PaymentStatus></PaymentStatus>}
      </ContainerBlur>
    </div>
  );
};

export default SelfCheckOut;
