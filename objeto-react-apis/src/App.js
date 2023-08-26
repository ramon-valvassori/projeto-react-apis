import Router from "./Routs/Router";
import { GlobalStyle } from "./GlobalStyle";
import * as React from "react";

import GlobalState from "./context/GlobalState";

function App() {
  return (
    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>
  );
}

export default App;
