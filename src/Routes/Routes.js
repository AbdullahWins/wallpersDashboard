import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Pages/Authentication/Login/Login";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import PrivateRoutes from "../Routes/PrivateRoutes";
import Categories from "../Pages/Categories/Categories";
import ApprovedWallpapers from "../Pages/Wallpapers/ApprovedWallpapers";
import PendingWallpapers from "../Pages/Wallpapers/PendingWallpapers";
import RejectedWallpapers from "../Pages/Wallpapers/RejectedWallpapers";
import PausedWallpapers from "../Pages/Wallpapers/PausedWallpapers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoutes>
        <Main></Main>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      // {
      //   path: "/filtersEdit/:id",
      //   element: <FiltersEdit></FiltersEdit>,
      // },
      {
        path: "/approvedwallpapers",
        element: <ApprovedWallpapers></ApprovedWallpapers>,
      },
      {
        path: "/pendingwallpapers",
        element: <PendingWallpapers></PendingWallpapers>,
      },
      {
        path: "/rejectedwallpapers",
        element: <RejectedWallpapers></RejectedWallpapers>,
      },
      {
        path: "/pausedwallpapers",
        element: <PausedWallpapers></PausedWallpapers>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "*",
    element: <p>404 Page</p>,
  },
]);
