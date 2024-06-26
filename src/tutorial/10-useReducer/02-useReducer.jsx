import { useReducer } from 'react';
import { data } from '../../data';
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from './actions';
import reducer from './reducer';

const defaultState = {
  people: data,
  isLoading: false,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const clearAllItems = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };

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
