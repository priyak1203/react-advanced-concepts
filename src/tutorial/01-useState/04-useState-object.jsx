import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 28,
    hobby: 'read books',
  });

  const displayPerson = () => {
    setPerson({ name: 'John', age: '31', hobby: 'Mowing the Lawn' });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age} </h3>
      <h4>Enjoys To : {person.hobby}</h4>
      <button type="button" className="btn" onClick={displayPerson}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
