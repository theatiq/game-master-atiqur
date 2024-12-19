import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import errorPage from "../../src/assets/404.gif";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div>
      <header>
        {/* <Navbar></Navbar> */}
      </header>
      <div className="w-11/12 mx-auto">
      <button
          onClick={handleBack}
          className="btn bg-purple-600 ml-20 mt-10 text-white"
        >
          Go Home
        </button>
        <img src={errorPage} alt="" />
        {/* <h1 className="text-center text-red-600 font-bold text-4xl mt-10">404</h1>
        <p className="text-center text-red-600 font-bold text-4xl mb-10">
          Page not Found
        </p> */}
 
      </div>
      <footer>
        {/* <Footer></Footer> */}
      </footer>
    </div>
  );
};

export default ErrorPage;
