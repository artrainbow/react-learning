import React, { useState, useContext } from "react";
import { ThemeContext } from "./App";

export function ThemedButton() {
  const theme = useContext(ThemeContext);
  const [styles, setStyles] = useState(theme.light);
  const [trigger, setTrigger] = useState(false);

  const clickHandler = () => {
    setTrigger(!trigger);
    setStyles(trigger ? theme.light : theme.dark)
  };

  return (
    <button
      style={styles}
      onClick={clickHandler}
    >
      Я стилизован темой из контекста! Благодаря useContext hook
    </button>
  );
}
