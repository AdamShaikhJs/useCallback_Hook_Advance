import React, { useState, useCallback } from 'react';
import './style.css';
import Child from './Child.js';
export default function App() {
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(0);
  console.log('parent Component --------------------->');
  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  //----Problem statement-----
  // const handleCount = () => {
  //   setCount(count + 1);
  // };

  const handleAdd = () => {
    setAdd(add + 1);
  };
  return (
    <div>
      <h4>useCallBack Hooks! </h4>
      <h6> Add - {add}</h6>
      <button onClick={handleAdd}> Add </button>
      <hr />
      <h6> Count - {count}</h6>
      <Child handleCount={handleCount} />
    </div>
  );
}
