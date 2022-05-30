import React from "react";
import Products from './components/Products'
import { ChakraProvider } from '@chakra-ui/react'


const App = () => {
  return <div>{/* TODO: Code here */}
  <ChakraProvider>
     <Products/>
  </ChakraProvider>
  </div>;
};

export default App;
