import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './components/theme/theme';
import { BrowserRouter } from "react-router-dom";
import { queryClient } from './ReactQuery/queryClient';
import { QueryClientProvider } from 'react-query';



ReactDOM.render(
<ChakraProvider theme={theme}>
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
  <App />
  </QueryClientProvider>
  </BrowserRouter>

</ChakraProvider>,
  document.getElementById('root')
);


reportWebVitals();
