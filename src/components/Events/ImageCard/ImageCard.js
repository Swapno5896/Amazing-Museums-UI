import React from "react";

const ImageCard = (props) => {
  return (
    <div className="col-md-4">
      <img style={{ width: "100%" }} src={props.dt} alt="" />
    </div>
  );
};

export default ImageCard;
