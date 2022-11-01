import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

function Carts() {
  const { token } = useContext(AuthContext);
  const [carts, setCarts] = useState([]);

  function getCarts() {
    axios
      .get("https://dummyjson.com/auth/carts", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        setCarts(result.data.carts);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  useEffect(() => {
    getCarts();
  }, []);

  return (
    <>
      <h1>ini API Carts</h1>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Title Products</th>
            <th>Price Products</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart) => (
            <tr key={cart.id}>
              <td>{cart.products[0].title}</td>
              <td>${cart.products[0].price}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
}
export default Carts;
