import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

function About() {
  const { token } = useContext(AuthContext);
  const [quotes, setQuotes] = useState([]);

  function getProducts() {
    axios
      .get("https://dummyjson.com/auth/quotes", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setQuotes(res.data.quotes);
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
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>
            {quote.quote} - Author: {quote.author}
          </li>
        ))}
      </ul>
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
}
export default About;
