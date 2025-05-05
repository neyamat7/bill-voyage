import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthProvider from "./context/AuthProvider";
import { router } from "./routes/router";
import { RouterProvider } from "react-router";
import PaymentProvider from "./context/PaymentProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PaymentProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </PaymentProvider>
  </StrictMode>
);
