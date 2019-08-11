import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuotes } from "./actions";

import "./App.css";

import Header from "./components/Header/Header";
import Quote from "./components/Quote/Quote";

class App extends Component {
  componentDidMount() {
    this.props.fetchQuotes();
  }
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header />
          <Quote />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchQuotes }
)(App);
