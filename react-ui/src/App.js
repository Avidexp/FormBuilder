import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Form from "react-jsonschema-form";

class App extends Component {
constructor(props){
  super(props);
  this.state={
    showForm: false,
    scema: null
  }
}
  sendToESB(){
    
    var xmldata = this.refs.xmldata.value;
   var request = xmldata;
   axios.post('/api/v1/sendToESB', request)
   .then((response) => {
     console.log(response.data.body);
    console.log("===========================");
    this.setState({showForm: true, schema: JSON.parse(response.data.body)})
        console.log(JSON.parse(response.data.body));
        console.log("===========================");
        console.log(this.state);
        })
      .catch(Error => console.log(Error))

    console.log("BUTTON CLICKED");
    }
    log = (type) => console.log.bind(console, type);
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Form Generator</h1>
        </header>
<br/>
<br/>
<form>
        <div className="container">
    
        <h2>XML Data</h2>
      
    <textArea type="textArea" className="form-control" id="xmldata" ref="xmldata"></textArea>    <br/>
    <br/>
    <button type="button" className="btn btn-primary" onClick={() => this.sendToESB()}>Submit</button>

</div>
    </form>
    <br/>
    <br/>
    {this.state.showForm == true ? <Form schema={this.state.schema}
        onChange={this.log("changed")}
        onSubmit={this.log("submitted")}
        onError={this.log("errors")} /> : <div></div>}
      </div>
    );
  }
}

export default App;








  //  fetch('https://mywebsite.com/endpoint/', {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     firstParam: 'yourValue',
  //     secondParam: 'yourOtherValue',
  //   }),
  // });
   //axios.post(`https://api.globaltranz.com/AirFreightUIService/1.0?apiKey=UYeObmoEKxE-bthnLBEZEhja`, request)