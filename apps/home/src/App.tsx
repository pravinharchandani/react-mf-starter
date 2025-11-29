import React from 'react';
import { formatCurrency } from '@packages/utils';

const App = () => {
  return (
    <div style={{ border: '2px solid blue', padding: '10px' }}>
      <h2>Remote: Home</h2>
      <p>Balance: {formatCurrency(1234.56)}</p>
    </div>
  );
};
export default App;