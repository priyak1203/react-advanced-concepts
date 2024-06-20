import { useState } from 'react';

const frameworks = ['react', 'angular', 'vue', 'svelte'];

const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);

  const handleShipping = (e) => {
    setShipping(e.target.checked);
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
        <div className="form-row" style={{ textAlign: 'left' }}>
          <label htmlFor="framework" className="form-label">
            framework
          </label>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};

export default OtherInputs;
