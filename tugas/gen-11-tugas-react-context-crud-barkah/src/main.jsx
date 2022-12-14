import React from "react";
import ReactDOM from "react-dom/client";
import KomProvider from "./KomProvider";
import KomForm from "./KomForm";

ReactDOM.createRoot(document.getElementById("root")).render(
  <KomProvider>
    <KomForm />
  </KomProvider>
);
