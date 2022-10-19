import React from "react";

function TesStateCount() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <h1>FROM COMPONENT TesStateCount</h1>
      <p>klik sebanyak {count} kali</p>
      <button onClick={() => setCount(count + 1)}>
        klik terooosss buat nambah
      </button>
      <button onClick={() => setCount(count - 1)}>
        klik terooosss buat kurang
      </button>
    </>
  );
}

export default TesStateCount;
