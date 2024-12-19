import React from "react";
import { AiFillStar } from "react-icons/ai";

const TopBrands = ({ brand }) => {
  return (
    <div className="">
      <div className="card bg-primary text-primary-content h-[180px]">
        <div className="card-body">
          <h2 className="card-title">{brand.brand_name}</h2>
          <p>{brand.description}</p>
          <p>Rating: {brand.rating}</p>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={`text-yellow-500 ${
                  i < Math.round(brand.rating) ? "" : "opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBrands;
