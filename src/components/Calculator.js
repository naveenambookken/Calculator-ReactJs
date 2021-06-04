import React, { Component } from "react";
import "./Calculator.css";

class Calculator extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:''
    }
  }
  calculate = ()=>{
    try{
      const result = eval(this.state.data)
      this.setState({data:result})
    }
    catch(e){
      this.setState({data:'error'})

    }
  }


  handleClick= e=>{
    const value=e.target.value;
    switch(value){
      case 'all-clear':
        this.setState({data:''})
        break;
      case '=':
        this.calculate();
        break;
      default:
        this.setState({data:this.state.data + value})
    }
  }  

  render() {
    return (
      <div className="container-fluid">
        <div class="calculator card col-xs-12 col-sm-6 col-md-8">
          <input
            type="text"
            class="calculator-screen z-depth-1"
            value={this.state.data}
            disabled
          />

          <div class="calculator-keys ">
            <button onClick={this.handleClick} type="button" class="operator btn btn-info" value="+">
              +
            </button>
            <button onClick={this.handleClick} type="button" class="operator btn btn-info" value="-">
              -
            </button>
            <button onClick={this.handleClick} type="button" class="operator btn btn-info" value="*">
              &times;
            </button>
            <button onClick={this.handleClick} type="button" class="operator btn btn-info" value="/">
              &divide;
            </button>

            <button onClick={this.handleClick} type="button" value="7" class="btn btn-outline-dark waves-effect">
              7
            </button>
            <button onClick={this.handleClick} type="button" value="8" class="btn btn-outline-dark waves-effect">
              8
            </button>
            <button onClick={this.handleClick} type="button" value="9" class="btn btn-outline-dark waves-effect">
              9
            </button>

            <button onClick={this.handleClick} type="button" value="4" class="btn btn-outline-dark waves-effect">
              4
            </button>
            <button onClick={this.handleClick} type="button" value="5" class="btn btn-outline-dark waves-effect">
              5
            </button>
            <button onClick={this.handleClick} type="button" value="6" class="btn btn-outline-dark waves-effect">
              6
            </button>

            <button onClick={this.handleClick} type="button" value="1" class="btn btn-outline-dark waves-effect">
              1
            </button>
            <button onClick={this.handleClick} type="button" value="2" class="btn btn-outline-dark waves-effect">
              2
            </button>
            <button onClick={this.handleClick} type="button" value="3" class="btn btn-outline-dark waves-effect">
              3
            </button>

            <button onClick={this.handleClick} type="button" value="0" class="btn btn-outline-dark waves-effect">
              0
            </button>
            <button onClick={this.handleClick}
              type="button"
              class="decimal function btn btn-secondary"
              value="."
            >
              .
            </button>
            <button onClick={this.handleClick}
              type="button"
              class="all-clear function btn btn-danger btn-sm"
              value="all-clear"
            >
              AC
            </button>

            <button onClick={this.handleClick}
              type="button"
              class="equal-sign operator btn btn-success"
              value="="
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
