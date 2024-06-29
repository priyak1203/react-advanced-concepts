import { Suspense, lazy, useState, useTransition } from 'react';

const SlowComponent = lazy(() => import('./SlowComponent'));

const ReactSuspenseLazy = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);

  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setText(e.target.value);

    // slowdown CPU
    // startTransition(() => {
    //   const newItems = Array.from({ length: 5000 }, (_, index) => {
    //     return (
    //       <div key={index}>
    //         <img src="/vite.svg" alt="" />
    //       </div>
    //     );
    //   });
    //   setItems(newItems);
    // });
  };

  return (
    <section>
      <form className="form">
        <input
          type="text"
          className="form-input"
          value={text}
          onChange={handleChange}
        />
      </form>

      <h4>items below</h4>
      {isPending ? (
        <h5>Loading...</h5>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            marginTop: '2rem',
          }}
        >
          {items}
        </div>
      )}

      <button className="btn" onClick={() => setShow(!show)}>
        toggle
      </button>
      {show && (
        <Suspense fallback={<h4>loading...</h4>}>
          <SlowComponent />
        </Suspense>
      )}
    </section>
  );
};

export default ReactSuspenseLazy;
