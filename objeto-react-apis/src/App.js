import Router from "./Routs/Router";
import { GlobalStyle } from "./GlobalStyle";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalState from "./context/GlobalState";

function App() {
  return (
    <ChakraProvider>
      
      <GlobalStyle />
      {/* <GlobalState>}
      
      </GlobalState> */}
      <Router />
    </ChakraProvider>
  );
}

export default App;
