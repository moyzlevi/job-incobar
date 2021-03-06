import React, { Component } from "react";
import "./TableData.css";
import "bootstrap/dist/css/bootstrap.css";

import { Spinner } from "react-bootstrap";
import Register from "../Register/Register";

const axios = require("axios");
const URL = "https://60baa10d42e1d0001761fe52.mockapi.io/api/v1/operations"

export default class TableData extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = { list: [], isFetching: false};
    // this.refresh.bind = this.refresh.bind(this);
  }

   componentDidMount() {
    this._isMounted = true;
    this.fetchUsers();
    this.timer = setInterval(() => this.fetchUsers(), 60000);
  }

  fetchUsers() {
    this.setState({ ...this.state, isFetching: true });
    axios
      .get(URL)
      .then((response) => {
        this.setState({ list: response.data[0].operations, isFetching: false });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false });
      });
      console.log("LIST",this.state.list)
  }

  componentWillUnmount() {
    this._isMounted = false;
    clearInterval(this.timer);
    this.timer = null;

    //warning fix
    this.setState = (state,callback)=>{
      return;
  };

  }

  printState() {
    let myState = this.state.list;
    console.log(myState);
  }

  render() {
    return (
      <div>
        <div className="TableData text-font-medium center-text">
          <div className="TableData__head--data ">Data {this.state.isFetching ?<Spinner className="spin" animation="border" />:""}</div>
          <div className="TableData__head--produto">Produto</div>
          <div className="TableData__head">Qtd.</div>
          <div className="TableData__head">Temp. Prev.</div>
          <div className="TableData__head">Qtd Prod.</div>
          <div className="TableData__head tempo">Temp. Prod.</div>
          <div className="TableData__head">Saldo</div>
        </div>

        <div className="dataTable">
          {  this.state.list
              .sort(function (a, b) {
                return (
                  (a.priority - b.priority) * -1 || a.sequencia - b.sequencia
                );
              })
              .map((op,i) => {
                return (
                  <Register
                  key={i}
                    data={op.data}
                    produto={op.productId + " " + op.name}
                    qtd={op.quantity}
                    tempPrev={op.tmpPrev}
                    productQuantity={op.productQuantity}
                    tempo={op.tempo}
                    saldo={op.balance}
                    prioridade={op.priority}
                  />
                );
              })
          }
        </div>
      </div>
    );
  }
}
