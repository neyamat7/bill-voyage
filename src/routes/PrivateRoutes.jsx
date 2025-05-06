import { Navigate, useLocation } from "react-router";
import useAuth from "../context/useAuth";
import Loading from "../components/Loading/Loading";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRoutes;
