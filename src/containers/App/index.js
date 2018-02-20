import React, { Component } from "react";
import { connect } from 'react-redux';

const mapStateToProps = state => {}
const mapDispatchToProps = dispatch => {}


class App extends Component {
  render() {
    return (
      <div>React/Redux Boilerplate</div>
    )
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;