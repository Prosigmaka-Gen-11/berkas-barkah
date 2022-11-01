import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider";

import Home from "./Home";
import Quotes from "./Quotes";
import Carts from "./Carts";
import Login from "./Login";
import ProtectedLayout from "./ProtectedLayout";

const router = createBrowserRouter([
  {
    path: "",
    element: <ProtectedLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/quotes", element: <Quotes /> },
      { path: "/carts", element: <Carts /> },
    ],
  },
  { path: "/login", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
