import { Routes as RoutesReact, Route, Navigate } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Account/Login";
import Register from './../components/pages/Account/Register';

function Routes() {
  return (
    <RoutesReact>
      <Route path="/" element={<Home />}></Route>
      <Route path="/account/login" element={<Login />}></Route>
      <Route path="/account/Register" element={<Register />}></Route>
      <Route path="/profile" element={<Navigate to="/account/login" />}></Route>
    </RoutesReact>
  );
}

export default Routes;
