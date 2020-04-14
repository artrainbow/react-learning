import React, { useState } from 'react';

export function Example2() {
  // Объявление новой переменной состояния «count»
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Example2</h1>
      <p>Вы кликнули {count} раз(а)</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </div>
  );
}