import logo from './logo.svg';
import './App.css';
import { Octokit } from "@octokit/core"
import { useEffect } from 'react';
import useOcto from './hooks/useOcto';

function App() {
  const auth = useOcto("/user")

  useEffect(()=>{ 
    auth.request()  
  },  [])

  return (
    <div className="App">
      <div>
        <h1> Status</h1>
        { auth.loading && <p> Posts are loading !</p> }
        { auth.error && <p> API error</p>}
        { auth.data && <p> there is data</p>}
      </div>
    </div>
  );
}

export default App;
