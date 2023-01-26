import { Outlet } from "react-router-dom";
import { MainLayout } from "../components/Layout/MainLayout";
import { Dashboard } from "../features/dashboard/routes";

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
    children: [{ path: "/", element: <Dashboard /> }],
  },
];
