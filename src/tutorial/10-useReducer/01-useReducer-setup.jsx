import { useState } from 'react';
import { data } from '../../data';

const ReducerBasicsSetup = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const newList = people.filter((person) => person.id !== id);
    setPeople(newList);
  };

  const clearAllItems = () => {
    setPeople([]);
  };

  const resetList = () => {
    setPeople(data);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      {people?.length < 1 ? (
        <button
          type="button"
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          reset
        </button>
      ) : (
        <button
          type="button"
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={clearAllItems}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasicsSetup;
