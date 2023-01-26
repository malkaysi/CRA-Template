import { Outlet } from "react-router-dom";
import { MainLayout } from "../components/Layout/MainLayout";
import { Dashboard } from "../features/dashboard/routes";
import { Profile } from "../features/profile/routes";

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
];
