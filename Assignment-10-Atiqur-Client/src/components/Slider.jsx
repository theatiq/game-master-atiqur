import React from "react";
import img2 from "../assets/01.jfif";
import img4 from "../assets/03.jfif";
import img5 from "../assets/05.jfif";
import img6 from "../assets/06.jfif";

const Slider = () => {
  return (
    <div className="carousel w-full h-[400px]">
      {/* Slide 1 */}
      <div
        id="slide1"
        className="carousel-item relative w-full overflow-hidden"
      >
        <img src={img2} className="w-full" alt="Slide 1" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-5">
          <h2 className="text-2xl font-bold mb-2">
            Gaming Contest Announcement
          </h2>
          <p className="text-sm">
            Join our upcoming Global Gaming Contest 2024 on March 15th! Register
            now and win exciting prizes.
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img4} className="w-full" alt="Slide 2" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-5">
          <h2 className="text-2xl font-bold mb-2">New Game Launch</h2>
          <p className="text-sm">
            Check out *Cyberverse 2.0*, the latest open-world adventure with
            stunning graphics and gameplay.
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img5} className="w-full" alt="Slide 3" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-5">
          <h2 className="text-2xl font-bold mb-2">E-Sports Championship</h2>
          <p className="text-sm">
            Witness the excitement of the Global E-Sports Championship 2024 with
            over 50 million live viewers.
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img6} className="w-full" alt="Slide 4" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-5">
          <h2 className="text-2xl font-bold mb-2">Upcoming Updates</h2>
          <p className="text-sm">
            Get ready for major updates in *Battle Kings* Season 5, featuring
            new weapons and ranked modes.
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
