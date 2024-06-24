import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [name, setName] = useState('Peter');

  const changeName = () => {
    const newName = name === 'Peter' ? 'David' : 'Peter';
    setName(newName);
  };

  return (
    <GlobalContext.Provider value={{ name, changeName }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default AppContext;
