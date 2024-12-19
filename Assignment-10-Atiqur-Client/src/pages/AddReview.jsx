import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const AddReview = () => {
  const { user, setUser, logOut, createUserGoogle } = useContext(AuthContext);

  const handleAddReview = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const review = e.target.review.value;
    const rating = e.target.rating.value;
    const year = e.target.year.value;
    const genres = e.target.genres.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const userName = e.target.userName.value;

    const newReview = {
      title,
      review,
      rating,
      year,
      genres,
      image,
      email,
      userName,
    };

    // send data to the server and database
    fetch("https://assignment-10-atiqur-server.vercel.app/addReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Review added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      });
  };

  return (
    <div className="lg:w-3/4 mx-auto">
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold">Add Your Review</h1>
        <p className="py-6">You can add your valuable reviews here.</p>
      </div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleAddReview} className="card-body">
          {/* form first row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="title of the game"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Review</span>
              </label>
              <input
                type="text"
                name="review"
                placeholder="review"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* form second row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <select name="rating" className="select select-bordered" required>
                <option value="" disabled selected>
                  Select a rating
                </option>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <option key={rating} value={rating}>
                    {rating}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Publishing Year</span>
              </label>
              <select name="year" className="select select-bordered" required>
                <option value="" disabled selected>
                  Select a year
                </option>
                {Array.from({ length: 50 }, (_, i) => {
                  const year = new Date().getFullYear() - i;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          {/* form third row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Genres</span>
              </label>
              <select name="genres" className="select select-bordered" required>
                <option value="" disabled selected>
                  Select a genre
                </option>
                <option value="action">Action</option>
                <option value="rpg">RPG</option>
                <option value="adventure">Adventure</option>
                <option value="strategy">Strategy</option>
                <option value="sports">Sports</option>
              </select>
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Game Cover Image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Game Cover Image"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* form fourth row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">User's Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={user?.email}
                placeholder="user's email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">User's Name</span>
              </label>
              <input
                type="text"
                name="userName"
                value={user?.displayName}
                placeholder="User's Name"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Add A Review</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
