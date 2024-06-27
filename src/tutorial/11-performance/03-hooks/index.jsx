import { useState } from 'react';
import { data } from '../../../data';
import List from './List';

const ReactMemo = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} />
    </div>
  );
};

export default ReactMemo;
