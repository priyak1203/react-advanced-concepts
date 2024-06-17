import { useEffect, useState } from 'react';

const CleanupEventExample = () => {
  const [toggle, setToggle] = useState(false);

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

    const scrollFunc = () => {
      console.log('Window Scroll');
    };

    window.addEventListener('scroll', scrollFunc);

    return () => window.removeEventListener('scroll', scrollFunc);
  }, []);

  return <h3 style={{ marginTop: '1rem' }}>Hello There</h3>;
};

export default CleanupEventExample;
