import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { handlerAfterLogin } from "./authSlice";

function Login() {
  const authSlice = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(evt) {
    evt.preventDefault();

    axios
      .post("https://dummyjson.com/auth/login", {
        username,
        password,
      })
      .then((result) => {
        console.log(result.data);
        dispatch(handlerAfterLogin(result.data));
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  if (authSlice.isLogin) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <h1>ini login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username: <br />
          <input
            required
            type="text"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
          />
        </label>

        <br />
        <br />

        <label>
          Password: <br />
          <input
            required
            type="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </label>

        <br />
        <br />

        <button>Login</button>
      </form>
    </>
  );
}

export default Login;
