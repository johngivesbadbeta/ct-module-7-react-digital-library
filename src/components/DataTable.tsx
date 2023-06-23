import { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90  },
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'author', headerName: 'Author', flex: 1 },
    { field: 'format', headerName: 'Format', flex: 1 },
    { field: 'release_date', headerName: 'Release Date', flex: 1 }
]

const DataTable = () => {
  const [ open, setOpen ] = useState(false);
  const { bookData, getData } = useGetData();
  const [ selectionModel, setSelectionModel ] = useState<string[]>([])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteData = () => {
    server_calls.delete(selectionModel[0]);
    getData();
    console.log(`Selection model: ${selectionModel}`)
    setTimeout( () => { window.location.reload() }, 500)
  }

  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className='flex flex-row'>
            <div>
                <button
                    className='p-3 m-3 bg-slate-300 rounded hover:bg-slate-800 hover:text-white'
                    onClick={() => handleOpen()}
                >
                    New Contact
                </button>
            </div>
            <Button onClick={handleOpen} className='p-3 m-3 rounded bg-slate-300 hover:bg-slate-800 hover:text-white' >Update</Button>
            <Button onClick={deleteData} className='p-3 m-3 rounded bg-slate-300 hover:bg-slate-800 hover:text-white' >Delete</Button>
        </div>
        <div className={ open ? 'hidden' : 'container mx-10 my-5 flex flex-col'}
            style={{ height: 400, width: '100%' }}
            >
                <h2 className='p-3 bg-slate-300 my-2 rounded'> My Contact</h2>
                <DataGrid
                  rows={bookData}
                  columns={columns}
                  checkboxSelection={true} 
                  onRowSelectionModelChange={ (item:any) => {
                    setSelectionModel(item)
                }}
                slotProps={{
                  pagination: {
                    rowsPerPageOptions: [5]
                  }
                }}
                />
        </div>
    </>
  )
}

export default DataTable