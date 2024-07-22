import React, { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <CounterContext.Provider value={{ counter, setCounter, incrementCounter, decrementCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
