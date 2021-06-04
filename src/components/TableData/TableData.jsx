import React, { Component } from "react";
import "./TableData.css";
import "bootstrap/dist/css/bootstrap.css";
import Register from "../Register/Register";

import getData from "./service.js";

export default class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
    // this.refresh.bind = this.refresh.bind(this);
  }

  async componentDidMount() {
    this.interval = setInterval(() => this.refresh(), 60000);
    this.refresh();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  

  printState() {
    let myState = this.state.list;
    console.log(myState);
  }

  refresh() {
    let data = getData().operations;
    this.setState({
      list: data,
    });
  }

  render() {
    return (
      <div>
        <div className="TableData text-font-medium center-text">
          <div className="TableData__head--data ">Data</div>
          <div className="TableData__head--produto">Produto</div>
          <div className="TableData__head">Un.</div>
          <div className="TableData__head">Qtd.</div>
          <div className="TableData__head">Qtd Prod.</div>
          <div className="TableData__head tempo">Temp. Previsto</div>
          <div className="TableData__head">Saldo</div>
        </div>

        <div className="dataTable">
          {this.state.list
            .sort(function (a, b) {
            
              return (a.priority - b.priority) * -1 ||(a.sequencia - b.sequencia);
            })
            .map((op) => {
              return (
                <Register
                  data={op.data}
                  produto={op.productId + " " + op.name}
                  unidade={op.unit}
                  quantidade={op.quantity}
                  quantidadeProduto={op.productQuantity}
                  tempo={op.tempo}
                  saldo={op.balance}
                  prioridade={op.priority}
                />
              );
            })}
        </div>
      </div>
    );
  }
}
