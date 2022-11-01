import axios from "axios";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

function Login() {
  const navigate = useNavigate();
  const { handlerAfterLogin, isLogin } = useContext(AuthContext);

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
        handlerAfterLogin(result.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  if (isLogin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <h1>Login</h1>
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
