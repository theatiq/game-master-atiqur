import React, { useState } from "react";

const Letter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Simulate subscription success
    setMessage("Thank you for subscribing to our newsletter!");
    setEmail(""); // Reset the email field
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-gray-700 mb-4">
        Stay updated with the latest discount coupons and exclusive deals from
        your favorite stores in Bangladesh!
      </p>
      <form onSubmit={handleSubscribe}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Subscribe
        </button>
      </form>
      {message && (
        <p className="mt-4 text-center text-green-600 font-medium">{message}</p>
      )}
    </div>
  );
};

export default Letter;
