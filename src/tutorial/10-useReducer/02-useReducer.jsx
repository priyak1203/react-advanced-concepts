import { useReducer } from 'react';
import { data } from '../../data';

const defaultState = {
  people: data,
};

const reducer = () => {};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    // const newList = people.filter((person) => person.id !== id);
    // setPeople(newList);
  };

  const clearAllItems = () => {
    // setPeople([]);
  };

  const resetList = () => {
    // setPeople(data);
  };
  console.log(state);
  return (
    <div>
      {state.people.map((person) => {
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
      {state.people?.length < 1 ? (
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

export default ReducerBasics;
