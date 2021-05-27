import React from "react"
import './App.css'
import "bootstrap/dist/css/bootstrap.css";

import service from './components/TableData/service'
import Header from './components/Header/Header'
import Title from './components/Title'
import TableData from './components/TableData/TableData'

function App() {
    let today = service('dd/mm/yy')
    return (<div>
       <Header dataIni={today} dataFim={today}/>
       <Title/>
       <TableData/>
    </div>)
}

export default App