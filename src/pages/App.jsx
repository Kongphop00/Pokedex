import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full">
        <div className="mx-auto">
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
      </div>
    </>
  );
}

export default App;
