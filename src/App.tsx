import { Main } from "./pages/Main";
import { ThemeProvider } from "styled-components";
import theme from "./global/theme";

import GlobalStyles from "./global/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  );
}

export default App;
