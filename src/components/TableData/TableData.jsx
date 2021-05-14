import React, {Component} from "react";
import "./TableData.css";
import "bootstrap/dist/css/bootstrap.css";
import Register from "../Register/Register";

import getData from "./service.js";

export default class TableData extends Component{
  constructor(props){
    super(props);
    this.state = {list:[]}
    this.refresh();
  }

  refresh(){
    console.log('refresh')
    const array  = getData();
    console.log(array[0]);
    //
  }

  render(){
    return(
      <div>
      <div className="TableData text-font-medium center-text">
        <div className="TableData__head--data ">Data</div>
        <div className="TableData__head--produto">Produto</div>
        <div className="TableData__head">Un.</div>
        <div className="TableData__head">Qtd.</div>
        <div className="TableData__head">Qtd Prod.</div>
        <div className="TableData__head">Temp. Previsto</div>
        <div className="TableData__head">Saldo</div>
      </div>
      <hr className="horizontalRule" />
      <div className="dataTable">
        <Register
          data="10/05/2021"
          produto="1234 Barbeador mega forte"
          unidade="Pc"
          quantidade="50"
          quantidadeProduto="100"
          saldo="R$100,00"
        />
        <Register
          data="10/05/2021"
          produto="1234 Barbeador mega forte loremmmmmmmmmmmm"
          unidade="Pc"
          quantidade="50"
          quantidadeProduto="100"
          saldo="R$100,00"
        />
         <Register
          data="10/05/2021"
          produto="1234 Barbeador mega forte loremmmmmmmmmmmm"
          unidade="Pc"
          quantidade="50"
          quantidadeProduto="100"
          saldo="R$100,00"
        />
        
      </div>
    </div>
    )
  }
}
