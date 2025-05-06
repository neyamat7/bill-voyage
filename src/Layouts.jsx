import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading/Loading";

const Layouts = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const { key } = useLocation();

  useEffect(() => {
    setIsPageLoading(true);
    const loadingTime = setTimeout(() => setIsPageLoading(false), 300);

    return () => clearTimeout(loadingTime);
  }, [key]);

  return (
    <div>
      <Navbar></Navbar>
      {isPageLoading ? <Loading></Loading> : <Outlet></Outlet>}

      <Footer></Footer>
      <ToastContainer autoClose={3000}></ToastContainer>
    </div>
  );
};

export default Layouts;
