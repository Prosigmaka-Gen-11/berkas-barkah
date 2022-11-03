import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedLayout() {
  const authSlice = useSelector((state) => state.auth);

  if (authSlice.isLogin) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}
