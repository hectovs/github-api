import logo from './logo.svg';
import './App.css';
import { Octokit } from "@octokit/core"
import { useEffect } from 'react';
import useOcto from './hooks/useOcto';

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

  const search = useOcto("GET /search/repositories?q={q}", searchOptions)
  const auth = useOcto("/user", options)

  useEffect(()=>{ 
    console.log(qString)
    auth.request()
    search.request()  
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
        { auth.data && <p> there is data</p>}
      </div>
      <div>
        <h1> Searching for this repository </h1>
        {search.data && search.data.items.map((item) => { 
          return(
          <a href={item.html_url}>
            this repo
          </a>
          )
        })}
      </div>
    </div>
  );
}

export default App;
