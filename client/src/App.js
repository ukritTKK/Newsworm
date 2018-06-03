import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    response : ''
  }

  componentDidMount() {
    console.log('DID')
    this.callAPI()
      .then(res => {
        this.setState({ response : res.text })
        console.log('then')
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  callAPI = async () => {
    console.log('CALL')
    const response = await fetch('/news/5b13badb348de40e3c77b9ff')
    console.log('response')
    const body = await response.json()
    console.log('body')

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return body
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default App;
