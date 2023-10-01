import { Card, CardContent } from "@mui/material"
import useOcto from "../hooks/useOcto"
import { useEffect } from "react"


function RepoDetails({repo}){
    const repoContent = useOcto()

    useEffect(()=>{ 


    }, [])

    return(
        <div>
            <Card>
                <CardContent>
                    <p>stars: {repo.stargazers_count}</p>
                    <p>issues: {repo.open_issues} </p>
                    <p>forks: {repo.forks_count}</p>
                    
                </CardContent>
            </Card>
        </div>
    )
}

export default RepoDetails