import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function KomDetail() {
  const params = useParams();
  const [kom, setKom] = useState({});

  async function getKomDetail() {
    const result = await axios.get(
      "http://localhost:3000/nbkomputer/" + params.komId
    );
    setKom(result.data);
    console.log(result.data);
  }

  useEffect(() => {
    getKomDetail();
  }, []);

  return (
    <>
      <h1>PC Detail</h1>
      <ul>
        <li>Brands: {kom.brand}</li>
        <li>Type Motherboard: {kom.mobo}</li>
        <li>Category: {kom.category}</li>
        <li>Condition: {kom.condition}</li>
        <li>Delivery: {kom.delivery.join(", ")}</li>
        <li>Release Date: {kom.releaseDate}</li>
        <li>Description: {kom.description}</li>
      </ul>
    </>
  );
}
export default KomDetail;
