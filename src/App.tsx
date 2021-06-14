import React from "react";
import { Global } from "@emotion/react";
import GlobalStyle from "./Styles/GlobalStyle";

const App = () => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <div className="App">hi</div>
    </>
  );
};

export default App;
