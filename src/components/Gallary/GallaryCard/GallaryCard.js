import React from "react";
import './GallaryCard.css'
const GallaryCard = (props) => {
  const { img, title, location } = props.dt;
  return (
    <div className="col-md-4">
      <div className="card gallary-card">
        <img src={img} className="card-img-top gallary-img" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default GallaryCard;
