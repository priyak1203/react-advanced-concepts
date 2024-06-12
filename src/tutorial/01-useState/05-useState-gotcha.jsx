import { useState } from 'react';

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Case 1
    // setCount(count + 1);
    // console.log(count);
    //==========================================//
    // Case 1 - Fix
    // setCount((currentValue) => currentValue + 1);
    //==========================================//
    // setTimeout Example
    // setTimeout(() => {
    //   console.log('Button Clicked');
    //   setCount(count + 1);
    // }, 3000);
    //==========================================//
    // setTimeout Fix
    setTimeout(() => {
      console.log('Clicked the button');
      setCount((currentValue) => currentValue + 1);
    }, 3000);
  };

  return (
    <div>
      <h3>{count}</h3>
      <button type="button" onClick={handleClick} className="btn">
        increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
