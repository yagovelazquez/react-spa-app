import "../App.css";
import NavBar from "../components/NavBar/NavBar";
import React from "react";
import Routes from "./Routes";
import Footer from "../components/Footer/Footer";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "../ReactQuery/queryClient";
import { useEffect } from "react";
import useUser from "../components/Hooks/useUser";

function App() {



  useEffect(() => {
    queryClient.invalidateQueries('user')
  }, [])


 

  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <NavBar></NavBar>
        <Routes />

        <Footer />
        <ReactQueryDevtools></ReactQueryDevtools>
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
