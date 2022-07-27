import React from "react";
import LandPageLayout from "../Components/Layout/LandPageLayout";
import PrivacyContentDetails from "../Components/Pages/Privacy/Content";
import PrivacyNav from "../Components/Pages/Privacy/nav";

const Container = ({ children }) => {
  return <div className="max-w-[182rem] mx-auto w-full px-[4rem] sidebar:px-[10rem] relative">{children}</div>;
};

const PrivacyPolicy = () => {
  const topics = [
    {
      title: "Game Instructions",
      titleAlias: "Game Instructions",
      text: `Cardholder must make a total of N4, 000 purchase per Week to quality for 
    Week 1 prize draw.
    Cardholder must make an additional N4, 000 purchase in Week 2 to quality 
    for Week 1 and Week prize draws,
    Cardholder must make an additional N4, 000 purchase in Week 3 to quality 
    for Week 1, Week 2 and Week 3 prize draws,
    Cardholder must make an additional N4, 000 purchase in Week 4 to quality 
    for Week 1, Week 2, Week 3 and Week 4 prize draws,
    Cardholder must make an additional N4, 000 purchase in Week 5 to quality 
    for Week 1, Week 2, Week 3, Week 4 and Week 5 prize draws,
    Cardholder must make the final N4, 000 purchase in Week 6 to quality for 
    Week 1, Week 2, Week 3, Week 4, Week 5 and Week 6 prize draws,
    There are Six (6) Different Price Values ranging from N50, 000 to the Grand 
    Prize of N10, 000,000.
   `,
    },
    {
      title: "Terms and Conditions",
      titleAlias: "Terms and Conditions",
      text: `
    Participating Player must request and acquire a Kennis Music Bites Debit 
Card and become a Cardholder through the available channel.
Kennis Music Bites Cardholder must make a total of Six (6) Purchases to 
qualify for all the Six (6) Raffle Draws to Win up to N10,000,000 Cash Prize
or Win the Jackpot Prize if such Prize is introduced later into the scheme.
Kennis Music Bites Cardholder must buy a minimum of N4, 000 item at 
Partnered Merchant outlet to get a FREE Raffle ticket which qualifies the 
Cardholder’s participation for the Week I Raffle Draw which only attracts 
the Week 1 Cash Prize.
Kennis Music Bites Cardholder may also buy the N500 Raffle Ticket per 
week to qualify for the corresponding week Raffle Draw with the 
equivalent Prize for the same week.
All Cash Prize will be deposited into the Kennis Music Bites Cardholder 
Account not later than 48 hours after winning Cardholder has been 
properly identified.
Kennis Music Bites Cardholder can participate in multiply Raffle Entries 
with multiple purchases e.g. when such Cardholder makes a bulk purchase
above the N24, 000 threshold.
If a Cardholder makes a N6, 000 purchase within the first week of the 
promotions, such Cardholder will be awarded a FREE Raffle Ticket for the 
week in play e.g. Week 1 as well as awarded 2,000 Points towards the 
next purchase.
Whenever the Cardholder makes an additional purchase totaling N2, 000, 
the pending 2,000 Points will be added to the current transaction and 
another FREE Raffle Ticket will be awarded to the Cardholder denoting 
Week 2 participation.
In the event that a Kennis Music Bites Cardholder buy items totaling 
N8,000 or N12,000 or items in multiple of N4,000; 2 or 3 Raffle Tickets will
be awarded to such Kennis Music Bites Cardholder respectively.
Kennis Music and Exedia Media shall not be liable for any loss of data by 
itself or by other contracted independent service providers on whom 
Exedia Media will wholly or partially be reliant on to deliver the services.
Kennis Music Bites Cardholder (Participating Player) must submit the 
correct information during your registration. You also agree to update this 
information should there be any changes to your registration data.
Kennis Music and his partners will accept no liability from third parties 
whatsoever, resulting from Participating Player providing incorrect or false
data.
Kennis Music Bites Cardholder (Participating Player) must open only one 
account/profile. Should we identify any Participating Player with more than
one account; we reserve the right to close these accounts.
If Exedia Media detects multiple accounts which have been setup 
deliberately with misleading information, have displayed criminal 
behavior, or if Exedia concludes that the account-owner has fraudulent 
intentions, Exedia shall be entitled to close the accounts and confiscate all
Cash Prizes. In any such suspected circumstances, Exedia will report the 
activity to the appropriate authority and the player may suffer the 
consequences thereto. If you nominate another person as an authorized 
user of your account, you shall be responsible for all transactions such a 
person makes using the relevant account details, please Contact Us.
Kennis Music and Exedia Media will however not be responsible for any 
loss or damage that you may suffer as a result of transaction made by that
other person.
    `,
    },
    {
      title: "Price Values",
      titleAlias: "Price Values",
      text: `There are Six (6) Different Price Values ranging from N50, 000 to the Grand 
    Prize of N10, 000,000. N10, 000,000 | N2, 500,000 | N1, 000, 000 | N500, 000 | N250, 000 | 
    N100, 000 | N50,000`,
    },
  ];
  return (
    <Container>
      <div className="grid sidebar:grid-cols-[1fr,2fr] grid-cols-1 gap-[5rem] relative mt-10 justify-center place-content-center">
        <PrivacyNav nav={topics.map((el) => el.titleAlias)}></PrivacyNav>
        <PrivacyContentDetails nav={topics}></PrivacyContentDetails>
      </div>
    </Container>
  );
};
PrivacyPolicy.Layout = LandPageLayout;
export default PrivacyPolicy;
