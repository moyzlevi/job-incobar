import React from "react"
import './Header.css'
import "bootstrap/dist/css/bootstrap.css";
import logomarca from '../../static/img/logomarca.jpg'

function Header() {
    return (<>
       <img src={logomarca} alt="logo"/>
    </>)
}

export default Header