import React, { useContext, useEffect, useState } from "react";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";
import { Typewriter } from "react-simple-typewriter";

import Review from "./Review";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const allReviews = useLoaderData();

  return (
    <div
      className={`w-11/12 mx-auto ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="place-items-end">
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={50}
        />
        <p className="text-sm">{isDarkMode ? "Dark Mode" : "Light Mode"}</p>
      </div>
      <span
        style={{ color: "blueviolet" }}
        className="text-4xl font-semibold flex justify-center"
      >
        <Typewriter
          words={["Get...", "Set...", "Go......"]}
          loop={10}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
      <Banner />

      <h1 className="text-center font-bold text-3xl text-purple-800 my-5">
        Highest Rated Games
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 p-5">
        {allReviews.map((review) => (
          <div key={review._id} className="">
            <Review reviews={review} />
          </div>
        ))}
      </div>

      {/* Gaming Contest Announcement Section */}
      <section className="my-10 p-5 bg-purple-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-4 text-purple-800">
          Upcoming Gaming Contest
        </h2>
        <p className="text-lg text-gray-700">
          🚀 Gear up for the ultimate gaming showdown! Our upcoming **Global
          Gaming Contest 2024** is scheduled for **December 30th, 2024**.
          Compete with the best gamers around the world for exciting prizes and
          eternal glory.
        </p>
        <p className="text-lg mt-4 text-gray-700">
          📅 **Registration Deadline:** December 15th, 2024 <br />
          🏆 **Prizes Include:** Cash rewards, gaming gear, and more!
        </p>
        <button className="btn btn-primary mt-5">Register Now</button>
      </section>

      {/* Latest News About Gaming World Section */}
      <section className="my-10 p-5 bg-blue-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-800">
          Latest News in the Gaming World
        </h2>
        <ul className="list-disc ml-5 text-gray-700">
          <li className="mb-3">
            🎮 **New Release:** *Cyberverse 2.0* launched globally with stunning
            graphics and an immersive open-world experience.
          </li>
          <li className="mb-3">
            🌟 **E-Sports:** The *2024 Global E-Sports Championship* had over 50
            million live viewers, breaking all previous records!
          </li>
          <li className="mb-3">
            🔥 **Trending:** *Battle Kings* Season 5 introduced new weapons and
            ranked modes, captivating players worldwide.
          </li>
          <li className="mb-3">
            💡 **Tech Update:** VR gaming devices are getting a price cut in
            2024, making virtual reality more accessible than ever.
          </li>
        </ul>
        <p className="mt-4 text-center text-blue-600">
          Stay tuned for more updates and breakthroughs in the gaming world!
        </p>
      </section>
    </div>
  );
};

export default Home;
