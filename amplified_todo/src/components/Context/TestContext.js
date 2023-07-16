import React, { createContext, useContext, useState } from 'react';

// Create a new context
const DifficultyContext = createContext();

// Create a provider component
export const TestDetailsContext = ({ children }) => {
  const [difficulty, setDifficulty] = useState(0);
  const [domain, setDomain] = useState(null);


  return (
    <DifficultyContext.Provider value={{ difficulty, setDifficulty, domain, setDomain}}>
      {children}
    </DifficultyContext.Provider>
  );
};

// Custom hook to use the difficulty context
export const useDifficulty = () => {
  return useContext(DifficultyContext);
};
