import React from 'react'
import "./note.css"
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Note = () => {
    return (
        <>
            <h9>Agenda</h9><h9>Tasks</h9> <button className="Detailed_View">Detailed View</button>
            <br />
            <br/>
            <hr />
            <h8>UX/UI Decision Making</h8>
            <br/>
            <h8>UX/UI Products Edit</h8>
            <div className='Note'>
                 <h9 style={{paddingBottom:"4px"}}>Notes</h9>
                <p>Decision Point 1, Points-add actions here</p>
                <p>Insight, Points-add action here</p>
                <p>Discussion, Point- add actions here</p>

                <h8>Resources <span>(Download Links)</span></h8>
                

            </div>
            <button className='btn_'>Sales.pptx <FileDownloadIcon className='download'/></button>
            <button className='btn_'>Sales.pptx  <FileDownloadIcon className='download'/></button>
            

        </>
    )
}

export default Note
