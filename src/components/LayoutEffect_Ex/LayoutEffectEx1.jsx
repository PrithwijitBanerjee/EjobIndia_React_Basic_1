// useLayoutEffect() hooks called before DOM prints/loads ...
// useEffect() hooks called after DOM prints/loads ...

import { useEffect, useLayoutEffect, useState } from 'react'

const LayoutEffectEx1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect without any dependency array called ...');
  });

  useEffect(() => {
    console.log('useEffect called when count state will update ...');
  }, [count]);

  useEffect(() => {
    console.log('useEffect with an empty dependency array called ...');
  }, []);

  useLayoutEffect(() => {
    console.log('useLayoutEffect without any dependency array called ...');
  });

  useLayoutEffect(() => {
    console.log('useLayoutEffect with an empty dependency array called ...');
  }, []);
  useLayoutEffect(() => {
    console.log('useLayoutEffect called when count state will update...');
  }, [count]);

  return (
    <div>
      {
        console.log('render method called ...')
      }
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>update count value</button>
    </div>
  )
}

export default LayoutEffectEx1