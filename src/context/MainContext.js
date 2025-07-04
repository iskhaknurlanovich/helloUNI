import { createContext, useContext, useReducer, useState } from "react";
import { API } from "../helpers/API";
import axios from "axios";

const mainContext = createContext();
export const useMainContext = () => useContext(mainContext);

const initialState = {
  product: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, product: [...state.product, action.payload] };

    case "ERROR":
      return { ...state, product: [...state.product, action.payload] };
    default:
      return state;
  }
};

const MainContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [boolHeader, setBoolHeader] = useState(false);
  const [dropModal, setDropModal] = useState(false);

  async function addProduct(newObj) {
    try {
      let { product } = await axios.post(API, { newObj });
      dispatch({
        type: "GET",
        payload: product,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  }

  const values = {
    product: state.product,
    setBoolHeader,
    boolHeader,
    addProduct,
    dropModal,
    setDropModal,
  };
  return <mainContext.Provider value={values}>{children}</mainContext.Provider>;
};

export default MainContext;
