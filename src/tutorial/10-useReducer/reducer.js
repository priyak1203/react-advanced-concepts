import { data } from '../../data';
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_LIST: {
      return { ...state, people: [] };
    }

    case RESET_LIST: {
      return { ...state, people: data };
    }

    case REMOVE_ITEM: {
      const newPeople = state.people.filter(
        (person) => person.id !== action.payload.id
      );
      return { ...state, people: newPeople };
    }

    default:
      throw new Error(`No matching "${action.type}" - action type`);
  }
};

export default reducer;
