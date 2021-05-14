import React from "react"
import './App.css'
import "bootstrap/dist/css/bootstrap.css";

import {Button} from 'react-bootstrap'
import Header from './components/Header'
import Title from './components/Title'

function App() {
    return (<div>
       <Header dataIni="10/05/2021" dataFim="10/05/2021"/>
       <Title/>
    </div>)
}

export default App