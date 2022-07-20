import React from "react";
import LandPageLayout from "../Components/Layout/LandPageLayout";

const Container = ({ children }) => {
  return <div className="max-w-[182rem] mx-auto w-full px-[4rem] sidebar:px-[10rem]">{children}</div>;
};

const contact = () => {
  return (
    <Container>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] items-center gap-[3rem]">
        <div>
          <h1 className=" text-primaryLighter font-bold text-[5.7rem] max-w-[511px] leading-[6rem]">We are glad you made it here. Feel free to reach out to us.</h1>
          <p className=" font-medium text-[1.6rem] mt-[1.6rem] text-white max-w-[462px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus orci laoreet lorem nibh fringilla fusce gravida. Elementum duis nulla a mauris at morbi.
          </p>
        </div>

        {/* Contact form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="auth-form max-w-[50rem]"
        >
          <div className="form-group mb-[1.6rem]">
            <label>First Name</label>
            <input onChange={(e) => {}} placeholder="Ex. Jonathan" />
          </div>
          <div className="form-group mb-[1.6rem]">
            <label>Last Name</label>
            <input onChange={(e) => {}} placeholder="Ex. Jonathan" />
          </div>
          <div className="form-group mb-[1.6rem]">
            <label>Email</label>
            <input onChange={(e) => {}} placeholder="Ex. Jonathan" />
          </div>
          <div className="form-group mb-[1.6rem]">
            <label>How can we be of help?</label>
            <textarea row={10} cols="40" onChange={(e) => {}} placeholder="Ex. Jonathan"></textarea>
          </div>

          <button className="btn w-full mt-[3.5rem] shiny_slide_2">Submit</button>
        </form>
      </div>
    </Container>
  );
};
contact.Layout = LandPageLayout;
export default contact;
