import React, { Suspense } from 'react';
import { Button } from '@packages/ui-components';

// Lazy Load Remotes
const RemoteHome = React.lazy(() => import('home/App'));
const RemoteProfile = React.lazy(() => import('profile/App'));

const App = () => {
  return (
    <div style={{ border: '2px dashed red', padding: '20px' }}>
      <h1>Host Container</h1>
      <p>This is the main shell.</p>
      <nav style={{ marginBottom: 20 }}>
        <Button onClick={() => console.log('Nav Click')}>Shared Button</Button>
      </nav>
      
      <div style={{ display: 'flex', gap: '20px' }}>
        <Suspense fallback="Loading Home...">
          <RemoteHome />
        </Suspense>
        
        <Suspense fallback="Loading Profile...">
          <RemoteProfile />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
