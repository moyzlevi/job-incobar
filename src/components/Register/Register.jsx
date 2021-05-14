import React from "react"
import './Register.css'
import "bootstrap/dist/css/bootstrap.css";



function Register(props) {
    return (
    <div className="Register text-font-medium ">
       <div className="center-text firstCol">{props.data}</div>
       <div className="big-cell">{props.produto}</div>
       <div className="align-right-padding text-center">{props.unidade}</div>
       <div className="align-right-padding">{props.quantidade}</div>
       <div className="align-right-padding">{props.quantidadeProduto}</div>
       <div className="align-right-padding">1000,0</div>
       <div className="align-right-padding">{props.saldo}</div>
    </div>)
}

export default Register