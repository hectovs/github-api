import logo from './logo.svg';
import './App.css';
import { Octokit } from "@octokit/core"
import { useEffect } from 'react';

function App() {

  
  useEffect(()=>{
    const patToken = process.env.REACT_APP_GITHUB_PAT
    const octokit = new Octokit({auth:`${patToken}`})
    
    const getUser = async ()=>{ 
      console.log(patToken)
      const {data} = await octokit.request("/user")
      console.log(data)
    }

    getUser()
  }
  ,[])


  return (
    <div className="App">

    </div>
  );
}

export default App;
