import React from "react";

function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src="https://via.placeholder.com/600x200" className="d-block w-100" alt="img1"/>
        </div>

        <div className="carousel-item">
          <img src="https://via.placeholder.com/600x200/ff0000" className="d-block w-100" alt="img2"/>
        </div>

        <div className="carousel-item">
          <img src="https://via.placeholder.com/600x200/0000ff" className="d-block w-100" alt="img3"/>
        </div>

      </div>
    </div>
  );
}

export default Carousel;