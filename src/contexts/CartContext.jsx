import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
    total: 0,
    totalItems: 0,
  };

  const reducer = (state, action) => {
    let existingProductIndex;

    switch (action.type) {
      case "ADD_TO_CART": {
        existingProductIndex = state.cart.findIndex(
          (product) => product.id === action.payload.id
        );
        if (existingProductIndex > -1) {
          // If the product already exists in the cart, increase its quantity by 1
          const updatedCart = [...state.cart];
          updatedCart[existingProductIndex].quantity += 1;

          return {
            ...state,
            cart: updatedCart,
            total: state.total + action.payload.price,
            totalItems: state.totalItems + 1,
          };
        } else {
          // If the product is not in the cart, add it with a quantity of 1
          action.payload.quantity = 1;

          return {
            ...state,
            cart: [...state.cart, action.payload],
            total: state.total + action.payload.price,
            totalItems: state.totalItems + 1,
          };
        }
      }
      case "REMOVE_FROM_CART": {
        const updatedCart = state.cart.filter(
          (product) => product.id !== action.payload.id
        );
        return {
          ...state,
          cart: updatedCart,
          total: state.total - action.payload.price * action.payload.quantity,
          totalItems: state.totalItems - action.payload.quantity,
        };
      }
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
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) => {
    if (product.stock <= 0) {
      toast.error("Product out of stock");
      return;
    }
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success("Product added to cart");
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
    toast.success("Product removed from cart");
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    toast.success("Cart clear successfully");
  };

  const value = {
    cart: state.cart,
    total: state.total,
    totalItems: state.totalItems,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.node,
};
