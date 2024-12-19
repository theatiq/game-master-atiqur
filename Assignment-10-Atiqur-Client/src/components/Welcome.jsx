import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Welcome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="text-center  text-purple-500">
      <h1>{user ? "Assalamu-Alaikum" : ""}</h1>
      <h1>{user ? user?.displayName : ""}</h1>
    </div>
  );
};

export default Welcome;
