import { useEffect, useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  console.log('render');

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <Greeting />}
    </div>
  );
};

const Greeting = () => {
  useEffect(() => {
    console.log('Hello from Greetings - useEffect');
    const intId = setInterval(() => {
      console.log('Hello from Interval');
    }, 1000);

    return () => {
      clearInterval(intId);
      console.log('cleanup');
    };
  }, []);

  return <h3 style={{ marginTop: '1rem' }}>Hello There</h3>;
};

export default CleanupFunction;
