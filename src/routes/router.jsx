import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Bills from "../components/Bills/Bills";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../components/Profile/Profile";
import Details from "../components/Details/Details";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Loading from "../components/Loading/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: SignUp,
      },
      {
        path: "bills",
        loader: () => fetch("/bills.json"),
        element: (
          <PrivateRoutes>
            <Bills></Bills>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },

      {
        path: "profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
        children: [
          {
            path: "update-profile",
            element: (
              <PrivateRoutes>
                <UpdateProfile></UpdateProfile>
              </PrivateRoutes>
            ),
          },
        ],
      },

      {
        path: "details/:id",
        loader: async ({ params }) => {
          const response = await fetch("/bills.json");
          const billsData = await response.json();
          const singleBill = billsData.find((b) => b.id == params.id);
          return singleBill;
        },
        element: (
          <PrivateRoutes>
            <Details></Details>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
]);
