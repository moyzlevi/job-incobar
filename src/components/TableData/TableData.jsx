import React from "react"
import './TableData.css'
import "bootstrap/dist/css/bootstrap.css";
import Register from '../Register/Register'


function TableData(props) {
    return (
    <>
    <div className="TableData text-font-medium center-text">
       <div className="TableData__head--data ">Data</div>
       <div className="TableData__head--produto">Produto</div>
       <div className="TableData__head">Un.</div>
       <div className="TableData__head">Qtd.</div>
       <div className="TableData__head">Qtd Prod.</div>
       <div className="TableData__head">Saldo</div>
    </div>
    <hr></hr>
    <Register/>
    </>
    
   )
}

export default TableData