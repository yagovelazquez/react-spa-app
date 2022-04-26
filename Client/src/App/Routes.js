import { Routes as RoutesReact, Route, Navigate } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Account/Login";
import Register from './../components/pages/Account/Register';
import ForgotPassword from "../components/pages/Account/ForgotPassword";
import Profile from "../components/pages/Profile/Profile";
import ProfileEdit from "../components/pages/Profile/Edit/ProfileEdit";
import React from "react";
import useUser from "../components/Hooks/useUser";



function Routes() {

  const {user} = useUser()


  return (
    <RoutesReact>
      <Route path="/" element={<Home />}></Route>
      <Route path="/account/login" element={<Login />}></Route>
      <Route path="/account/register" element={<Register />}></Route>
      <Route path="/account/forgot-password" element={<ForgotPassword />}></Route>
      <Route path="/account/forgot-password/:token" element={<ForgotPassword />}></Route>
      <Route path="/profile" element={user ? <Profile /> : <Navigate to="/account/login"></Navigate>}></Route>
      <Route path="/profile/edit" element={user ? <ProfileEdit /> : <Navigate to="/account/login"></Navigate>}></Route>
    </RoutesReact>
  );
}

export default Routes;
