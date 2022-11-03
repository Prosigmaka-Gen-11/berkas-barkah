import { useSelector, useDispatch } from "react-redux";
import { logout } from "./authSlice";
import { Link } from "react-router-dom";

function Home() {
  const authSlice = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <>
      <h1>inihome</h1>
      <h3>wasaapppppp, {authSlice.userData.firstName}</h3>
      <p>token u : {authSlice.token}</p>
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
