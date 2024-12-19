import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Review from "./Review";

const AllReviews = () => {
  const allReviews = useLoaderData();
  const [filteredReviews, setFilteredReviews] = useState(allReviews);
  const [sortOption, setSortOption] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  // Sort Functionality
  const handleSort = (option) => {
    setSortOption(option);
    const sortedReviews = [...filteredReviews].sort((a, b) => {
      if (option === "rating-asc") return a.rating - b.rating;
      if (option === "rating-desc") return b.rating - a.rating;
      if (option === "year-asc") return a.year - b.year;
      if (option === "year-desc") return b.year - a.year;
      return 0;
    });
    setFilteredReviews(sortedReviews);
  };

  // Filter Functionality
  const handleFilter = (genre) => {
    setGenreFilter(genre);
    if (genre === "all") {
      setFilteredReviews(allReviews); // Reset to all reviews
    } else {
      const filtered = allReviews.filter((review) =>
        review.genres.toLowerCase().includes(genre.toLowerCase())
      );
      return setFilteredReviews(filtered);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-center text-3xl font-bold text-blue-950 mb-5">
        All Reviews
      </h1>

      {/* Dropdown Menus */}
      <div className="lg:flex justify-between items-center mb-5 space-y-5">
        {/* Sorting Dropdown */}
        <div className="">
          <label htmlFor="sort" className="font-semibold mr-2">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">Select</option>
            <option value="rating-asc">Rating (Low to High)</option>
            <option value="rating-desc">Rating (High to Low)</option>
            <option value="year-asc">Year (Oldest to Newest)</option>
            <option value="year-desc">Year (Newest to Oldest)</option>
          </select>
        </div>

        {/* Filter Dropdown */}
        <div className="">
          <label htmlFor="filter" className="font-semibold mr-2">
            Filter by Genre:
          </label>
          <select
            id="filter"
            value={genreFilter}
            onChange={(e) => handleFilter(e.target.value)}
            className="border p-2 rounded w-[170px]"
          >
            <option value="all">All</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Strategy">Strategy</option>
            <option value="Sports">Sports</option>
          </select>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredReviews.map((review) => (
          <Review key={review._id} reviews={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
