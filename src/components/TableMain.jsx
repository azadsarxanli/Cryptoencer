import React from 'react'
import '../assets/css/TableMain.css'
import { Pagination } from '@mui/material'
import bg1 from '../assets/img/table/1.png'
import bg2 from '../assets/img/table/2.png'
import bg3 from '../assets/img/table/3.png'
import bg4 from '../assets/img/table/4.png'
import bg5 from '../assets/img/table/5.png'
import bg6 from '../assets/img/table/6.png'

const TableMain = () => {
  return (
    <div className="table-main">
            <img className="table-main-bg-1" src={bg1} alt="" />
            <img className="table-main-bg-2" src={bg2} alt="" />
            <img className="table-main-bg-3" src={bg3} alt="" />
            <img className="table-main-bg-4" src={bg4} alt="" />
            <img className="table-main-bg-5" src={bg5} alt="" />
            <img className="table-main-bg-6" src={bg6} alt="" />

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Platforms</th>
                        <th>Volume</th>
                        <th>Requirements</th>
                        <th>Audit</th>
                    </tr>
                </thead>

                <tbody>
                    
                </tbody>
            </table>

            <div className="table-pagination">
                <Pagination count={10} color="primary" />
            </div>
        </div>
  )
}

export default TableMain