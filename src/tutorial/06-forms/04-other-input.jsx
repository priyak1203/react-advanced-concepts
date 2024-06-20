import { useState } from 'react';

const frameworks = ['react', 'angular', 'vue', 'svelte'];

const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState('');

  const handleShipping = (e) => {
    setShipping(e.target.checked);
  };

  const handleFramework = (e) => {
    setFramework(e.target.value);
  };

  return (
    <div>
      <form className="form">
        <h4>other inputs</h4>
        {/* checkbox */}
        <div className="form-row" style={{ textAlign: 'left' }}>
          <label
            htmlFor="shipping"
            className="form-label"
            style={{
              display: 'inline',
              marginRight: '1rem',
            }}
          >
            free shipping
          </label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={handleShipping}
          />
        </div>
        {/* select */}
        <div className="form-row" style={{ textAlign: 'left' }}>
          <label
            htmlFor="framework"
            className="form-label"
            style={{ display: 'inline', marginRight: '1rem' }}
          >
            framework
          </label>
          <select
            name="framework"
            id="framework"
            value={framework}
            onChange={handleFramework}
            style={{ textTransform: 'capitalize' }}
          >
            {frameworks.map((framework, index) => {
              return <option key={index}>{framework}</option>;
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};

export default OtherInputs;
