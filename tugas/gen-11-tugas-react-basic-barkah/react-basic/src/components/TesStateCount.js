import React from "react";

function TesStateCount() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <div className="container mx-auto flex-col text-center bg-teal-400">
        <h1 className="">klik teross ampe pegel</h1>
        <p className="mb-4">{count}</p>

        <button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => setCount(count + 1)}
        >
          klik terooosss buat nambah
        </button>
        <button
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => setCount(count - 1)}
        >
          klik terooosss buat kurang
        </button>
      </div>
    </>
  );
}

export default TesStateCount;
