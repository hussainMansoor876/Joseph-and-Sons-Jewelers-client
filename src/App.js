import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Config/routes'
import 'antd/dist/antd.css';



class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Routes />
      </div>
    )
  }
}

export default App;
