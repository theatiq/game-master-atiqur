import React from "react";
import imgIcon from "../assets/Logo.jfif";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Services Section */}
        <div>
          <h6 className="text-xl font-semibold text-white mb-4">Services</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-teal-400">Branding</a></li>
            <li><a href="#" className="hover:text-teal-400">Design</a></li>
            <li><a href="#" className="hover:text-teal-400">Marketing</a></li>
            <li><a href="#" className="hover:text-teal-400">Advertisement</a></li>
          </ul>
        </div>
        {/* Company Section */}
        <div>
          <h6 className="text-xl font-semibold text-white mb-4">Company</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-teal-400">About Us</a></li>
            <li><a href="#" className="hover:text-teal-400">Contact</a></li>
            <li><a href="#" className="hover:text-teal-400">Jobs</a></li>
            <li><a href="#" className="hover:text-teal-400">Press Kit</a></li>
          </ul>
        </div>
        {/* Legal Section */}
        <div>
          <h6 className="text-xl font-semibold text-white mb-4">Legal</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-teal-400">Terms of Use</a></li>
            <li><a href="#" className="hover:text-teal-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-teal-400">Cookie Policy</a></li>
          </ul>
        </div>
        {/* Logo and Description */}
        <div className="flex flex-col items-start">
          <img className="w-16 mb-4" src={imgIcon} alt="Logo" />
          <p className="text-gray-400">
            <span className="font-bold text-white">CrazyGamer</span>
            <br />
            Reliable reviews for your favorite games.
          </p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-teal-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a href="https://web.facebook.com/atiqur.tech/about_overview" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
          {/* Copyright */}
          <p className="text-sm mt-4 md:mt-0">&copy; {new Date().getFullYear()} CrazyGamer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
