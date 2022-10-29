import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import KomLayout from "./pages/KomLayout";
import KomList from "./pages/KomList";
import KomForm from "./pages/KomForm";
import KomDetail from "./pages/KomDetail";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/kom",
    element: <KomLayout />,
    children: [
      { path: "list", element: <KomList /> },
      { path: "form", element: <KomForm /> },
      { path: ":komId", element: <KomDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
