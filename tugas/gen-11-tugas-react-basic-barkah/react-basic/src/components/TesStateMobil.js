import React from "react";

function TesStateMobil() {
  const [brand, setBrand] = React.useState("Ford");
  const [model, setModel] = React.useState("Mustang");
  const [year, setYear] = React.useState("1964");
  const [color, setColor] = React.useState("red");
  const [bgcolor, setBgcolor] = React.useState(false);

  function buttonBgcolor() {
    setBgcolor(!bgcolor);
  }

  return (
    <>
      <div
        className={
          bgcolor
            ? "container mx-auto flex-col text-center bg-cyan-300"
            : "container mx-auto flex-col text-center bg-fuchsia-500"
        }
      >
        <h2 className="text-2xl text-center">My Car {brand}</h2>
        <p className="text-2xl text-center mb-4">
          It is a {color} {model} from {year}.
        </p>
        <button
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => setBrand("Lamborghini")}
        >
          Klik for Brand
        </button>
        <button
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => setModel("Gallardo")}
        >
          Klik for Model
        </button>
        <button
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => setYear("1954")}
        >
          Klik for Year
        </button>
        <button
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => setColor("BlackMate")}
        >
          Klik for Color
        </button>
        <button
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={buttonBgcolor}
        >
          Klik for BgColor
        </button>
      </div>
    </>
  );
}

export default TesStateMobil;
