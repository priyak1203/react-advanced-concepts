import { createContext, useContext, useState } from 'react';
import NavLinks from './NavLinks';

export const NavbarContext = createContext();

// custom Hook

export const useNavbarContext = () => useContext(NavbarContext);

const NavbarContextAPI = () => {
  const [user, setUser] = useState({ name: 'Dheeraj' });

  const logout = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default NavbarContextAPI;
