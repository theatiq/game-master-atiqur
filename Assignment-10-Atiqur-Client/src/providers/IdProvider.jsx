import React, { createContext, useState } from "react";

export const IdContext = createContext(null);

const IdProvider = ({ children }) => {
  const [id, setId] = useState();
  return (
    <IdContext.Provider value={[id, setId]}>{children}</IdContext.Provider>
  );
};

export default IdProvider;
