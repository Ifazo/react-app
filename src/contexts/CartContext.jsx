import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const initialArg = {
  cart: [],
  total: 0,
  totalItems: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.price,
        totalItems: state.totalItems + 1,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        total: state.total - action.payload.price,
        totalItems: state.totalItems - 1,
      };
    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
        total: 0,
        totalItems: 0,
      };
    default:
      return state;
  }
}

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialArg);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const emptyCart = () => {
    dispatch({ type: "EMPTY_CART" });
  };

  const value = {
    cart: state.cart,
    total: state.total,
    totalItems: state.totalItems,
    addToCart,
    removeFromCart,
    emptyCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.node,
};
