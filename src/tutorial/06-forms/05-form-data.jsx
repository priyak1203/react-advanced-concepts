import { useState } from 'react';

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    // console.log(e.target);
    const formData = new FormData(e.currentTarget);
    // console.log(formData);

    // const name = formData.get('name');
    // const email = formData.get('email');
    // console.log({ name, email });

    // console.log(formData.entries());
    // console.log([...formData.entries()]);

    const newUser = Object.fromEntries(formData);
    console.log(newUser);

    // re-render does not clear the form
    setValue(value + 1);

    e.currentTarget.reset();
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>form data API</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" id="name" name="name" className="form-input" />
        </div>

        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input type="email" id="email" name="email" className="form-input" />
        </div>

        {/* password */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};

export default UncontrolledInputs;
