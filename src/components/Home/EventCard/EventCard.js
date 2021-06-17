import React from "react";

const EventCard = (props) => {
  const { img, title, location, time, description } = props.dt;
  return (
    <div className="card mb-3" style={{ maxWidth: "450px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={img} alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{location}</p>
            <p className="card-text">{time}</p>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
