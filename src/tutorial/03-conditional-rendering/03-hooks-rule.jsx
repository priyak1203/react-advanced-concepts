import { useEffect, useState } from 'react';

const HooksRule = () => {
  const [condition, setCondition] = useState(true);

  if (condition) {
    // won't work
    const [state, setState] = useState(true);
  }

  if (condition) {
    return <h2>hello there</h2>;
  }
  // this will also fail
  useEffect(() => {
    console.log('Hello from useEffect');
  }, []);

  return (
    <>
      <h2>Hooks Rule</h2>;
    </>
  );
};

export default HooksRule;
