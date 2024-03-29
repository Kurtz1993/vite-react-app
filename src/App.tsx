import { useState } from 'react';

import HelloWorld from '@app/components/HelloWorld';

import { ReactComponent as Logo } from './logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <header className="bg-gray-900 text-white flex flex-col items-center justify-center min-h-screen text-xl">
        <Logo className="h-[40vmin] animate-bounce" />
        <p className="my-4">Hello Vite + React!</p>
        <p className="my-4">
          <button
            className="bg-cyan-800 text-white py-2 px-6 rounded"
            onClick={() => setCount(prev => prev + 1)}
            type="button"
          >
            count is: {count}
          </button>
        </p>
        <p className="my-4">
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p className="my-4">
          <a className="text-cyan-300" href="https://reactjs.org" rel="noopener noreferrer" target="_blank">
            Learn React
          </a>
          {' | '}
          <a
            className="text-cyan-300"
            href="https://vitejs.dev/guide/features.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vite Docs
          </a>
        </p>
      </header>
      <HelloWorld name="Vite" />
    </div>
  );
}

export default App;
