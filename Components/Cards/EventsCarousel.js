import React, { useEffect, useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image as CarouselImage, Dot } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/image";
import EventCard from "./EventCard";
import EventCard2 from "./EventCard2";

const EventsCarouselCard = ({ data }) => {
  // const [images, setImages] = useState(["cuppy.jpg", "jack-harlow.jpg", "lil-nas.jpg", "nfl.webp", "burna.jpg", "drake.jpg"]);
  const [images, setImages] = useState(["event-img.jpg", "bg-party.jpg"]);
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [intervalRef, setIntervalRef] = useState(null);
  const [play, setPlay] = useState(true);

  const onNext = () => {
    setPlay(true);
    // console.log("onNext, setActive is", active);
    if (active < images.length - 1) {
      setActive((val) => val + 1);
    } else {
      setActive(0);
    }
  };

  const clearIntervalFunc = () => {
    setPlay(true);
    if (intervalRef) {
      // console.log("clear interval", intervalRef);
      clearInterval(intervalRef);
    }
  };

  useEffect(() => {
    if (loaded) {
      const refTimer = setInterval(() => {
        // console.log("In imtervel", active);
        onNext();
      }, 3500);
      setIntervalRef(refTimer);
    } else {
      setLoaded(true);
    }
  }, [loaded]);

  useEffect(() => {
    if (active == images.length) {
      setActive(0);
    }
  }, [active]);

  // useEffect(() => {
  //   console.log("Adds is in carousel is", data);
  // }, [data]);

  return (
    <CarouselProvider isPlaying={play} interval={3500} infinite={true} className="relative" naturalSlideWidth={300} naturalSlideHeight={220} totalSlides={images.length}>
      {/* <div className="relative"> */}
      <div className="rounded-[13px] overflow-hidden relative shadow-sm">
        <Slider>
          {images.map((img, i) => {
            return (
              <Slide key={i} className="bg-red-400 " index={i}>
                {/* I am the first Slide. */}
                {/* <CarouselImage className=" object-cover object-top" src={`/${img}`} /> */}
                <EventCard2></EventCard2>
                {/* <CarouselImage className=" object-cover object-center" src={ad.image} /> */}
              </Slide>
            );
          })}
        </Slider>
        {/* Dot Navigation */}

        <div className="flex items-center gap-2 absolute bottom-4 left-1/2 -translate-x-1/2">
          {images.map((img, i) => {
            return (
              <Dot key={i} slide={i}>
                <button
                  onClick={() => {
                    console.log("clearing interval", intervalRef);
                    clearIntervalFunc();
                    setActive(i);
                  }}
                  className={` h-[0.7rem] w-[0.7rem] rounded-full bg-white opacity-70 flex`}
                ></button>
                {/* <button
                  onClick={() => {
                    console.log("clearing interval", intervalRef);
                    clearIntervalFunc();
                    setActive(i);
                  }}
                  className={` h-2 w-2 rounded-full bg-white ${active == i ? " opacity-100 scale-[1.2]" : "opacity-50 scale-100"} flex`}
                ></button> */}
              </Dot>
            );
          })}
        </div>
      </div>

      {/* </div> */}
    </CarouselProvider>
  );
};

export default EventsCarouselCard;
