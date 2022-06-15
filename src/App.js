import { GlobalState } from "./global/GlobalState";
import { Router } from "./routes/Router";

import backgroundImg from "./assets/main_background.png";
import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2?family=Water+Brush&display=swap');
    font-family: "roboto";
  };

  body {
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
  };
`;

function App() {
  return (
    <div>
      <GlobalState>
        <GlobalStyle />
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;
