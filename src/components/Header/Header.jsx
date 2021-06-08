import React from "react"
import './Header.css'
import "bootstrap/dist/css/bootstrap.css";
import logomarca from '../../../static/img/logomarca.jpg'
import {Alert} from 'react-bootstrap'

function Header(props) {
    return (<div className="header">
       <img src={logomarca} alt="logo"/>
        <div className="header__title">
            <h2 className="header__title--sub">Incobor Ind. Com. de Borrachas</h2>
            <h1 className="header__title--main">Plano de Produção</h1>
            <Alert variant="dark" className="header__emissao">{props.dataIni}</Alert>
        </div>
    </div>)
}

export default Header