import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
render() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <h2>LAST BENCHERS</h2>
        </div>
          <Body />
        </div>
    );
  }
}

class Body extends Component {
  constructor(props) {
    super(props);

    this.state ={
      r: 0
    };
    this.getBM =this.getBM.bind(this);
  }

  getBM(){
  //  console.log("BM called");
  this.setState({r:Math.floor( Math.random()*10 ) })
  }

  render() {
    return(
      <div>
      <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <button onClick={this.getBM}> BM </button>
      < Numbers myNumber={this.state.r}/>

      </div>
    )
  }
}


class Numbers extends Component {

  componentWillMount() {
    console.log("componentWillMount called here");
  }

  componentDidMount() {
    console.log("componentDidMount called here");
  }

  compoenetWillReciveProps(newProps){
    console.log("componentWillReciveProps called")
  }


  render() {
    return(
      <div>
      <br />
      {this.props.myNumber}
      </div>
    );
  }
}

export default App;
