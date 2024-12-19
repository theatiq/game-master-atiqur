import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Review from "./Review";

const SMAllReviews = () => {
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
        review.genre.toLowerCase().includes(genre.toLowerCase())
      );
      setFilteredReviews(filtered);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-center text-3xl font-bold text-blue-950 mb-5">
        All Reviews
      </h1>

      {/* Dropdown Menus */}
      <div className="flex justify-between items-center mb-5">
        {/* Sorting Dropdown */}
        <div>
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
        <div>
          <label htmlFor="filter" className="font-semibold mr-2">
            Filter by Genre:
          </label>
          <select
            id="filter"
            value={genreFilter}
            onChange={(e) => handleFilter(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="all">All</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="strategy">Strategy</option>
            <option value="sports">Sports</option>
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

export default SMAllReviews;




















import React, { useCallback, useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeLowVision } from "react-icons/fa6";
import toast from "react-hot-toast";
import { EmailContext } from "../providers/EmailProvider";

const Forget = () => {
  const emailRef = useRef();
//   const [email, setEmail] = useContext(EmailContext);

  const [success, setSuccess] = useState(false);
  const [logInError, setLogInError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, setUser, handleForgot } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setSuccess(false);
    setLogInError("");
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        e.target.reset();
        setSuccess(true);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // alert(error.code);
        setLogInError(error.message);
      });
  };

  const handleReset = () => {
    
    const email = emailRef.current.value;
    if (!email) {
      
    } else {
      handleForgot(email).then(() => {
        toast.success("Reset Link sent to your email.");
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Password Recovery
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          {/* <div className="form-control">
            <label onClick={handleReset} className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div> */}
          <div className="form-control mt-6">
            <button
              onClick={handleReset}
              className="btn btn-neutral rounded-none"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forget;
