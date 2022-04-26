import "../App.css";
import NavBar from "../components/NavBar/NavBar";
import React, { useRef } from "react";
import Routes from "./Routes";
import Footer from "../components/Footer/Footer";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "../ReactQuery/queryClient";
import { useEffect } from "react";
import useUser from "../components/Hooks/useUser";
import { useLocation } from "react-router-dom";
import LoadingModal from "../components/commom/LoadingModal";
import { useIsMutating } from "react-query";

function App() {
  const { user, clearUser } = useUser();

  const logoutUser = useRef();

  useEffect(() => {
    if (user) {

    

      const tokenExpirationTime =
      (user.expiresIn - Math.floor(Date.now() / 1000)) * 1000;
      logoutUser.current = setTimeout(clearUser, tokenExpirationTime);
  
    return () => {
      clearTimeout(logoutUser.current);
    };
    }


    return () => {
      clearTimeout(logoutUser.current);
    };
  }, [user]);

  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    queryClient.invalidateQueries("user", { exact: true });
  }, []);

  const isMutating = useIsMutating();
  const isMutatingInterest = queryClient.isMutating({
    mutationKey: "interests",
  });

  return (
    <React.Fragment>
      <LoadingModal
        isLoading={isMutating && !isMutatingInterest}
      ></LoadingModal>
      <NavBar></NavBar>
      <Routes />
      <Footer />
      <ReactQueryDevtools></ReactQueryDevtools>
    </React.Fragment>
  );
}

export default App;
