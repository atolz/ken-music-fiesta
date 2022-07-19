import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import React, { useContext } from "react";
import EventCard2 from "./EventCard2";
import { DataContext } from "../../Context/fetchData";
import { popUpContext } from "../../Context/PopUps";

const EventsCarousel2 = () => {
  const AppData = useContext(DataContext);
  const popUpFunctions = useContext(popUpContext);
  return (
    <Carousel autoPlay={true} interval={5000} showArrows={false} stopOnHover={false}>
      {AppData.kudibarEvents?.data?.map((el, i) => {
        return (
          <EventCard2
            title={el.name}
            desc={el.description}
            img={el.cover}
            key={i}
            action={() => {
              popUpFunctions.initBuyTicket(el?.name, el?.eventSlug, el?.tickets);
            }}
          />
        );
      })}
    </Carousel>
  );
};

export default EventsCarousel2;
