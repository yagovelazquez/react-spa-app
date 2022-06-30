import { Collapse } from "@chakra-ui/react";
import "react-datepicker/dist/react-datepicker.css";
import CheckRatesContextProvider from "./CheckRatesContextProvider";
import CheckRatesForm from "./CheckRatesForm";
import useOutsideClick from "../Hooks/useOutsideClick";
import { useRef } from "react";

function RatesCollapse(props) {
  const { isOpen, onToggle } = props;

  const checkRatesRef = useRef();

  useOutsideClick({
    ref: checkRatesRef,
    value: "checkRatesButton",
    callback: () => onToggle(false),
  });

  return (
    <Collapse animateOpacity ref={checkRatesRef} in={isOpen}>
      <CheckRatesContextProvider>
        <CheckRatesForm variant="collapse" onToggle={onToggle}></CheckRatesForm>
      </CheckRatesContextProvider>
    </Collapse>
  );
}

export default RatesCollapse;
