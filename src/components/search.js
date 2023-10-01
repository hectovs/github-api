import { useCallback, useState } from "react";
import TextField from '@mui/material/TextField'
import { Button, Stack } from "@mui/material";
import useOcto from "../hooks/useOcto";
import RepoList from "./repoList";



// this component supports searching 
// the output is we are looking to find a single repository 
// most of the if we can search by user and/or repository name we should be able to find the repo 
function Search() { 

    const [userInput, setUserInput]= useState("")
    const [repoInput, setRepoInput] = useState("")
    const search = useOcto()

    const searchGithub = useCallback(()=>{
        const qString = `${repoInput} in:name user:${userInput} ` 
        const searchOptions = { 
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }, 
          q: qString
        }

        search.request("GET /search/repositories?q={q}", searchOptions)
    }, [userInput, repoInput])

    return( 
        <div>
            <div>
                <h1>Search Github for Repository</h1>
                <Stack direction={"row"} spacing={2}> 
                    <TextField
                        id="user-input"
                        label="github username"
                        value={userInput}
                        onChange={(e)=>{ 
                            setUserInput(e.target.value)
                        }}
                    />
                    <TextField
                        id="repo-input"
                        label="repository name"
                        value={repoInput}
                        onChange={(e)=>{
                            setRepoInput(e.target.value)
                        }}
                    />
                    <Button variant="contained" onClick={searchGithub}>
                        Search Github
                    </Button>
                </Stack>
            </div>
            <br></br>
            <div>
                <RepoList search={search} />
            </div>
        </div>
    )
}

export default Search 