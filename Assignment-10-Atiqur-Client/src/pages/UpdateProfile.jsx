import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeLowVision } from "react-icons/fa6";

const UpdateProfile = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    setErrorMessage("");
    setSuccess(false);
    updateUserProfile({ displayName: name, photoURL: photo })
      .then(() => {
        navigate("/myProfile");
      })
      .catch((err) => {});

    // createNewUser(email, password)
    //   .then((result) => {
    //     const user = result.user;
    //     setUser(user);
    //     setSuccess(true);
    //     e.target.reset();
    //     updateUserProfile({ displayName: name, photoURL: photo })
    //       .then(() => {
    //         navigate("/myProfile");
    //       })
    //       .catch((err) => {});
    //   })
    //   .catch((error) => {
    //     setErrorMessage(error.message);
    //     setSuccess(false);
    //   });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Update your Profile
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>

          {error.name && (
            <label className="label text-xs text-red-500">{error.name}</label>
          )}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo-url"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
