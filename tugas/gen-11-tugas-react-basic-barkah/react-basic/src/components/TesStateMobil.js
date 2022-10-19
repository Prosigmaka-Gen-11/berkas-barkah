import React from "react";

function TesStateMobil() {
  const [brand, setBrand] = React.useState("Ford");
  const [model, setModel] = React.useState("Mustang");
  const [year, setYear] = React.useState("1964");
  const [color, setColor] = React.useState("red");
  return (
    <>
      <h1>FROM COMPONENT TesStateMobil</h1>
      <h2>My Car {brand}</h2>
      <p>
        It is a {color} {model} from {year}.
      </p>
      <button onClick={() => setBrand("Lamborghini")}>Klik for Brand</button>
      <button onClick={() => setModel("Gallardo")}>Klik for Model</button>
      <button onClick={() => setYear("1954")}>Klik for Year</button>
      <button onClick={() => setColor("BlackMate")}>Klik for Color</button>
    </>
  );
}

export default TesStateMobil;
