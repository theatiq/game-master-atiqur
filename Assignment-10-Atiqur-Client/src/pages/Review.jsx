import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const Review = ({ reviews }) => {
  const { _id, title, review, rating, year, genres, image, email, userName } =
    reviews;

  return (
    <div className="card bg-base-100 border-1 review-card">
      <figure className="px-5 pt-5">
        <img
          src={image}
          alt="Brand Logo"
          className="rounded-lg h-[200px] w-full object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>Category: {genres}</p>
        <p>Rating: {rating}</p>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <AiFillStar
              key={i}
              className={`text-yellow-500 ${
                i < Math.round(rating) ? "" : "opacity-50"
              }`}
            />
          ))}
        </div>
        <p>Publishing Year: {year}</p>
      </div>

      <NavLink to={`/review/${_id}`} className="btn mb-5 mx-5">
        Explore Details
      </NavLink>
    </div>
  );
};

export default Review;
