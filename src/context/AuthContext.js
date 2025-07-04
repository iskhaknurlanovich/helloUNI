import React, { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../helpers/fire";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  FacebookAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const initialState = {
  user: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, user: action.payload };
    case "ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  async function signUp(email, password) {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      dispatch({
        type: "GET_USER",
        payload: user.user,
      });
      navigate("/");
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  }
  const checkUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: "GET_USER",
          payload: user,
        });
      } else {
        dispatch({
          type: "GET_USER",
          payload: null,
        });
      }
    });
  };
  useEffect(() => {
    checkUser();
  }, []);
  async function register(name, lastName, email, password) {
    try {
      let user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then((user) => {
        updateProfile({ ...user, displayName: `${name} ${lastName}` });
      });
      dispatch({
        type: "GET_USER",
        payload: user,
      });
      navigate("/");
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
      console.log(error.message);
    }
  }

  const googleProvider = new GoogleAuthProvider();

  async function signInWithGoogle() {
    try {
      let user = await signInWithPopup(auth, googleProvider);
      dispatch({
        type: "GET_USER",
        payload: user.user,
      });
      navigate("/");
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  }
  const facebookProvider = new FacebookAuthProvider();

  async function signInWithFacebook() {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      dispatch({
        type: "GET_USER",
        payload: result.user,
      });
      navigate("/");
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  }
  const logout = () => signOut(auth);

  const values = {
    user: state.user,
    signInWithGoogle,
    signInWithFacebook,
    signUp,
    register,
    logout,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
