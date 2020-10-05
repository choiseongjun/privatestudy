import React,{Suspense} from 'react';
import './App.css';
import Loader from './Loader';
const Tag = React.lazy(()=>import("./tags/tag"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<Loader />}>
          <Tag val="Hello" />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
