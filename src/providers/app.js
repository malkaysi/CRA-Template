import React from "react";
import PropTypes from "prop-types";
import { RouterProvider } from "react-router-dom";
import { protectedRoutes } from "../routes/protected";

export const AppProvider = () => {
  return <RouterProvider router={protectedRoutes} />;
};

AppProvider.propTypes = {
  children: PropTypes.element,
};
