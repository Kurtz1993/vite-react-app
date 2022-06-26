import { useState } from 'react';
import { ReactComponent as Logo } from './logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-slate-600 text-center flex flex-col items-center justify-center h-screen text-white">
      <Logo />
      <p>Hello Vite + React!</p>
      <p>
        <button
          type="button"
          onClick={() => setCount(count => count + 1)}
          className="rounded bg-teal-700 text-white py-1 p-4 transition duration-200 shadow-md hover:bg-teal-800 hover:shadow-lg"
        >
          count is: {count}
        </button>
      </p>
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
      <p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        {' | '}
        <a className="App-link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
          Vite Docs
        </a>
      </p>
    </div>
  );
}

export default App;
