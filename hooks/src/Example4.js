import React, { useState, useEffect } from "react";

export const Example4 = () => {
  const [count, setCount] = useState(0);
  const clickHandler = () => setCount(count < 5 ? count + 1 : count);

  useEffect(() => {
    document.title = `Вы нажали ${count} раз`;
  }, [count]); // [count] Перезапускать эффект только если count поменялся

  return (
    <div>
      <h1>Example4</h1>
      <p>Вы кликнули {count} раз(а)</p>
      <button onClick={clickHandler}>Нажми на меня</button>
    </div>
  );
};
