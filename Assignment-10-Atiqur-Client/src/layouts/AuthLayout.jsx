import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const AuthLayout = () => {
  return (
    <div className="font-poppins">
      <header className="w-11/12 mx-auto mb-5">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto mb-5">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AuthLayout;
