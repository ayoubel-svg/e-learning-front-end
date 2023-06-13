import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoutes = () => {
  const win = window.sessionStorage;
  const [auth, setAuth] = useState(win.getItem("token"));
  const user = useSelector((state) => state.user.userInfo);
  useEffect(() => {
    setAuth(win.getItem("token"));
  }, [user.token, user.name, win]);
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
