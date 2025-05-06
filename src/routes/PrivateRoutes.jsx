import { Navigate, useLocation } from "react-router";
import useAuth from "../context/useAuth";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center mt-10 min-h-[calc(100vh-409px)]">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRoutes;
