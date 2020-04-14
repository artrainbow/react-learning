import React, { useState, useEffect } from "react";

export const Example3 = () => {
  // Объявление новой переменной состояния «count»
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    document.title = `Вы нажали ${count} раз`;
  });

  return (
    <div>
      <h1>Example3</h1>
      <p>Вы кликнули {count} раз(а)</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
};
