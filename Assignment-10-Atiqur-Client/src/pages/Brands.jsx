import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { IdContext } from "../providers/IdProvider";
import { FcSearch } from "react-icons/fc";

const Brands = () => {
  const allData = useLoaderData();
  const [id] = useContext(IdContext);
  const [brands, setBrands] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (id) {
      const singleBrand = allData.filter((brand) => brand.id === id);
      setBrands(singleBrand);
    } else {
      setBrands(allData);
    }
  }, [id, allData]);

  const filteredBrands = brands.filter((brand) =>
    brand.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mb-10">
      <h1 className="text-center text-blue-950 font-bold text-4xl my-5">
        {id ? "Brand Details" : "All Brands"}
      </h1>

      <div className="flex justify-center my-5">
        <input
          type="text"
          placeholder="Search by category..."
          className="p-2 border rounded-lg w-1/2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FcSearch className="-translate-x-10 translate-y-2 text-2xl"/>
      </div>

      <div>
        {filteredBrands.length > 0 ? (
          filteredBrands.map((data) => (
            <div
              key={data.id}
              className="lg:flex justify-between items-center mb-5 border-2 p-5 rounded-lg"
            >
              <div className="flex justify-between items-center">
                <img
                  className="h-[100px] w-[100px] mr-5 rounded-lg"
                  src={data.brand_logo}
                  alt={`${data.brand_name} logo`}
                />
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold">{data.brand_name}</h1>
                  <p className="py-6">Ratings: {data.rating}</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <AiFillStar
                        key={i}
                        className={`text-yellow-500 ${
                          i < Math.round(data.rating) ? "" : "opacity-50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start">
                <h1 className="text-xl font-bold">{data.category}</h1>
                <p className="py-6">{data.description}</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="py-6 animate__animated animate__bounce animate__infinite animate__slow font-bold text-pink-600 text-xl">
                  {data.isSaleOn ? "Sale is on" : ""}
                </p>
                <NavLink
                  to={`/brand/${data.id}`}
                  className="btn bg-purple-500 text-white"
                >
                  View Coupons
                </NavLink>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No brands found.</p>
        )}
      </div>
    </div>
  );
};

export default Brands;
