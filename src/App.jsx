import React from "react"
import './App.css'
import "bootstrap/dist/css/bootstrap.css";

import {Button} from 'react-bootstrap'
import Header from './components/Header'

function App() {
    return (<div>
       <Header/>
       <Button>Hello World</Button>
    </div>)
}

export default App