import { createContext } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext("light");

const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value="light">{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;

ThemeProvider.propTypes = {
  children: PropTypes.node,
};