import React from "react"
import './App.css'
import "bootstrap/dist/css/bootstrap.css";

import service from './components/TableData/service'
import Header from './components/Header/Header'
import Title from './components/Title'
import TableData from './components/TableData/TableData'

function App() {
    
    return (<div>
       <Header dataIni={''} dataFim={''}/>
       <Title/>
       <TableData/>
    </div>)
}

export default App