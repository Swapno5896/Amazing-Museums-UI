import React from "react";
import img1 from "../../../images/m-1.png";
import img2 from "../../../images/m-2.png";
import img3 from "../../../images/m-m.png";
import "./TopBanner.css";
const TopBanner = () => {
  return (
    <div className="container top-banner-container" style={{ height: "550px" }}>
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h2 className="text-center pb-3">This is our musemume</h2>
            <p className="text-center p-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto voluptate quae fuga velit error. Deserunt amet
              molestiae praesentium officia nostrum similique, suscipit earum!
              Eligendi dicta nihil quae quos nisi consequatur.
            </p>
            <hr />
            <p className="text-center p-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              enim quis alias deleniti quaerat sunt ab, repudiandae error sed
              nisi earum, vitae quia cupiditate facilis esse hic quasi impedit
              exercitationem!
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
                <img src='https://premiumlayers.com/new/museum/wp-content/uploads/2015/10/event-img-2-289x365.jpg' className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="1000">
                <img src='https://premiumlayers.com/new/museum/wp-content/uploads/2015/09/img-8.jpg' className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src='https://premiumlayers.com/new/museum/wp-content/uploads/2015/10/event-img-1-289x365.jpg' className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
