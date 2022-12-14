import { useContext, useEffect } from "react";
import { KomContext } from "./KomProvider";
import axios from "axios";

function KomList(props) {
  const ContextFromProvider = useContext(KomContext);

  //call
  async function getNbkomputer() {
    const result = await axios.get("http://localhost:3000/nbkomputer");
    ContextFromProvider.setNbkomputer(result.data);
  }

  useEffect(() => {
    getNbkomputer();
  }, []);

  return (
    <>
      <h1>Table List</h1>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Motherboard</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ContextFromProvider.nbkomputer.map((nbkom) => (
            <tr key={nbkom.id}>
              <td>{nbkom.brand}</td>
              <td>{nbkom.mobo}</td>
              <td>{nbkom.category}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default KomList;
