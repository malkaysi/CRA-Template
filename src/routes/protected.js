import { createBrowserRouter, Outlet } from "react-router-dom";
import { MainLayout } from "../components/Layout/MainLayout";
import { Dashboard } from "../features/dashboard/routes";
import { NotFound } from "../features/misc/routes";
import { Profile } from "../features/profile/routes";

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export const protectedRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);
