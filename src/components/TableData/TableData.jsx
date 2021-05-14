import React from "react"
import './TableData.css'
import "bootstrap/dist/css/bootstrap.css";
import Register from '../Register/Register'


function TableData(props) {
    return (
    
    <div className="TableData">
       <div className="TableData__head">Data</div>
       <div className="TableData__head">Produto</div>
       <div className="TableData__head">Un.</div>
       <div className="TableData__head">Qtd.</div>
       <div className="TableData__head">Qtd Prod.</div>
       <div className="TableData__head">Saldo</div>
    </div>
   )
}

export default TableData