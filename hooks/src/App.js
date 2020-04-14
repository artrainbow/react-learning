import React from "react";
import { Example } from "./Example";
import { Example1 } from "./Example1";
import { Example2 } from "./Example2";
import { Example3 } from "./Example3";
import { Example4 } from "./Example4";
import { Example5 } from "./Example5";
import { Example6 } from "./Example6";
import { Example7 } from "./Example7";
import { Example8 } from "./Example8";
import { Example9 } from "./Example9";
import { Example10 } from "./Example10";

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

export const ThemeContext = React.createContext(null);

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={themes}>
        <Example />
        <Example1 />
        <Example2 />
        <Example3 />
        <Example4 />
        <Example5 />
        <Example6 />
        <Example7 initialCount={0} />
        <Example8 />
        <Example9 />
        <Example10 />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
