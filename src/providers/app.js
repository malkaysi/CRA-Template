import React from "react";
import PropTypes from "prop-types";

import { BrowserRouter as Router } from "react-router-dom";

export const AppProvider = ({ children }) => {
  return <Router>{children}</Router>;
};

AppProvider.propTypes = {
  children: PropTypes.element,
};
