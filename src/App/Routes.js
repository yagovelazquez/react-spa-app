import { Routes as RoutesReact, Route, Navigate } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Account/Login";
import Register from './../components/pages/Account/Register';
import ForgotPassword from "../components/pages/Account/ForgotPassword";

function Routes() {
  return (
    <RoutesReact>
      <Route path="/" element={<Home />}></Route>
      <Route path="/account/login" element={<Login />}></Route>
      <Route path="/account/register" element={<Register />}></Route>
      <Route path="/account/forgot-password" element={<ForgotPassword />}></Route>
      <Route path="/profile" element={<Navigate to="/account/login" />}></Route>
    </RoutesReact>
  );
}

export default Routes;
