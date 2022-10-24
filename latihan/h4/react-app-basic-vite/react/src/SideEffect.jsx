import React, { useEffect, useState } from "react"; //hook

export default function SideEffect() {
  const [toko, setToko] = useState("");
  const [kemeja, setKemeja] = useState("");
  const [rangkuman, setRangkuman] = useState("");

  useEffect(() => {
    console.log("efek samping setiap update");
    return () => {
      console.log("sebelum efek samping selanjutnya jalan");
    };
  });

  useEffect(() => {
    console.log("efek samping render pertama kali");

    const dataFromDb = {
      toko: "Toko Oren",
      kemeja: "Louis Vuitton",
    };

    setToko(dataFromDb.toko);
    setKemeja(dataFromDb.kemeja);

    return () => {
      console.log("sebelum component hilang");

      setToko("");
      setKemeja("");
    };
  }, []);

  useEffect(() => {
    console.log("efek samping setiap dependencies yg ada");

    setRangkuman(`Saya punya kemeja ${kemeja} dari toko ${toko}`);

    return () => {
      console.log("sebelum isi dependencies hilang");
    };
  }, [toko, kemeja]);

  return (
    <>
      <h1>Aku Side y</h1>
      <ul>
        <li>Toko: {toko}</li>

        <li>Kemeja: {kemeja}</li>
      </ul>
      <p>{rangkuman}</p>
      <button onClick={() => setToko("Toko Ijo")}>Ubah Toko</button>
      <button onClick={() => setKemeja("Gucci")}>Ubah Kemeja</button>
    </>
  );
}
