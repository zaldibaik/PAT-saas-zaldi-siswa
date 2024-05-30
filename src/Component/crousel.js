import React from "react";
import heroImage from "./assets/hero.jpg";

class Carousel extends React.Component {
  render() {
    return (
      <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={heroImage} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      
    );
  }
}

export default Carousel;
