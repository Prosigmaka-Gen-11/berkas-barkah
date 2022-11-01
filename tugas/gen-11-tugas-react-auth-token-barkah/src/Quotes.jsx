import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

function Quotes() {
  const { token } = useContext(AuthContext);
  const [quotes, setQuotes] = useState([]);

  function getProducts() {
    axios
      .get("https://dummyjson.com/auth/quotes", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        setQuotes(result.data.quotes);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1>ini API Quotes</h1>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Quotes</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote) => (
            <tr key={quote.id}>
              <td>{quote.quote}</td>
              <td>{quote.author}</td>
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
export default Quotes;
