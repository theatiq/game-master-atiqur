import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config.js";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();

  const createUserGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const handleForgot = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    signIn,
    loading,
    updateUserProfile,
    createUserGoogle,
    handleForgot,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
