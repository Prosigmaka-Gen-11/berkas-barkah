import { useContext } from "react";
import { KomContext } from "./KomForm";

function KomList() {
  const { nbkomputer } = useContext(KomContext);

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
          {nbkomputer.map((nbkom) => (
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
