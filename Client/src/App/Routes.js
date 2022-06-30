import { Routes as RoutesReact, Route, Navigate } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Account/Login";
import Register from "./../components/pages/Account/Register";
import ForgotPassword from "../components/pages/Account/ForgotPassword";
import Profile from "../components/pages/Profile/Profile";
import ProfileEdit from "../components/pages/Profile/Edit/ProfileEdit";
import React from "react";
import useUser from "../components/Hooks/useUser";
import HotelStatus from "./../components/pages/HotelStatus/HotelStatus";
import HotelResorts from "./../components/pages/HotelResorts/HotelResorts";
import ConstructionPage from "../components/pages/Construction/ConstructionPage";
import PrivateRetreats from "../components/pages/PrivateRetreats/PrivateRetreats";
import Residences from "./../components/pages/Residences/Residences";
import CheckRates from "./../components/pages/CheckRates/CheckRates";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function Routes() {
  const { user } = useUser();

  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        <RoutesReact key={location.pathname} location={location}>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/page-under-construction"
            element={<ConstructionPage />}
          ></Route>
          <Route path="/account/login" element={<Login />}></Route>
          <Route path="/hotel-resorts" element={<HotelResorts />}></Route>
          <Route
            path="/private-retreats"
            element={<PrivateRetreats></PrivateRetreats>}
          ></Route>
          <Route path="/residences" element={<Residences></Residences>}></Route>
          <Route path="/hotel-status/" element={<HotelStatus />}></Route>
          <Route path="/account/register" element={<Register />}></Route>
          <Route path="/check-rates" element={<CheckRates />}></Route>
          <Route
            path="/account/forgot-password"
            element={<ForgotPassword />}
          ></Route>
          <Route
            path="/account/forgot-password/:token"
            element={<ForgotPassword />}
          ></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route
            path="/profile/edit"
            element={
              user ? <ProfileEdit /> : <Navigate to="/account/login"></Navigate>
            }
          ></Route>
        </RoutesReact>
      </AnimatePresence>
    </>
  );
}

export default Routes;
