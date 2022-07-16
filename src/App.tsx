import { ThemeProvider } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./global/theme";
import { Main } from "./pages/Main";

import GlobalStyles from "./global/global";

function App() {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Main />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
