import { useState } from 'react';
import { data } from '../../data';

const UserChallengeForms = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    // if no value, then alert the user and return
    if (!name) {
      console.log('Please enter name');
      return;
    }

    // create a new user
    const fakeId = Date.now();
    const newUser = { id: fakeId, name };

    setUsers([...users, newUser]);
    setName('');
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>add user</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* renders users below */}

      <h2>users</h2>
      {users.map((user) => {
        const { id, name } = user;
        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default UserChallengeForms;
