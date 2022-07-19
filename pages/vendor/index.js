import React, { useState, forwardRef, useRef, useEffect } from "react";
import StatusCircle from "../../Components/StatusCircle";
import SvgIconWrapper from "../../Components/SvgIconWrapper";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../../store/pages";
import PaymentDetailsBox from "../../Components/PaymentDetailsBox";
import { baseInstanceAPI } from "../../axios";
import useLoading from "../../hooks/useLoading";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import useShowAlert from "../../hooks/useShowAlert";
import formatNumberWithCommas from "../../Utils/addCommas";

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

const InputTextField = forwardRef(function Input({ label, placeholder = "placeholder", className, name, type = "number", error, initVal, errorMessage, onChange }, ref) {
  console.log("error:", error);

  return (
    <div className={`${className}`}>
      <label className="!leading-[2.6] font-medium text-[1.6rem] text-white mb-8px]" htmlFor={name}>
        {label}
      </label>
      <input
        onChange={(e) => {
          onChange(e);
        }}
        ref={ref}
        type={type}
        value={initVal}
        className="h-[6rem] w-full rounded-2xl px-[2rem] text-black font-medium text-[1.6rem] placeholder:text-[#D5D6D8] border-2 border-transparent focus:border-primary outline-none"
        id={name}
        placeholder={placeholder}
      ></input>
      <p className={` !text-[1.4rem] !text-red-500 ${error == "" ? " opacity-0" : " opacity-100"}`}>*This field is required</p>
    </div>
  );
});

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

const PaymentStatus = ({ status, amount, phone = "0800044455555", transactionId = "34538590584736s", action }) => {
  const items = [
    { name: "Amount", value: amount },
    { name: "Phone Number", value: `+${phone}` },
    { name: "Transaction ID", value: transactionId },
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
          // router.push("/dashboard");
          // dispatch(setActivePage("Payment"));
          action();
        }}
        className="kef-link mt-[5rem]"
      >
        Go to Initiate payment
      </span>
    </div>
  );
};

const Payment = ({ action, amountVal, phoneNum }) => {
  const sections = [
    { name: "Initiate Payment", desc: "Provide your purchase details and purchase location and confirm your payment" },
    { name: "Pending Payments", desc: "Details of payments that has been processed" },
  ];
  const [activeTab, setActiveTab] = useState(sections[0]);
  const amountRef = useRef();
  const phoneRef = useRef();
  const [phoneError, setPhoneError] = useState("");
  const [phone, setPhone] = useState(phoneNum);
  const [amount, setAmount] = useState(amountVal);
  const [amountError, setAmountError] = useState("");
  const [transactionHistory, setTransactionHistory] = useState([]);
  const toggleAlertBar = useShowAlert();

  useEffect(() => {
    const getTransactions = async () => {
      // User profile details
      try {
        const resp = await baseInstanceAPI.get("/vendor/get-transaction/1");
        console.log("vendor trans history ", resp.data.payments);
        setTransactionHistory(resp.data.response);
      } catch (error) {
        toggleAlertBar("Error loading transactions. Try again later!", "fail", true);
        console.log("Error loadin transactions", error);
      }
    };
    getTransactions();
  }, []);

  const isValid = () => {
    return amountRef.current?.value && phoneRef.current?.value;
  };
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

        {activeTab.name == "Initiate Payment" && (
          <>
            <label className="!leading-[2.6] font-medium text-[1.6rem] text-white mb-8px]">Phone</label>
            <PhoneInput
              containerClass="!mb-[3.4rem]"
              inputClass="!h-[6rem]  !w-full !rounded-2xl px-[2rem] !text-black !font-medium !text-[1.6rem] !placeholder:text-[#D5D6D8] !border-2 !border-transparent focus:!border-primary !outline-none"
              country={"ng"}
              enableAreaCodes={true}
              enableSearch={true}
              value={phone}
              onChange={(phone) => setPhone(phone)}
            />
            <InputTextField
              onChange={(e) => {
                setAmountError("");
                setAmount(e.target.value);
                console.log("Amount change:", e.target.value);
              }}
              error={amountError}
              ref={amountRef}
              initVal={amount}
              name="Amount"
              className={"mb-[4.4rem]"}
              type="number"
              label={"Amount"}
              placeholder="5000"
            ></InputTextField>
            <button
              // disabled={error == "" ? false : true}
              // title={error ? error : "..."}
              onClick={() => {
                console.log("Amount and Phone is:", amountRef.current?.value, `${phone}`);
                if (!phone) return setPhoneError("Input Phone Number");
                if (!amountRef?.current?.value) return setAmountError("Input Amount");
                setAmountError("");
                setPhoneError("");
                action(amountRef.current.value, `${phone}`);
              }}
              className={` btn w-full `}
            >
              Continue
            </button>
          </>
        )}

        {activeTab.name == "Pending Payments" && (
          <div className=" rounded-primary py-[3rem] px-[3.8rem] backdrop-blur-[40px] bg-[#f8f9fd10] max-h-[28rem] overflow-scroll scroll_hide">
            <section className="grid grid-cols-[2fr,1fr,1.5fr] text-[1.2rem] font-semibold text-white mb-[1.8rem]">
              <span>Phone Number</span>
              <span className="ml-20">Amount</span>
              <span className=" justify-self-end">Status</span>
            </section>
            {transactionHistory?.map((el, i) => {
              return (
                <section key={i} className="grid grid-cols-[2fr,1fr,1.5fr] text-[1.8rem] font-medium text-white mb-[1.6rem] last:mb-0">
                  <span>{el.phone}</span>
                  <span className=" ml-20">{formatNumberWithCommas(el.amount)}</span>
                  <span className={`justify-self-end ${el.status == "Success" ? "text-[#348B52]" : "text-[#FCAC0D]"}`}>{el.status}</span>
                </section>
              );
            })}
          </div>
        )}
      </main>
    </>
  );
};

const Review = ({ action, amount, phone, setTransactionId, goBack }) => {
  const items = [
    { name: "Phone Number", value: `+${phone}` },
    { name: "Amount", value: amount },
  ];
  const { toggleLoad } = useLoading();
  const toggleAlertBar = useShowAlert();

  const onInitialPayment = async () => {
    const data = { amount, phone: `+${phone}`, vendor: "8df21bc2-d96c-4598-9a79-9a1e30a38d2e", branch: "1" };
    console.log("On review: Details are:", data);
    toggleLoad();
    try {
      const resp = await baseInstanceAPI.post("/vendor/initiate", data);
      console.log("Response is: ON after review", resp.data.data);
      setTransactionId(resp.data?.data?.id);
      toggleLoad();
      action();
    } catch (error) {
      if (error.response) {
        console.log("A server error:", error.response);
        if (error.response?.data?.message?.includes("User")) {
          toggleAlertBar(error.response?.data?.message, "fail", true);
        }
        if (error.response?.data?.message[0] && error.response?.data?.message[0].includes("phone")) {
          toggleAlertBar(error.response?.data?.message[0], "fail", true);
        }
      } else {
        console.log("An unknown error occured");
      }
      toggleLoad();
    }
  };
  return (
    <>
      <H1 className={"flex items-center"}>
        <SvgIconWrapper
          action={() => {
            goBack();
          }}
          className={"text-white mr-[2.8rem] h-[1.9rem] w-[1.9rem] cursor-pointer"}
          iconName={"arr-left"}
        ></SvgIconWrapper>
        Review Payment
      </H1>
      <P className={"mb-[5rem] max-w-[45.6rem]"}>Provide your purchase details and purchase location and confirm your payment</P>
      <PaymentDetailsBox items={items}></PaymentDetailsBox>
      <button
        onClick={() => {
          onInitialPayment();
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
  const [amount, setAmount] = useState();
  const [phone, setPhone] = useState();
  const [transactionId, setTransactionId] = useState();

  return (
    <div className="grid justify-center bg-flare bg-no-repeat bg-cover h-screen w-screen overflow-x-hidden overflow-y-scroll scroll_hide">
      <header className=" fixed top-0 left-0 w-full flex justify-center pt-[6rem]">
        <KennisLogo></KennisLogo>
      </header>
      <ContainerBlur>
        {activePage == "Payment" && (
          <Payment
            amountVal={amount}
            phoneNum={phone}
            action={(amount, phone) => {
              setAmount(amount);
              setPhone(phone);
              setActivePage("Review");
            }}
          ></Payment>
        )}
        {activePage == "Review" && (
          <Review
            goBack={() => {
              setActivePage("Payment");
            }}
            amount={amount}
            phone={phone}
            action={() => {
              setActivePage("PaymentStatus");
            }}
            setTransactionId={setTransactionId}
          ></Review>
        )}
        {activePage == "PaymentStatus" && (
          <PaymentStatus
            action={() => {
              setActivePage("Payment");
              setAmount("");
              setPhone("");
            }}
            amount={amount}
            phone={phone}
            transactionId={transactionId}
          ></PaymentStatus>
        )}
      </ContainerBlur>
    </div>
  );
};

export default SelfCheckOut;
