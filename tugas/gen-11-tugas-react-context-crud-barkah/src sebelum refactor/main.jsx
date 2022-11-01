import React from "react";
import ReactDOM from "react-dom/client";
import KomForm from "./KomForm";
import KomList from "./KomList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <KomForm>
    <KomList />
  </KomForm>
);
