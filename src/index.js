import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './components/theme/theme';
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
<ChakraProvider theme={theme}>
  <BrowserRouter>
  <App />

  </BrowserRouter>
</ChakraProvider>,
  document.getElementById('root')
);


reportWebVitals();
