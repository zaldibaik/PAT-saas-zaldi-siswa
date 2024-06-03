import React from "react";
import heroImage from "./assets/hero.jpg";
import GedungAsrama from "./assets/asrama.jpg";
import MasjidDanAula from "./assets/Masjid.jpg";
import { Button } from "flowbite-react";

class Carousel extends React.Component {
  render() {
    return (
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-touch="false"
        data-bs-interval="false"
      >
        <div className="carousel-inner">
          <div class="carousel-item active">
            <img src={heroImage} class="d-block w-100" alt="..." />
            <div class="carousel-caption">
              <div className="display-1 font-bold">SMK TI BAZMA</div>
              <div className="pt-9">
                <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <div className="h4">info ▶</div>
                </button>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src={GedungAsrama} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={MasjidDanAula} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
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
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default Carousel;
