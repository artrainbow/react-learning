import React from "react";
import { ExampleUseEffect2 } from "./ExampleUseEffect2";

const themes = {
  light: {
    color: "#000000",
    background: "rgba(255,255,255,0.99)"
  },
  dark: {
    color: "#ffffff",
    background: "#222222"
  }
};

// export const ThemeContext = React.createContext(null);

function App() {
  return (
    <div className="App">
      {/*<ThemeContext.Provider value={themes}>*/}
        <ExampleUseEffect2 />
      {/*</ThemeContext.Provider>*/}
    </div>
  );
}

export default App;
