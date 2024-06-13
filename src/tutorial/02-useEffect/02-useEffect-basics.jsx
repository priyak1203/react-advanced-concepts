import { useEffect, useState } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log('Hello There');
  };

  sayHello();

  // By Default runs on every render
  useEffect(() => {
    console.log('hello from useEffect');
  });

  // Runs only on initial render - empty dependancy array
  useEffect(() => {
    console.log('UseEffect - Initial Render');
  }, []);

  return (
    <div>
      <h1>Value : {value} </h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};

export default UseEffectBasics;
