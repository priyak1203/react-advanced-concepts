import { useState } from 'react';

const UseStateBasics = () => {
  //   console.log(useState());
  //   console.log(useState('hello'));
  //   console.log(useState()[0]);
  //   const value = useState('hello world')[0];
  //   const handler = useState('hello world')[1];
  //   console.log(value, handler);

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

export default UseStateBasics;
