import React, { useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import { MdDelete } from "react-icons/md";

const MyWatchList = () => {
  const { user } = useContext(AuthContext);
  const [myWatchList, setMyWatchList] = useState([]);
  const email = user.email;

  useEffect(() => {
    fetch(
      `https://assignment-10-atiqur-server.vercel.app/myWatchList?email=${email}`
    )
      .then((res) => res.json())
      .then((data) => setMyWatchList(data));
  }, [email]);

  const handleDeleteWatchList = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-10-atiqur-server.vercel.app/watchList/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "The item has been removed.", "success");
              const remainingWatchList = myWatchList.filter(
                (watch) => watch._id !== _id
              );
              setMyWatchList(remainingWatchList);
            }
          });
      }
    });
  };

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold text-center mb-5">
        My Watch List ({myWatchList.length})
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
            {myWatchList.map((watch, index) => (
              <tr key={watch._id} className="text-center hover:bg-gray-100">
                <td className="p-3 border border-gray-300">{index + 1}</td>
                <td className="p-3 border border-gray-300">
                  <img
                    src={watch.image}
                    alt={watch.title}
                    className="w-10 h-10 rounded-full mx-auto"
                  />
                </td>
                <td className="p-3 border border-gray-300">{watch.title}</td>
                <td className="p-3 border border-gray-300">{watch.rating}</td>
                <td className="p-3 border border-gray-300">{watch.year}</td>
                <td className="p-3 border border-gray-300">{watch.genres}</td>
                <td className="p-3 border border-gray-300">
                  <button
                    onClick={() => handleDeleteWatchList(watch._id)}
                    className="btn btn-sm bg-red-500 text-white hover:bg-red-600 flex items-center px-2 py-1 rounded"
                    title="Delete from Watch List"
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

export default MyWatchList;
