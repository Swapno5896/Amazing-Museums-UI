import React from "react";
import img1 from "../../../images/museum-1.png";
import img2 from "../../../images/museum-2.jpg";
import img3 from "../../../images/museum-3.jpg";
import img4 from "../../../images/museum-4.png";
import EventCard from "../../Events/EventCard/EventCard";
const Events = () => {
  const eventData = [
    {
      img: img1,
      title: "LET’S CELEBRATE 25TH MUSEUM DAY",
      location: " Melbourne, Australia",
      time: "Wed 10AM - 12PM",
      description:
        "I have always wanted to have a neighbor just like you. I've always wanted to live in a neighborhood with you",
    },
    {
      img: img2,
      title: "ANCIENT STATUES CASE STUDY",
      location: " Melbourne, Australia",
      time: "Wed 10AM - 12PM",
      description:
        "I have always wanted to have a neighbor just like you. I've always wanted to live in a neighborhood with you",
    },
    {
      img: img3,
      title: "LET’S CELEBRATE 25TH MUSEUM DAY",
      location: " Melbourne, Australia",
      time: "Wed 10AM - 12PM",
      description:
        "I have always wanted to have a neighbor just like you. I've always wanted to live in a neighborhood with you",
    },
    {
      img: img4,
      title: "LET’S CELEBRATE 25TH MUSEUM DAY",
      location: " Melbourne, Australia",
      time: "Wed 10AM - 12PM",
      description:
        "I have always wanted to have a neighbor just like you. I've always wanted to live in a neighborhood with you",
    },
  ];
  return (
    <div className="mt-4 pt-3 mb-5 pb-4">
      <h2 className="text-center p-3 mt-3">EVENTS</h2>
      <p className="text-center pb-2">
        The movie star the professor and Mary Ann here on Gilligans Isle. Just
        sit right back and you'll hear.
      </p>

      <div className="d-flex justify-content-center">
        <div className="row w-75">
          {eventData.map((dt) => (
            <EventCard dt={dt} width={''} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
