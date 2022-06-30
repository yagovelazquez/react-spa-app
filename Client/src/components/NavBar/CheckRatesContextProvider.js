import React from "react";
import { useState } from "react";

export const CheckRatesContext = React.createContext({
  destination: "",
  checkin: null,
  guests: [],
  checkout: null,
  setFormValues: () => {},
  promotionCode: "",
});

function CheckRatesContextProvider(props) {
  const [formValues, setFormValues] = useState({
    destination: "",
    checkin: null,
    checkout: null,
    guests: [{ adultCount: 2, childrenCount: 0, key: Math.random() }],
    promotionCode: "",
  });

  const checkRatesCtx = { ...formValues, setFormValues };

  return (
    <CheckRatesContext.Provider value={checkRatesCtx}>
      {props.children}
    </CheckRatesContext.Provider>
  );
}

export default CheckRatesContextProvider;
