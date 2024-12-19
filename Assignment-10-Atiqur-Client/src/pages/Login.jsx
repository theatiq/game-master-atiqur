import React, { useCallback, useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeLowVision } from "react-icons/fa6";
import toast from "react-hot-toast";
import { EmailContext } from "../providers/EmailProvider";
import Swal from "sweetalert2";

const Login = () => {
  // const emailRef = useRef();
  const [email, setEmail] = useContext(EmailContext);
  // const [email, setEmail] = useState("");

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
    setEmail(email);
    const password = form.password.value;
    setSuccess(false);
    setLogInError("");
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        e.target.reset();
        setSuccess(true);
        Swal.fire({
          title: "Login",
          text: "Successful",
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // alert(error.code);
        setLogInError(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User name or Password Mismatch",
          footer:
            '<a href="#">Put User name and Password correctly and try again</a>',
        });
      });
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please provide your email address to reset the password.");
      return;
    }
    navigate("/auth/forget", { state: { email } }); // Navigate with email
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update email in context
  };

  // const handleEmail = () => {

  //   const email = emailRef.current.value;
  //   if (!email) {

  //   } else {
  //     handleForgot(email).then(() => {
  //       toast.success("Reset Link sent to your email.");
  //     });
  //   }
  // };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              // ref={emailRef}
              placeholder="email"
              className="input input-bordered"
              required
              value={email}
              onChange={handleEmailChange}
            />
          </div>
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
            {/* <div className="form-control mt-6">
              <button
                onClick={handleForgotPassword}
                className="btn btn-ghost rounded-none"
              >
                Forgot password?
              </button>
            </div> */}

            {/* <label className="label form-control">
              <a href="" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label> */}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        {success && (
          <p className="text-green-500">User Logged in successfully</p>
        )}
        {logInError && <p className="text-red-600">{logInError}</p>}
        <p className="text-center font-semibold">
          Don't have an account?{" "}
          <Link className="text-red-500" to={"/auth/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
