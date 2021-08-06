import React from "react";
import './EventCard.css'
const EventCard = (props) => {
  const { img, title, location, time, description } = props.dt;
 const className = props.width + 'event-cardd shadow p-3 mb-5 bg-white rounded col-md-6 card mb-3 mt-3 ps-3'
  return (
    <div id='event'   className= {className} >
      <div className="row ">
        <div className="col-md-5">
          <img style={{ width: "100%", height: "100%" }} src={img} alt="..." />
        </div>
        <div  className="col-md-7 ps-6">
          <div className="card-body">
            <h5 className="card-title event-title" >{title}</h5>
            <p className="event-text">{location}</p>
            <p className="event-text">{time}</p>
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
