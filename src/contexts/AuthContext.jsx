import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  onAuthStateChanged
} from "firebase/auth";
import { createContext, useState, useEffect } from "react";

import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { auth } from "../lib/firebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const register = async (email, password) => {
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const { user } = res;
      setUser(user);
      setLoading(false);
      toast.success("Account created successfully");
    } catch (err) {
      setError(err.message);
      setLoading(false);
      toast.error(err.message);
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const { user } = res;
      setUser(user);
      setLoading(false);
      toast.success("Logged in successfully");
    } catch (err) {
      setError(err.message);
      setLoading(false);
      toast.error(err.message);
    }
  };

  const resetPassword = async (email) => {
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setLoading(false);
      toast.success("Reset email sent successfully");
    } catch (err) {
      setError(err.message);
      setLoading(false);
      toast.error(err.message);
    }
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);
      const { user } = res;
      setUser(user);
      setLoading(false);
      toast.success("Logged in successfully");
    } catch (err) {
      setError(err.message);
      setLoading(false);
      toast.error(err.message);
    }
  };

  const loginWithFacebook = async () => {
    setLoading(true);
    try {
      const provider = new FacebookAuthProvider();
      const res = await signInWithPopup(auth, provider);
      const { user } = res;
      setUser(user);
      setLoading(false);
      toast.success("Logged in successfully");
    } catch (err) {
      setError(err.message);
      setLoading(false);
      toast.error(err.message);
    }
  };

  const loginWithGithub = async () => {
    setLoading(true);
    try {
      const provider = new GithubAuthProvider();
      const res = await signInWithPopup(auth, provider);
      const { user } = res;
      setUser(user);
      setLoading(false);
      toast.success("Logged in successfully");
    } catch (err) {
      setError(err.message);
      setLoading(false);
      toast.error(err.message);
    }
  };

  const logout = () => {
    setLoading(true);
    try {
    signOut(auth);
    setUser(null);
    setLoading(false);
    toast.success("Logged out successfully")
    } catch (err) {
      setError(err.message);
      setLoading(false);
      toast.error(err.message);
    }
  };

  const updateUser = (name, photo) => {
    return updateProfile(user, {
      displayName: name, photoURL: photo
    })
  }

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user)=> {
    setUser(user)
    setLoading(false)
  })
  return () => unsubscribe()
}, [])

  const value = {
    user,
    loading,
    error,
    register,
    login,
    logout,
    updateUser,
    resetPassword,
    loginWithGoogle,
    loginWithFacebook,
    loginWithGithub,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};