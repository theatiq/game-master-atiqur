import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const myProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={user?.photoURL} alt="user" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{user?.displayName}</h2>
              <p>{user?.email}</p>
              <div className="card-actions">
                <Link to={"/auth/update"} className="btn btn-primary">
                  Update Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default myProfile;
