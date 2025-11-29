import React from 'react';
import { User } from '@packages/shared-types';

const App = () => {
  const user: User = { id: 1, name: 'Pravin', email: 'pravin@example.com', role: 'admin' };
  return (
    <div style={{ border: '2px solid green', padding: '10px' }}>
      <h2>Remote: Profile</h2>
      <p>User: {user.name} ({user.role})</p>
    </div>
  );
};
export default App;