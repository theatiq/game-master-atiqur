import React from "react";

const Fest = () => {
  return (
    <div className="max-w-md mx-auto bg-blue-50 p-8 rounded-lg shadow-md mt-10 text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">
        Special Flat Discount!
      </h2>
      <p className="text-gray-700 text-lg mb-6">
        Enjoy a flat <span className="font-bold text-blue-500">20% OFF</span> on
        all brands available on our platform. Use this coupon to save on your
        favorite products today!
      </p>
      <div className="bg-gray-100 text-gray-800 font-mono text-lg p-4 rounded-lg mb-4">
        <strong>Coupon Code:</strong> SAVE20
      </div>
      <p className="text-gray-500 text-sm">*Valid till 31st December 2024</p>
    </div>
  );
};

export default Fest;
