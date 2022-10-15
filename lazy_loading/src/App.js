import { lazy, Suspense } from 'react';

import './App.css';

const Message= lazy(()=> import('./components/one'));

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Suspense fallback='Loading..'>
        <h2><Message/></h2>
      </Suspense>
    </div>
  );
}

export default App;
