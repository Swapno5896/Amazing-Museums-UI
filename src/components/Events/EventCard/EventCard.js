import React from "react";
import './EventCard.css'
const EventCard = (props) => {
  const { img, title, location, time, description } = props.dt;
  return (
    <div style={{ width: "100%" }} className=" event-cardd shadow p-3 mb-5 bg-white rounded col-md-6 card mb-3 mt-3 ps-3 ">
      <div className="row g-0">
        <div className="col-md-4">
          <img style={{ width: "100%", height: "100%" }} src={img} alt="..." />
        </div>
        <div style={{paddingLeft:'60px'}} className="col-md-8 ps-6">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{location}</p>
            <p className="card-text">{time}</p>
            <p className="card-text">{description}</p>
            <button className='event-book-btn
            p-2'>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
