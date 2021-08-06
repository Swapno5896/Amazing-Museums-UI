import React from "react";
import './SmallGlleryCard.css'
const SmallGlleryCard = (props) => {
  const { img, title, location } = props.gallary;
  return (
    <div className="col  border border-success p-2  g-4">
      <div className="card small-gallary-card">
        <img src={img} className=" small-gallary-img card-img-top " alt="..." />
        <div style={{backgroundColor:'#796a6a'}} className="card-body ">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default SmallGlleryCard;
