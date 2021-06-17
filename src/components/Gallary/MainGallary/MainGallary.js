import React from "react";
import img1 from "../../../images/m-1.png";
import GallaryCard from "./../GallaryCard/GallaryCard";
const MainGallary = () => {
  const GallaryData = [
    {
      img: img1,
      title: "ANCIENT STATUES COLLECTIONS",
      location: "ORGIN: Naples, Italy",
    },
    {
      img: img1,
      title: "ANCIENT STATUES COLLECTIONS",
      location: "ORGIN: Naples, Italy",
    },
    {
      img: img1,
      title: "ANCIENT STATUES COLLECTIONS",
      location: "ORGIN: Naples, Italy",
    },
    {
      img: img1,
      title: "ANCIENT STATUES COLLECTIONS",
      location: "ORGIN: Naples, Italy",
    },
    {
      img: img1,
      title: "ANCIENT STATUES COLLECTIONS",
      location: "ORGIN: Naples, Italy",
    },
    {
      img: img1,
      title: "ANCIENT STATUES COLLECTIONS",
      location: "ORGIN: Naples, Italy",
    },
  ];
  return (
    <div className="row">
      {GallaryData.map((dt) => (
        <GallaryCard dt={dt} />
      ))}
    </div>
  );
};

export default MainGallary;
