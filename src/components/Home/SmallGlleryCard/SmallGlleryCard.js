import React from "react";
import './SmallGlleryCard.css'
const SmallGlleryCard = (props) => {
  const { img, title, location } = props.gallary;
  return (
    <div className="col-md-4">
      <div className="card small-gallary-card">
        <img src={img} className=" small-gallary-img card-img-top " alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default SmallGlleryCard;
