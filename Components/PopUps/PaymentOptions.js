import React from "react";
import PopupLayout from "../Layout/Popup";
import Radio from "@mui/material/Radio";
import Image from "next/image";

const PaymentOptions = ({ onSelectPayOption, onCancel }) => {
  const [selectedValue, setSelectedValue] = React.useState("PAYSTACK");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log("pay method", event.target.value);
  };

  return (
    <div>
      <PopupLayout
        cancelAction={onCancel}
        action={() => {
          onSelectPayOption("PAYSTACK");
        }}
        actionText={"Continue"}
      >
        <div className="popup-box">
          <h3>Payment Option</h3>
          <p className="">Choose a payment option to complete purchase of raffle tickets</p>

          {/* Payment options */}
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="rounded-[2rem] flex-grow bg-white px-[4.1rem] py-[4.7rem] flex justify-between items-center default-shadow">
              {/* <img className="mr-[1rem] w-[19.2rem]" src="/paystack.svg" /> */}
              {/* <Image className="mr-[1rem]" width={192} height={35} src="/paystack.svg" alt="paystack"></Image> */}
              <svg className="w-[15rem] mobile:w-[19.2rem] h-[3.4rem]" viewBox="0 0 192 34" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m27.99 3.2446h-25.572c-0.85875 0-1.5903 0.73153-1.5903 1.6221v2.8943c0 0.89055 0.73152 1.6221 1.5903 1.6221h25.572c0.8905 0 1.5902-0.73153 1.622-1.6221v-2.8625c0-0.92236-0.7315-1.6539-1.622-1.6539zm0 16.062h-25.572c-0.41347 0-0.82694 0.159-1.1132 0.4771-0.31806 0.318-0.47708 0.6997-0.47708 1.145v2.8943c0 0.8905 0.73152 1.6221 1.5903 1.6221h25.572c0.8905 0 1.5902-0.6998 1.622-1.6221v-2.8943c-0.0318-0.9224-0.7315-1.6221-1.622-1.6221zm-11.164 8.015h-14.408c-0.41347 0-0.82694 0.159-1.1132 0.4771-0.28625 0.318-0.47708 0.6997-0.47708 1.145v2.8943c0 0.8905 0.73152 1.622 1.5903 1.622h14.376c0.8905 0 1.5902-0.7315 1.5902-1.5902v-2.8943c0.0318-0.9542-0.6679-1.6857-1.5584-1.6539zm12.786-16.062h-27.194c-0.41347 0-0.82694 0.159-1.1132 0.4771-0.28625 0.318-0.47708 0.6997-0.47708 1.145v2.8943c0 0.8905 0.73152 1.6221 1.5903 1.6221h27.162c0.8906 0 1.5903-0.7316 1.5903-1.6221v-2.8943c0.0318-0.8906-0.6997-1.5903-1.5585-1.6221z"
                  fill="#00C3F7"
                />
                <path
                  d="m59.348 9.7325c-0.7952-0.82694-1.7175-1.463-2.7671-1.9083-1.0496-0.44528-2.1628-0.66792-3.3078-0.66792-1.1131-0.0318-2.1945 0.22264-3.2123 0.69972-0.6679 0.31805-1.2722 0.76333-1.7811 1.304v-0.50888c0-0.25445-0.0954-0.50889-0.2545-0.69972-0.159-0.19084-0.4134-0.31806-0.6997-0.31806h-3.5304c-0.2544 0-0.5089 0.09542-0.6679 0.31806-0.1908 0.19083-0.2862 0.44527-0.2544 0.69972v23.79c0 0.2545 0.0954 0.5089 0.2544 0.6998 0.1908 0.1908 0.4135 0.2862 0.6679 0.2862h3.6258c0.2545 0 0.4771-0.0954 0.668-0.2862 0.1908-0.1591 0.318-0.4135 0.2862-0.6998v-8.1422c0.5089 0.5725 1.1768 0.986 1.9083 1.2405 0.9542 0.3498 1.9402 0.5407 2.9579 0.5407 1.145 0 2.29-0.2227 3.3396-0.668 1.0496-0.4452 2.0037-1.0813 2.7989-1.9083 0.8269-0.8587 1.463-1.8765 1.9083-2.9897 0.5089-1.2404 0.7315-2.5762 0.6997-3.9121 0.0318-1.3358-0.2226-2.6716-0.6997-3.9438-0.4771-1.0496-1.1132-2.0674-1.9401-2.9261zm-3.2442 8.6192c-0.1908 0.5089-0.4771 0.9542-0.8587 1.3677-0.7315 0.7951-1.7811 1.2404-2.8625 1.2404-0.5407 0-1.0814-0.0954-1.5903-0.3499-0.4771-0.2226-0.9223-0.5089-1.304-0.8905-0.3817-0.3817-0.6679-0.8588-0.8587-1.3677-0.4135-1.0813-0.4135-2.2581 0-3.3395 0.1908-0.5089 0.5088-0.9542 0.8587-1.3359 0.3817-0.3816 0.8269-0.6997 1.304-0.9223 0.5089-0.2227 1.0496-0.3499 1.5903-0.3499 0.5725 0 1.0814 0.0954 1.6221 0.3499 0.477 0.2226 0.9223 0.5089 1.2722 0.8905 0.3816 0.3817 0.6361 0.827 0.8587 1.3359 0.3817 1.1131 0.3499 2.29-0.0318 3.3713zm25.317-10.687h-3.594c-0.2544 0-0.5089 0.09541-0.6679 0.28625-0.1908 0.19083-0.2862 0.44527-0.2862 0.73152v0.44528c-0.4453-0.5407-1.0178-0.95416-1.6221-1.2404-0.986-0.47708-2.0674-0.69972-3.1488-0.69972-2.3217 0-4.5163 0.92236-6.1702 2.5444-0.8587 0.85874-1.5267 1.8765-1.9719 2.9897-0.5089 1.2404-0.7634 2.5762-0.7316 3.9438-0.0318 1.3359 0.2227 2.6717 0.7316 3.9439 0.477 1.1132 1.1132 2.131 1.9719 2.9897 1.6221 1.6539 3.8485 2.5763 6.1384 2.5763 1.0814 0.0318 2.1628-0.2227 3.1488-0.6997 0.6043-0.3181 1.2086-0.7316 1.6539-1.2405v0.4771c0 0.2545 0.0954 0.5089 0.2862 0.6997 0.1908 0.1591 0.4135 0.2863 0.6679 0.2863h3.594c0.2545 0 0.5089-0.0954 0.6679-0.2863 0.1909-0.1908 0.2863-0.4452 0.2863-0.6997v-15.998c0-0.25445-0.0954-0.50889-0.2544-0.69972-0.1909-0.22264-0.4453-0.34986-0.6998-0.34986zm-4.8662 10.687c-0.1908 0.5089-0.4771 0.9542-0.8587 1.3677-0.3817 0.3816-0.7952 0.6997-1.2723 0.9223-1.0177 0.4771-2.1945 0.4771-3.2123 0-0.4771-0.2226-0.9224-0.5407-1.304-0.9223-0.3817-0.3817-0.6679-0.8588-0.8588-1.3677-0.3816-1.0813-0.3816-2.2581 0-3.3395 0.1909-0.5089 0.4771-0.9224 0.8588-1.3359 0.3816-0.3816 0.7951-0.6997 1.304-0.9223 1.0178-0.4771 2.1946-0.4771 3.1805 0 0.4771 0.2226 0.9224 0.5089 1.2723 0.8905 0.3498 0.3817 0.6361 0.827 0.8587 1.3359 0.4453 1.1131 0.4453 2.29 0.0318 3.3713zm40.679-2.1627c-0.509-0.4453-1.113-0.827-1.749-1.0814-0.668-0.2863-1.4-0.4771-2.099-0.6361l-2.736-0.5407c-0.699-0.1272-1.208-0.3181-1.463-0.5407-0.222-0.159-0.381-0.4135-0.381-0.6997 0-0.2863 0.159-0.5407 0.508-0.7634 0.478-0.2544 0.986-0.3816 1.527-0.3498 0.7 0 1.4 0.159 2.036 0.4135 0.636 0.2862 1.24 0.5724 1.813 0.9541 0.795 0.5089 1.494 0.4135 1.972-0.159l1.304-1.4949c0.254-0.2544 0.381-0.5725 0.413-0.9223-0.032-0.38169-0.223-0.69975-0.509-0.95419-0.541-0.47708-1.431-0.98597-2.608-1.4949s-2.672-0.76333-4.421-0.76333c-1.081-0.0318-2.131 0.12722-3.149 0.44528-0.858 0.28624-1.685 0.69972-2.417 1.2404-0.668 0.50889-1.177 1.145-1.558 1.9083-0.35 0.7316-0.541 1.5267-0.541 2.3218 0 1.4949 0.445 2.7035 1.336 3.594 0.89 0.8906 2.067 1.4949 3.53 1.7811l2.863 0.6362c0.604 0.0954 1.24 0.2862 1.813 0.5725 0.318 0.1272 0.509 0.4452 0.509 0.7951 0 0.318-0.159 0.6043-0.509 0.8587-0.35 0.2545-0.923 0.4135-1.686 0.4135s-1.558-0.159-2.258-0.5089c-0.668-0.318-1.272-0.7315-1.845-1.2086-0.254-0.1908-0.509-0.3498-0.827-0.4771-0.318-0.0954-0.731 0-1.145 0.3499l-1.558 1.1768c-0.446 0.3181-0.668 0.8587-0.541 1.3676 0.095 0.5407 0.509 1.0496 1.304 1.6539 1.972 1.3358 4.326 2.0356 6.711 1.9719 1.113 0 2.226-0.1272 3.276-0.4452 0.922-0.2863 1.781-0.6997 2.544-1.2722 0.7-0.5089 1.273-1.1769 1.654-1.972 0.382-0.7633 0.573-1.5903 0.573-2.449 0.032-0.7633-0.128-1.5267-0.446-2.2264-0.318-0.5089-0.731-1.0496-1.24-1.4948zm15.712 4.3573c-0.159-0.2862-0.445-0.4771-0.795-0.5407-0.318 0-0.668 0.0954-0.923 0.2863-0.445 0.2862-0.954 0.4452-1.463 0.477-0.159 0-0.349-0.0318-0.509-0.0636-0.19-0.0318-0.349-0.1272-0.477-0.2544-0.159-0.159-0.286-0.3499-0.381-0.5407-0.127-0.3181-0.191-0.6361-0.159-0.9542v-6.5201h4.643c0.287 0 0.541-0.1272 0.732-0.318 0.191-0.1909 0.318-0.4135 0.318-0.6998v-2.767c0-0.28625-0.096-0.5407-0.318-0.69972-0.191-0.19084-0.445-0.28625-0.7-0.28625h-4.675v-4.4528c0-0.25444-0.096-0.5407-0.287-0.69972-0.19-0.15903-0.413-0.25444-0.667-0.28625h-3.626c-0.255 0-0.509 0.09541-0.7 0.28625-0.191 0.19083-0.318 0.44528-0.318 0.69972v4.4528h-2.067c-0.255 0-0.509 0.09542-0.7 0.31805-0.159 0.19084-0.255 0.44528-0.255 0.69972v2.7671c0 0.2544 0.096 0.5088 0.255 0.6997 0.159 0.2226 0.413 0.318 0.7 0.318h2.067v7.7606c-0.032 0.9223 0.159 1.8447 0.541 2.6716 0.35 0.6997 0.795 1.304 1.399 1.8129 0.573 0.4771 1.24 0.827 1.972 1.0178 0.732 0.2226 1.495 0.3499 2.258 0.3499 0.986 0 2.004-0.1591 2.958-0.4771 0.891-0.2863 1.686-0.7952 2.322-1.4631 0.413-0.4135 0.445-1.0814 0.127-1.5584l-1.272-2.0356zm19.656-12.881h-3.594c-0.255 0-0.477 0.09541-0.668 0.28625-0.191 0.19083-0.287 0.44527-0.287 0.73152v0.44528c-0.445-0.5407-0.985-0.95416-1.622-1.2404-0.986-0.47708-2.067-0.69972-3.148-0.69972-2.322 0-4.517 0.92236-6.171 2.5444-0.858 0.85874-1.526 1.8765-1.972 2.9897-0.508 1.2404-0.763 2.5762-0.731 3.912-0.032 1.3359 0.223 2.6717 0.731 3.9439 0.446 1.1132 1.145 2.131 1.972 2.9897 1.622 1.6539 3.817 2.5763 6.139 2.5763 1.081 0.0318 2.163-0.2227 3.149-0.6679 0.636-0.3181 1.208-0.7316 1.653-1.2405v0.4771c0 0.2545 0.096 0.5089 0.287 0.6679 0.191 0.1909 0.413 0.2863 0.668 0.2863h3.594c0.54 0 0.954-0.4135 0.954-0.9542v-15.998c0-0.25445-0.096-0.50889-0.255-0.69972-0.159-0.22264-0.413-0.34986-0.699-0.34986zm-4.835 10.687c-0.191 0.5089-0.477 0.9542-0.859 1.3677-0.381 0.3816-0.795 0.6997-1.272 0.9223-0.509 0.2227-1.049 0.3499-1.622 0.3499-0.572 0-1.081-0.1272-1.59-0.3499-0.477-0.2226-0.922-0.5407-1.304-0.9223-0.382-0.3817-0.668-0.8588-0.827-1.3677-0.382-1.0813-0.382-2.2581 0-3.3395 0.191-0.5089 0.477-0.9542 0.827-1.3359 0.382-0.3816 0.827-0.6997 1.304-0.9223 0.509-0.2227 1.049-0.3499 1.59-0.3499s1.082 0.0954 1.622 0.3499c0.477 0.2226 0.891 0.5089 1.272 0.8905 0.382 0.3817 0.668 0.827 0.859 1.3359 0.414 1.0813 0.414 2.29 0 3.3713zm24.554 1.9402-2.067-1.5903c-0.382-0.3181-0.764-0.4135-1.082-0.2863-0.286 0.1273-0.54 0.3181-0.763 0.5407-0.445 0.5407-0.986 1.0178-1.559 1.4313-0.636 0.3498-1.304 0.5407-2.003 0.4771-0.827 0-1.591-0.2227-2.258-0.6998-0.668-0.477-1.177-1.1131-1.432-1.9083-0.191-0.5407-0.286-1.0814-0.286-1.6221 0-0.5725 0.095-1.1132 0.286-1.6856 0.191-0.5089 0.446-0.9542 0.827-1.3359 0.382-0.3816 0.795-0.6997 1.272-0.8905 0.509-0.2227 1.05-0.3499 1.623-0.3499 0.699-0.0318 1.399 0.159 2.003 0.5089 0.605 0.3817 1.113 0.8587 1.559 1.4312 0.191 0.2227 0.445 0.4135 0.731 0.5407 0.318 0.1273 0.7 0.0318 1.082-0.2862l2.067-1.5585c0.254-0.159 0.445-0.4134 0.541-0.6997 0.127-0.318 0.095-0.6679-0.096-0.9542-0.795-1.2404-1.876-2.2582-3.18-2.9897-1.368-0.76333-2.99-1.1768-4.803-1.1768-1.272 0-2.544 0.25444-3.753 0.73152-1.145 0.47708-2.163 1.145-3.021 2.0037-0.859 0.85871-1.559 1.8765-2.036 3.0215-0.986 2.3854-0.986 5.0571 0 7.4425 0.477 1.1132 1.145 2.1627 2.036 2.9897 1.812 1.7811 4.23 2.7353 6.774 2.7353 1.813 0 3.435-0.4135 4.803-1.1768 1.304-0.7316 2.417-1.7493 3.212-3.0216 0.159-0.2862 0.191-0.6361 0.095-0.9223-0.127-0.2545-0.318-0.5089-0.572-0.6997zm19.147 3.7212-5.693-8.333 4.866-6.4247c0.223-0.28625 0.318-0.69972 0.191-1.0496-0.096-0.25444-0.318-0.50889-0.923-0.50889h-3.848c-0.223 0-0.445 0.06361-0.636 0.15903-0.255 0.12722-0.445 0.31805-0.573 0.54069l-3.88 5.4388h-0.922v-12.849c0-0.25444-0.096-0.50889-0.287-0.69972-0.19-0.19083-0.413-0.28625-0.667-0.28625h-3.594c-0.255 0-0.509 0.095414-0.7 0.28625-0.191 0.19083-0.286 0.41347-0.286 0.69972v23.695c0 0.2863 0.095 0.5089 0.286 0.6997 0.191 0.1909 0.445 0.2863 0.7 0.2863h3.594c0.254 0 0.508-0.0954 0.667-0.2863 0.191-0.1908 0.287-0.4452 0.287-0.6997v-6.2657h1.017l4.231 6.4883c0.254 0.4771 0.731 0.7634 1.24 0.7634h4.039c0.605 0 0.859-0.2863 0.986-0.5407 0.159-0.3817 0.128-0.7951-0.095-1.1132zm-89.628-16.348h-4.0391c-0.318 0-0.6043 0.09542-0.8269 0.31805-0.1909 0.19084-0.3181 0.41347-0.3817 0.66792l-2.9897 11.068h-0.7315l-3.1806-11.068c-0.0636-0.22264-0.159-0.44528-0.318-0.66792-0.1908-0.22263-0.4453-0.34986-0.7315-0.34986h-4.1029c-0.5407 0-0.8588 0.15903-1.0178 0.54069-0.0954 0.31806-0.0954 0.66792 0 0.98597l5.0889 15.585c0.0954 0.2227 0.1908 0.4771 0.3816 0.6361 0.1909 0.1909 0.4771 0.2863 0.7634 0.2863h2.1627l-0.1908 0.5089-0.4771 1.4312c-0.159 0.4453-0.4135 0.8269-0.7951 1.1132-0.3499 0.2544-0.7634 0.4135-1.2086 0.3817-0.3817 0-0.7316-0.0955-1.0814-0.2227-0.3499-0.159-0.6679-0.3498-0.9542-0.5725-0.2544-0.1908-0.5725-0.2862-0.9223-0.2862h-0.0318c-0.3817 0.0318-0.7316 0.2226-0.9224 0.5725l-1.2722 1.8765c-0.5089 0.8269-0.2227 1.3358 0.0954 1.6221 0.6997 0.6361 1.4949 1.1132 2.3854 1.3994 0.986 0.3499 2.0037 0.5089 3.0215 0.5089 1.8447 0 3.3714-0.5089 4.5482-1.4948 1.2086-1.0814 2.131-2.4809 2.5762-4.0711l5.9163-19.274c0.127-0.34986 0.159-0.69971 0.031-1.0178-0.031-0.22264-0.254-0.47708-0.795-0.47708z"
                  fill="#011B33"
                />
              </svg>
              <Radio checked={selectedValue === "PAYSTACK"} onChange={handleChange} value="PAYSTACK" name="radio-buttons" inputProps={{ "aria-label": "paystack" }} />
            </div>
            <div className="rounded-[2rem] flex-grow bg-white px-[4.1rem] py-[4.7rem] flex items-center justify-between default-shadow">
              {/* <img className="mr-[1rem] w-[19.2rem]" src="/flutterwave.svg" /> */}
              {/* <Image className="mr-[1rem]" width={192} height={35} src="/flutterwave.svg" alt="paystack"></Image> */}

              <svg className="w-[15rem] mobile:w-[19.2rem] h-[3.4rem]" viewBox="0 0 173 34" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m56.974 7.9316h0.0574c0.3445 0 0.5455 0.25839 0.5455 0.6029v15.474c0 0.2583-0.201 0.5454-0.5455 0.5454-0.2584 0-0.5455-0.2009-0.5455-0.5454v-15.532c0-0.28709 0.201-0.54548 0.4881-0.54548zm-14.728 0.80387h10.134c0.3445 0 0.5454 0.34451 0.5454 0.6029 0 0.25838-0.2009 0.54548-0.5454 0.54548h-9.589v6.4596h8.6703c0.2583 0 0.5454 0.201 0.5454 0.5455 0 0.2584-0.2009 0.5455-0.5454 0.5455h-8.5842v6.6606c-0.0574 0.3445-0.3445 0.6029-0.6603 0.6029-0.3445 0-0.6029-0.2584-0.6029-0.6029v-14.728h0.0574c-0.0287-0.37323 0.2584-0.63161 0.5742-0.63161zm29.427 4.7945c0-0.3445-0.2583-0.5455-0.5454-0.5455-0.3445 0-0.5455 0.2584-0.5455 0.5455v6.4596c0 2.2107-1.8087 3.9332-4.0193 3.8758-2.3542 0-3.7036-1.5216-3.7036-3.9332v-6.4022c0-0.3445-0.2584-0.5455-0.5454-0.5455-0.2584 0-0.5455 0.2584-0.5455 0.5455v6.6032c0 2.7274 1.7513 4.737 4.6222 4.737 1.7513 0.0575 3.4164-0.8612 4.2203-2.4116v1.6652c0 0.3445 0.2584 0.5455 0.5455 0.5455 0.3445 0 0.5455-0.2584 0.5455-0.5455h-0.0575v-10.594h0.0287zm10.192 0.0861c0 0.2584-0.2584 0.4594-0.5455 0.4594h-3.7035v7.407c0 1.6652 0.9474 2.2681 2.3542 2.2681 0.4593 0 0.9474-0.0575 1.3493-0.201 0.2584 0 0.4594 0.201 0.4594 0.4594 0 0.2009-0.1436 0.4019-0.3445 0.4593-0.5455 0.201-1.1484 0.2584-1.6652 0.2584-1.7512 0-3.2154-1.0048-3.2154-3.1293v-7.5219h-1.2633c-0.2583 0-0.5454-0.2584-0.5454-0.5455 0-0.2584 0.2584-0.4594 0.5454-0.4594h1.2633v-3.1867c0-0.25839 0.2009-0.54548 0.4593-0.54548h0.0574c0.2584 0 0.5455 0.25838 0.5455 0.54548v3.1867h3.7035c0.2871 0 0.5455 0.2584 0.5455 0.5455zm8.6129 0.4594c0.2584 0 0.5455-0.201 0.5455-0.4594s-0.2584-0.5455-0.5455-0.5455h-3.7036v-3.1867c0-0.25839-0.2583-0.54548-0.5454-0.54548h-0.0575c-0.2583 0-0.4593 0.25838-0.4593 0.54548v3.1867h-1.2632c-0.2584 0-0.5455 0.201-0.5455 0.4594s0.2584 0.5455 0.5455 0.5455h1.2632v7.5219c0 2.1245 1.4642 3.1293 3.2155 3.1293 0.5454 0 1.1483-0.0574 1.6651-0.2584 0.201-0.0574 0.3445-0.2584 0.3445-0.4593 0-0.2584-0.2009-0.4594-0.4593-0.4594-0.402 0.1435-0.8613 0.201-1.3494 0.201-1.4067 0-2.3542-0.6029-2.3542-2.2681v-7.407h3.7036zm2.5551 4.737c0-3.3877 2.3542-6.0577 5.5122-6.0577 3.3016 0 5.3686 2.67 5.3686 6.0577 0 0.2584-0.258 0.5455-0.545 0.5455h-9.13c0.201 2.871 2.2968 4.5361 4.5648 4.5361 1.4072 0 2.8132-0.6029 3.7612-1.6077 0.057-0.0574 0.201-0.1436 0.344-0.1436 0.259 0 0.546 0.2584 0.546 0.5455 0 0.1436-0.058 0.2584-0.201 0.402-1.149 1.2632-2.814 1.9235-4.5076 1.8661-3.1006 0-5.7132-2.4116-5.7132-6.0577v-0.0862zm15.245-2.4116c0.746-1.9235 2.555-3.3303 4.622-3.4738 0.345 0 0.603 0.2584 0.603 0.6603 0 0.2584-0.201 0.6029-0.545 0.6029h-0.058c-2.498 0.2584-4.622 2.0671-4.622 5.7993v4.2777c-0.057 0.3446-0.258 0.5455-0.603 0.5455-0.258 0-0.545-0.2584-0.545-0.5455v-10.68c0.057-0.3445 0.258-0.5455 0.602-0.5455 0.259 0 0.546 0.2584 0.546 0.5455v2.8135zm22.939-4.0767c-0.804 0-1.464 0.5455-1.665 1.3206l-1.953 6.2013-1.952-6.2013c-0.201-0.8038-0.947-1.4067-1.808-1.4067h-0.201c-0.862 0-1.608 0.5454-1.809 1.4067l-1.952 6.1439-1.867-6.2013c-0.2-0.7464-0.861-1.3206-1.665-1.3206h-0.057c-0.861 0-1.55 0.7464-1.55 1.6077 0 0.2584 0.057 0.5455 0.143 0.8039l3.015 8.6128c0.201 0.8613 0.947 1.4642 1.866 1.5216h0.143c0.862 0 1.608-0.6029 1.866-1.4642l1.953-6.1438 1.952 6.1438c0.201 0.8613 1.005 1.4642 1.866 1.4642h0.144c0.947 0 1.751-0.6029 1.952-1.5216l3.014-8.6702c0.058-0.201 0.144-0.4594 0.144-0.6604v-0.0574c-0.029-0.89-0.689-1.579-1.579-1.579zm4.708 0.6029c1.263-0.4019 2.555-0.6603 3.905-0.6029 1.866 0 3.215 0.5455 4.22 1.4068 0.947 1.0622 1.407 2.469 1.349 3.8757v5.4548c0 0.9475-0.746 1.6652-1.665 1.6652-0.861 0-1.608-0.6029-1.665-1.4642-0.947 1.0048-2.297 1.6077-3.703 1.5216-2.211 0-4.163-1.3206-4.163-3.7322 0-2.67 2.009-3.9332 4.909-3.9332 1.005 0 2.01 0.1435 2.957 0.4593v-0.2009c0-1.4642-0.861-2.2107-2.613-2.2107-0.803 0-1.607 0.0574-2.411 0.3445-0.144 0.0575-0.345 0.0575-0.459 0.0575-0.804 0.0574-1.465-0.5455-1.465-1.3207-0.057-0.5742 0.259-1.1196 0.804-1.3206zm19.81 0.5455c0.201-0.7465 0.861-1.2058 1.607-1.2058 0.948 0 1.666 0.7464 1.666 1.6077v0.0574c0 0.2584-0.058 0.5455-0.201 0.8039l-3.618 8.6128c-0.344 0.8613-1.148 1.4068-2.009 1.4642h-0.201c-0.948-0.0574-1.666-0.6603-1.953-1.5216l-3.761-8.6128c-0.143-0.2584-0.201-0.5455-0.201-0.8039 0.058-0.9474 0.804-1.6077 1.666-1.6077 0.804 0 1.464 0.5455 1.665 1.2632l2.612 7.0051 2.728-7.0625zm4.651 5.5983c0.143 3.3303 3.014 5.9429 6.373 5.7419 1.551 0 3.015-0.4593 4.221-1.4642 0.344-0.2583 0.459-0.6029 0.459-1.0048v-0.0574c0-0.7465-0.603-1.3207-1.349-1.3207-0.259 0-0.603 0.0575-0.804 0.2584-0.747 0.5455-1.608 0.8613-2.498 0.8039-1.464 0.0574-2.756-0.9474-2.957-2.4116h6.919c0.861-0.0574 1.55-0.8039 1.464-1.6651v-0.2584c0-3.0145-2.613-5.541-5.828-5.4548-3.56 0-6.058 2.8709-6.058 6.3448v0.488h0.058z"
                  fill="#10112B"
                />
                <path
                  d="m94.162 18.267c0.201-2.5265 2.0097-4.4787 4.3065-4.4787 2.6128 0 4.0198 2.1245 4.1628 4.4787h-8.4693zm47.945 2.0096c0 1.3207-1.149 2.1245-2.756 2.0671-1.063 0-1.867-0.5455-1.867-1.4642v-0.0574c0-1.0048 0.948-1.6651 2.412-1.6651 0.746 0 1.55 0.2009 2.211 0.4593v0.6603zm24.317-5.2825c-1.407 0-2.355 1.0048-2.613 2.6125h5.168c-0.201-1.5503-1.149-2.6125-2.555-2.6125z"
                  fill="#fff"
                />
                <path
                  d="m24.281 0.26632c15.101-2.268 5.4261 10.594 0.7464 14.211 3.2155 2.4691 6.5171 5.9429 7.9238 9.8761 2.6126 7.2061-3.8183 8.2683-8.6702 6.4596-5.3113-1.8661-9.9909-5.8567-13.092-10.536-0.8613 0-1.8087-0.1435-2.6987-0.4019 1.7513 4.9381 2.4978 9.9909 2.0097 14.125 0-8.3258-3.9619-16.594-9.6751-23.484-2.0097-2.4116 0.057417-4.1916 1.8661-1.8661 1.2345 1.6939 2.3542 3.4451 3.359 5.2538 1.981-6.7754 11.627-12.69 18.231-13.637zm-2.1532 12.259c2.957-1.8087 11.943-11.455 3.5599-10.594-4.8232 0.54548-10.68 4.9954-13.092 7.8664 3.359-0.40194 6.7754 1.0622 9.5316 2.7274zm-8.3258 7.4932c2.6987 3.0145 6.3735 5.9428 10.335 7.0051 2.2968 0.6029 4.8232 0.3445 3.9045-2.9284-0.9474-3.0145-3.359-5.6558-5.7132-7.6654-0.6603 0.4593-1.4067 0.9474-2.1532 1.2632-2.0097 1.1197-4.1629 1.9235-6.3735 2.3255z"
                  fill="#EBA12A"
                />
                <path d="m12.509 11.922c2.2967-0.201 4.7657 1.0048 6.6606 2.2106-1.8087 0.8613-3.8184 1.4068-5.9142 1.5216-3.0719 0.0287-3.7035-3.4451-0.7464-3.7322z" fill="#fff" />
              </svg>

              <Radio
                // sx={{
                //   "& .MuiSvgIcon-root": {
                //     fontSize: 20,
                //   },
                // }}
                checked={selectedValue === "flutterwave"}
                onChange={handleChange}
                value="flutterwave"
                name="radio-buttons"
                inputProps={{ "aria-label": "flutterwave" }}
              />
            </div>
          </div>
        </div>
      </PopupLayout>
    </div>
  );
};

export default PaymentOptions;
