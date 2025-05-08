import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay';

function Welcome() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Welcome</h2>
      <p>This is the homepage.</p>
      <CounterDisplay value={count} />
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default Welcome;
