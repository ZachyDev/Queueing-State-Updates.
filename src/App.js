import React, { useState } from "react";

export default function counter() {
  const [counter, setCounter] = useState(0);

  // update counter
  const updateCounter = () => {
    setCounter((n) => n + 1);
    setCounter((n) => n + 1);
    setCounter((n) => n + 1);
  };

  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={updateCounter}>Increase Counter</button>
    </div>
  );
}
