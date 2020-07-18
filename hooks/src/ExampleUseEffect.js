import React, { useEffect, useState } from "react";

export function ExampleUseEffect() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // wrong
  // useEffect(() => {
  //    setInterval(() => {
  //     setCount(count + 1);
  //   }, 1000);
  // }, [count]);

  useEffect(() => {
    const id = setInterval(() => {
      setCount2(count2 => count2 + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  console.log(count, count2);
  return <h1>{count}{count2}</h1>;
}
