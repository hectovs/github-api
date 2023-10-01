import {useState } from "react"
import { Octokit } from "@octokit/core"

export default function useOcto(apiCall) { 
    const [data, setData] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const request = async (apiCall) => { 
        const patToken = process.env.REACT_APP_GITHUB_PAT
        const octokit = new Octokit({auth:`${patToken}`})
        setLoading(true)
        try{ 
            const res = await octokit.request(apiCall)
            setData(res.data)
        } catch (err) { 
            setError(err.message || "unexpected error")
        } finally { 
            setLoading(false)
        }
    };

    return { 
        data, 
        error, 
        loading, 
        request
    }
}