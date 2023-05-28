import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Pages/Authentication/Login/Login";
import Home from "../Pages/Home/Home";
import PrivateRoutes from "../Routes/PrivateRoutes";
import Categories from "../Pages/Categories/Categories";

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
      // {
      //   path: "/filtersEdit/:id",
      //   element: <FiltersEdit></FiltersEdit>,
      // },
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
