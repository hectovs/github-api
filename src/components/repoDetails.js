import { Card, CardContent, CardHeader, Avatar, IconButton } from "@mui/material"
import useOcto from "../hooks/useOcto"
import { useEffect, useState } from "react"
import Markdown from "react-markdown"


function RepoDetails({repo}){
    
    const markdownContent = useOcto()
    const [decodedMd, setDecodedMd] = useState("")

    useEffect(()=>{ 
        setDecodedMd("")
        const options = { 
            "headers": {
                'X-GitHub-Api-Version': '2022-11-28'
            },
            "repo": repo.name, 
            "path": "README.md", 
            "owner": repo.owner.login 
        }
        markdownContent.request('GET /repos/{owner}/{repo}/contents/{path}', options)
    }, [repo])

    useEffect(()=>{
        if(markdownContent.data){
            setDecodedMd(atob(markdownContent.data.content))
        }
    },[markdownContent.data])

    return(

        <div>
            <h1>Selected Repository Details</h1>
            <Card>
                <CardHeader
                  title={repo.name}
                  subheader="includes README.md"
                />
                <CardContent>
                    <p>stars: {repo.stargazers_count}</p>
                    <p>issues: {repo.open_issues} </p>
                    <p>forks: {repo.forks_count}</p>
                    <h1>README.md</h1>
                    <Markdown>
                        {decodedMd}
                    </Markdown>
                </CardContent>
            </Card>
        </div>
    

    )
}

export default RepoDetails