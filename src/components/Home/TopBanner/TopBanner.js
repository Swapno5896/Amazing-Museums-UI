import React from "react";
import img1 from "../../../images/m-1.png";
import img2 from "../../../images/m-2.png";
import img3 from "../../../images/m-m.png";
const TopBanner = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>This is our musemume</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            voluptate quae fuga velit error. Deserunt amet molestiae praesentium
            officia nostrum similique, suscipit earum! Eligendi dicta nihil quae
            quos nisi consequatur.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            enim quis alias deleniti quaerat sunt ab, repudiandae error sed nisi
            earum, vitae quia cupiditate facilis esse hic quasi impedit
            exercitationem!
          </p>
        </div>
        <div className="col-md-6">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={img1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={img2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="..." />
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
