import React from "react"
import './App.css'
import "bootstrap/dist/css/bootstrap.css";


import Header from './components/Header/Header'
import Title from './components/Title'
import TableData from './components/TableData/TableData'
import { actualDate } from "./util";

function App() {
    
    return (<div>
       <Header dataIni={actualDate()} dataFim={actualDate()}/>
       <Title/>
       <TableData/>
    </div>)
}

export default App