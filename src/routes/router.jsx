import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Bills from "../components/Bills/Bills";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../components/Profile/Profile";
import Details from "../components/Details/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
