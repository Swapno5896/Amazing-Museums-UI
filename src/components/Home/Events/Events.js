import React from "react";
import img1 from "../../../images/m-1.png";
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
      img: img1,
      title: "LET’S CELEBRATE 25TH MUSEUM DAY",
      location: " Melbourne, Australia",
      time: "Wed 10AM - 12PM",
      description:
        "I have always wanted to have a neighbor just like you. I've always wanted to live in a neighborhood with you",
    },
    {
      img: img1,
      title: "LET’S CELEBRATE 25TH MUSEUM DAY",
      location: " Melbourne, Australia",
      time: "Wed 10AM - 12PM",
      description:
        "I have always wanted to have a neighbor just like you. I've always wanted to live in a neighborhood with you",
    },
    {
      img: img1,
      title: "LET’S CELEBRATE 25TH MUSEUM DAY",
      location: " Melbourne, Australia",
      time: "Wed 10AM - 12PM",
      description:
        "I have always wanted to have a neighbor just like you. I've always wanted to live in a neighborhood with you",
    },
  ];
  return (
    <div className="row">
      {eventData.map((dt) => (
        <EventCard dt={dt} />
      ))}
    </div>
  );
};

export default Events;
