import React, { useState } from "react";
import LandPageLayout from "../Components/Layout/LandPageLayout";
import Collapsible from "react-collapsible";
const Container = ({ children }) => {
  return <div className="max-w-[182rem] mx-auto w-full px-[4rem] sidebar:px-[10rem]">{children}</div>;
};

const Faq = () => {
  const question = [
    {
      title: "How do i sign up on Kennis Music Festival?",
      desc: "Click or Tap on the Mint Event Ticket button on the Homepage and follow the instructions. However, if you're already a Kennis Music Bites Cardholder, you'll always be notified of future event dates and sign ups are seamless via the Event Calendar.",
    },
    {
      title: "Where can I get tickets?",
      desc: "You can always get your Event Tickets from here https://kennismusic.app. Some tickets are free while other tickets come with at a premium.",
    },
    {
      title: "How do i receive my Kennis Music Bites Gold card?",
      desc: "Your Gold Kennis Music Bites card will be delivered to your address on file within 24 to 72 hours after registration. That is the same address you submitted during profile creation.",
    },
    {
      title: "How can I upgrade my Gold Kennis Music Bites card and become a Platimum Cardholder? ",
      desc: (
        <span>
          Platinum Card comes with a premium charge. You can upgrade and enjoy Cardholder Previledges with your Platinum Kennis Music Bites card. The Platinum Card attracts an Issuance fee as well as
          cost of delivery. The bank will notify you the prevailling respective rates.{" "}
        </span>
      ),
    },
    {
      title: "Can I buy Raffle Tickets?",
      desc: "You can either earn a free raffle ticket after making a fixed payment for some items at partner vendor location or buy your raffle tickets directly from https://kennismusic.app",
    },
    {
      title: "Is it at every draw that i get to win something?",
      desc: "You are qualified to win prizes including cash prizes at every draw event provided that you have a qualifying raffle tickets in such draws.",
    },
    {
      title: "What's my Catalogue Use for?",
      desc: "Kennis Music Bites powers the daily On-Demand Shout! Party whereby the music being played in the daily party are considered digital streams. These digital stream live or recorded  content may be delivered to Kennis Music Bites Cardholders' mobile devices via the internet and played back in real time.",
    },
    {
      title: "How can I monitor my Catalogue Use on this Platform?",
      desc: `Every Catalogue Owner must create a profile on the Kennis Music Bites Platform, generate a unique QRCode for the Catalogue as well as a unique code for every work submitted under this catalogue.
      Then the Kennis Music Bites Platform shall grant Catalogue Owner access (Root Access) to the backend dashboard of its Media Systems to enable the Catalogue Owner to view and query all transactions pertaining to the said Catalogue in real-time. 
      The backend dashboardís output shall be displayed on mobile device of choice for the key members of your management with assigned Root Access to such profile.`,
    },
  ];
  const [active, setActive] = useState();
  return (
    <Container>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(37rem,1fr))] gap-[5rem] items-center">
        <div>
          <h1 className=" text-primaryLighter font-bold text-[5.7rem] max-w-[511px] leading-[6rem]">Frequently Asked Questions</h1>
          <p className=" font-medium text-[1.6rem] mt-[1.6rem] text-white max-w-[462px]">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus orci laoreet lorem nibh fringilla fusce gravida. Elementum duis nulla a mauris at morbi. */}
          </p>
        </div>

        {/* Accordion */}
        <div>
          {question.map((el, i) => {
            return (
              <div key={i} className=" border-b-2 text-[1.6rem] font-normal leading-[24px] text-white py-[2.4rem]">
                <Collapsible
                  open={active == i}
                  handleTriggerClick={() => {
                    setActive(i);
                  }}
                  height={70}
                  trigger={
                    <div className="flex items-center">
                      <img src="/circle-question-mark.png"></img>
                      <p className=" font-bold text-[1.8rem] ml-[1rem] text-white">{el.title}</p>
                    </div>
                  }
                >
                  <p className=" border-t-2 pt-[2.4rem] mt-[2.4rem]">{el?.desc}</p>
                  {/* <p>It can even be another Collapsible component. Check out the next section!</p> */}
                </Collapsible>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
Faq.Layout = LandPageLayout;
export default Faq;
