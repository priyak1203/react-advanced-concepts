import { useEffect, useRef, useState } from 'react';

const UseRefBasics = () => {
  const [value, setValue] = useState(0);

  const refContainer = useRef(null);
  const isMounted = useRef(false);

  //   console.log(refContainer);
  //   console.log(isMounted);

  //   useEffect(() => {
  //     console.log(refContainer);
  //   });

  useEffect(() => {
    // avoids running on initial render
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log('re-render');
  }, [value]);

  // setting the focus on input on initial render
  useEffect(() => {
    refContainer.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value;
    console.log(name);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            ref={refContainer}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
