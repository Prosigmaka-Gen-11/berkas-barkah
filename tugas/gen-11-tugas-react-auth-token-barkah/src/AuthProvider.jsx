import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(function () {
    const savedUserData = localStorage.getItem("userData");

    if (savedUserData) {
      const parsedUserData = JSON.parse(savedUserData);
      return parsedUserData;
    } else {
      return {};
    }
  });

  const [token, setToken] = useState(function () {
    const savedToken = localStorage.getItem("token");
    return savedToken ?? null; // savedToken ? savedToken : null;
  });

  const isLogin = token != null;

  function handlerAfterLogin(data) {
    setUserData(data);
    setToken(data.token);
    localStorage.setItem("userData", JSON.stringify(data));
    localStorage.setItem("token", data.token);
  }

  function logout() {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    setUserData({});
    setToken(null);
  }

  return (
    <>
      <AuthContext.Provider
        value={{
          userData,
          setUserData,

          token,
          setToken,

          isLogin,

          handlerAfterLogin,
          logout,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
