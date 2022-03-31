import { Routes as RoutesReact, Route } from "react-router-dom";
import Home from "../components/pages/Home/Home";

function Routes() {
  return (
    <RoutesReact>
      <Route path="/" element={<Home />}></Route>
    </RoutesReact>
  );
}

export default Routes;
