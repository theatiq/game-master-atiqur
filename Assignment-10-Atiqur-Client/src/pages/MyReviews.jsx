import React, { useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import { NavLink } from "react-router-dom";
import { MdDelete, MdOutlineSecurityUpdateGood } from "react-icons/md";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const email = user.email;

  useEffect(() => {
    fetch(
      `https://assignment-10-atiqur-server.vercel.app/myReviews?email=${email}`
    )
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [email]);

  const handleDeleteReview = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-atiqur-server.vercel.app/review/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your review has been deleted.", "success");
              const remainingReviews = myReviews.filter(
                (review) => review._id !== _id
              );
              setMyReviews(remainingReviews);
            }
          });
      }
    });
  };

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold text-center mb-5">
        My Reviews ({myReviews.length})
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          {/* Table Head */}
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border border-gray-300">#</th>
              <th className="p-3 border border-gray-300">Thumbnail</th>
              <th className="p-3 border border-gray-300">Title</th>
              <th className="p-3 border border-gray-300">Rating</th>
              <th className="p-3 border border-gray-300">Year</th>
              <th className="p-3 border border-gray-300">Category</th>
              <th className="p-3 border border-gray-300">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {myReviews.map((review, index) => (
              <tr key={review._id} className="text-center hover:bg-gray-100">
                <td className="p-3 border border-gray-300">{index + 1}</td>
                <td className="p-3 border border-gray-300">
                  <img
                    src={review.image}
                    alt={review.title}
                    className="w-10 h-10 rounded-full mx-auto"
                  />
                </td>
                <td className="p-3 border border-gray-300">{review.title}</td>
                <td className="p-3 border border-gray-300">{review.rating}</td>
                <td className="p-3 border border-gray-300">{review.year}</td>
                <td className="p-3 border border-gray-300">{review.genres}</td>
                <td className="p-3 border border-gray-300 flex justify-center space-x-2">
                  <NavLink to={`/updateReview/${review._id}`}>
                    <button
                      className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600 flex items-center px-2 py-1 rounded"
                      title="Update Review"
                    >
                      <MdOutlineSecurityUpdateGood size={18} />
                    </button>
                  </NavLink>
                  <button
                    onClick={() => handleDeleteReview(review._id)}
                    className="btn btn-sm bg-red-500 text-white hover:bg-red-600 flex items-center px-2 py-1 rounded"
                    title="Delete Review"
                  >
                    <MdDelete size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
