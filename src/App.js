import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [counter, setCounter] = useState(0);

  /**Like created, mounted, updated in case of Vue
   *
   * if you will not provide the dependancy than anything update in the markup it will automatically trigger everytime.
   */
  useEffect(() => console.log('Use Effect without any denendancy'));

  useEffect(() => {
    console.log('Use Effect with denendancy');
  }, [counter]);

  /**This will get called 2 times only that too at the initial load So if we are calling an API which will get called only 1 time in initial load then call by []  */
  useEffect(() => {
    console.log('Use Effect with empty dependancy');
  }, []);

  return (
    <div>
      <h1>Use Effect In Depth </h1>

      <button onClick={() => setCounter(counter + 1)}>
        Increment {counter}
      </button>
    </div>
  );
}
