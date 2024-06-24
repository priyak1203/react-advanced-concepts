import { useGlobalContext } from '../../../context';

const GlobalContext = () => {
  const { name, changeName } = useGlobalContext();

  return (
    <div>
      <h2>Global Context</h2>
      <h3>Name: {name}</h3>
      <button className="btn" onClick={changeName}>
        change name
      </button>
    </div>
  );
};
export default GlobalContext;
