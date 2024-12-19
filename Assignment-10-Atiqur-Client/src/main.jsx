import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "animate.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import IdProvider from "./providers/IdProvider.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import EmailProvider from "./providers/EmailProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <EmailProvider>
        <IdProvider>
          <RouterProvider router={router}></RouterProvider>
          <Toaster />
        </IdProvider>
      </EmailProvider>
    </AuthProvider>
  </StrictMode>
);
