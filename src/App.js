import logo from './logo.svg';
import './App.css';
import { Octokit } from "@octokit/core"
import { useEffect } from 'react';
import useOcto from './hooks/useOcto';
import Search from './components/search';

function App() {
  const options = {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  }
  const qString = "github-api in:name user:hectovs" 
  const searchOptions = { 
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }, 
    q: qString
  }

  const search = useOcto()
  const auth = useOcto()

  useEffect(()=>{ 
    console.log(qString)
    auth.request("/user", options)
    search.request("GET /search/repositories?q={q}", searchOptions)  
  },  [])

  useEffect(()=>{ 
    console.log(search.data)
  }, [search])

  return (
    <div className="App">
      <div>
        <h1> Status</h1>
        { auth.loading && <p> awaiting response !</p> }
        { auth.error && <p> API error</p>}
        { auth.data && <p>The personal access token provided is correct</p>}
      </div>
      <div>
        <Search/>
      </div>
    </div>
  );
}

export default App;
