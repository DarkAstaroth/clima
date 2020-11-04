import React, { Component , Fragment } from 'react';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
     <Fragment>
       <Header
          titulo="Clima React App"
       />
     </Fragment>
    );
  }
}

export default App;
