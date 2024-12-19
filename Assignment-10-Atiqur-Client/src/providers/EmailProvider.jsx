import React, { createContext, useEffect, useState } from "react";

export const EmailContext = createContext(null);

const EmailProvider = ({ children }) => {
  const [email, setEmail] = useState(() => {
    // Get the email from localStorage if it exists
    return localStorage.getItem("email") || "";
  });

  useEffect(() => {
    // Save the email to localStorage whenever it changes
    localStorage.setItem("email", email);
  }, [email]);
  return (
    <EmailContext.Provider value={[email, setEmail]}>
      {children}
    </EmailContext.Provider>
  );
};

export default EmailProvider;
