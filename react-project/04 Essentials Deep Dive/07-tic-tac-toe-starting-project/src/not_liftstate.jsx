import React, { useState } from 'react';

function GrandParent() {
  const [count, setCount] = useState(0);

  return <Parent count={count} setCount={setCount} />;
}

function Parent({ count, setCount }) {
  return <Child count={count} setCount={setCount} />;
}

function Child({ count, setCount }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default GrandParent;
