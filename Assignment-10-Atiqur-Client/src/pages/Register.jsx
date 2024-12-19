import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeLowVision } from "react-icons/fa6";
import Swal from "sweetalert2";

const Register = () => {
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
    // if (name.length < 5) {
    //   setError({ ...error, name: "must be more than 5" });
    //   return;
    // }
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    const conPassword = form.get("conPassword");
    if (password.length < 6) {
      setErrorMessage("Password should be 6 character or long");
      return;
    }
    if (password !== conPassword) {
      setErrorMessage("Confirmed Password not matched with your Password");
      return;
    }
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!regex.test(password)) {
      setErrorMessage(
        "Password should have  at least 1 uppercase 1 lower case 1 number 1 special character min length 6"
      );
      return;
    }
    setErrorMessage("");
    setSuccess(false);
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setSuccess(true);
        e.target.reset();
        Swal.fire({
          title: "Registration",
          text: "Successful",
          icon: "success",
        });
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {});
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setSuccess(false);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
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

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          {/* Main Password */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <button
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="btn btn-xs absolute right-4 top-12"
            >
              {showPassword ? <FaEyeLowVision /> : <IoEyeSharp />}
            </button>
          </div>
          {/* Confirm Password */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="conPassword"
              placeholder="confirm password"
              className="input input-bordered"
              required
            />
            <button
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="btn btn-xs absolute right-4 top-12"
            >
              {showPassword ? <FaEyeLowVision /> : <IoEyeSharp />}
            </button>
         
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>

        {errorMessage && (
          <p className="text-red-500 text-center">{errorMessage}</p>
        )}
        {success && <p className="text-green-500">Registration successful</p>}
        <p className="text-center font-semibold">
          Already have an account?{" "}
          <Link className="text-red-500" to={"/auth/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
