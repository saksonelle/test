import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import Game from "./components/Game";

import { Wrapper } from "./styles";
import { ThemeContext } from "./utils/themes";

function App() {
  const theme = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <Game />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
