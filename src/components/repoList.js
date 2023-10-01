import { useMemo, useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { RepoDetails} from "./repoDetails"


function RepoList({search}){ 

    const [selectedRow, setSelectedRow] = useState([])

    handleRowSelect = (e) => { 
        setSelectedRow(e.selectionModel)
    }

    const [columns, setColumns] = useState([
        {
            field:"name",
            headerName: "Repository Name",
            width: "200"
        },
        {
            field:"owner",
            headerName: "Owner",
            width: "200"
        },
        {
            field: "html_url",
            headerName: "Link",
            renderCell: (params) => { 
                console.log(params)
                return( 
                    <a href={params.value} >Link to Github</a>
                )
            }
        }

    ])

    const rows = useMemo(()=>{
        if(search.data){
            console.log(search.data)
            const remakeRows = search.data.items.map((repo)=>{
                return(
                    {
                        "id" : repo.id,
                        "name" : repo.name,
                        "owner" : repo.owner.login,
                        "html_url" : repo.html_url
                    }
                )
            })

            return remakeRows

        }
    }, [search]) 
    



    return( 
        <div>
            <div>
                {
                    search.loading &&
                    <p>Awaiting results from github</p>
                }
                {
                    search.error && search.data == "undefined" &&
                    <p>Github API error you may have hit your search API limit</p>
                }
                {
                    columns && rows &&
                    <DataGrid
                        rows = {rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                            },
                        }}
                        pageSizeOptions={[5]}
                        onRowSelectionModelChange={handleRowSelect}
                    />   
                }
            </div>
            <div>
                <RepoDetails/>
            </div>
        </div>

    )
}

export default RepoList