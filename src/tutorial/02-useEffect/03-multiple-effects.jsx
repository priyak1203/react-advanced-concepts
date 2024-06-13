import { useEffect, useState } from 'react';

const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log('hello from first useEffect');
  }, []);

  useEffect(() => {
    console.log('hello from second useEffect');
  }, []);

  useEffect(() => {
    console.log('hello on inital render and  only when FIRST value changes');
  }, [value]);

  useEffect(() => {
    console.log('hello on inital render and only when SECOND value changes');
  }, [secondValue]);

  useEffect(() => {
    console.log(
      'hellow on initial render and when EITHER first or second value changes'
    );
  }, [value, secondValue]);

  return (
    <div>
      <h1>Value : {value} </h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        value
      </button>
      <h1>Second Value : {secondValue} </h1>
      <button className="btn" onClick={() => setSecondValue(secondValue + 1)}>
        second value
      </button>
    </div>
  );
};

export default MultipleEffects;
