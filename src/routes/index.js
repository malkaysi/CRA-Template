import { useRoutes } from "react-router-dom";
import { protectedRoutes } from "./protected";

export const AppRoutes = () => {
  // TODO: establish auth

  // TODO: Establish Landing

  const routes = protectedRoutes;

  // Pull elements from the routes to use and return them as part of this component
  const element = useRoutes([...routes]);

  return <>{element}</>;
};
