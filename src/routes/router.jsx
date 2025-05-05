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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
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
      },
      // {
      //   path: "bills",
      //   loader: () => fetch("/bills.json"),
      //   element: <Bills></Bills>,
      // },
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
      // {
      //   path: "profile",
      //   element: <Profile></Profile>,
      // },
      {
        path: "details/:id",
        loader: async ({ params }) => {
          const response = await fetch("/bills.json");
          const billsData = await response.json();
          const singleBill = billsData.find((b) => b.id == params.id);
          return singleBill;
        },
        element: <Details></Details>,
      },
    ],
  },
]);
