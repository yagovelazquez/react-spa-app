
import "../App.css";
import NavBar from "../components/NavBar/NavBar";
import React from "react";
import Routes from "./Routes";
import Footer from "../components/Footer/Footer";


function App() {
  return (
    <React.Fragment>

   <NavBar></NavBar>
   <Routes />
      
    <Footer />

  </React.Fragment>
  )}

export default App;
