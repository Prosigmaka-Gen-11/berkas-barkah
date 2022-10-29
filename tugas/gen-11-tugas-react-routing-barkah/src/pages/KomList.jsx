import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const initialForm = {
  brand: "",
  mobo: "",
  category: "",
  condition: "New",
  delivery: [],
  releaseDate: "",
  description: "",
};

function KomDetail() {
  const [nbkomputer, setNbkomputer] = useState([]);
  const [formInput, setFormInput] = useState({ ...initialForm });

  //call
  async function getNbkomputer() {
    const result = await axios.get("http://localhost:3000/nbkomputer");
    setNbkomputer(result.data);
  }

  //edit
  // function funcEdit(nbkom) {
  //   setFormInput({ ...nbkom });
  // }

  //delete
  async function funcDelete(id) {
    await axios.delete(`http://localhost:3000/nbkomputer/${id}`);
    getNbkomputer();
  }

  useEffect(() => {
    getNbkomputer();
  }, []);

  return (
    <>
      <h1>Table</h1>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Motherboard</th>
            <th>Category</th>
            <th>Condition</th>
            <th>Delivery</th>
            <th>Release Date</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {nbkomputer.map((nbkom) => (
            <tr key={nbkom.id}>
              <td>{nbkom.brand}</td>
              <td>{nbkom.mobo}</td>
              <td>{nbkom.category}</td>
              <td>{nbkom.condition}</td>
              <td>{nbkom.delivery.join(", ")}</td>
              <td>{nbkom.releaseDate}</td>
              <td>{nbkom.description}</td>
              <td>
                <Link to={"/kom/" + nbkom.id}>
                  <button>Detail</button>
                </Link>
                <Link to="/kom/form" state={nbkom}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => funcDelete(nbkom.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default KomDetail;
