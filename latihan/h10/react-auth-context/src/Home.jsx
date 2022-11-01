import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

function Home() {
  const { userData, token, logout } = useContext(AuthContext);

  function handleLogout() {
    logout();
  }
  return (
    <>
      <h1>Home</h1>
      <h3>wasaapppppp, {userData.firstName}</h3>
      <p>token u : {token}</p>
      <Link to="/quotes">
        <button>Quotes</button>
      </Link>

      <Link to="/carts">
        <button>Carts</button>
      </Link>
      <br />
      <br />
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Home;
