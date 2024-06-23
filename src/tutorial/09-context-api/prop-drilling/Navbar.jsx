import { useState } from 'react';
import NavLinks from './NavLinks';

const NavbarPropDrilling = () => {
  const [user, setUser] = useState({ name: 'Akshay' });

  const logout = () => {
    setUser(null);
  };

  return (
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <NavLinks user={user} logout={logout} />
    </nav>
  );
};

export default NavbarPropDrilling;
