import React from "react"
import './App.css'
import "bootstrap/dist/css/bootstrap.css";

import {Button} from 'react-bootstrap'
import Header from './components/Header/Header'
import Title from './components/Title/Title'
import TableData from './components/TableData/TableData'

function App() {
    return (<div>
       <Header dataIni="10/05/2021" dataFim="10/05/2021"/>
       <Title/>
       <TableData/>
    </div>)
}

export default App