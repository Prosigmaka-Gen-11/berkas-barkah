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
      <ul>
        {carts.map((cart) => (
          <li key={cart.id}>
            {cart.products[0].title} - ${cart.products[0].price}
          </li>
        ))}
      </ul>
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
}
export default Carts;
