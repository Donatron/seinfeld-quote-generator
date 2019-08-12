import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuotes } from "./actions";

import "./App.css";
import Header from "./components/Header/Header";
import Quote from "./components/Quote/Quote";
import Spinner from "./components/Spinner/Spinner";
import Footer from "./components/Footer/Footer";

class App extends Component {
  componentDidMount() {
    this.props.fetchQuotes();
  }
  render() {
    const { quotes } = this.props;

    return (
      <div className="App">
        <div className="wrapper">
          <Header />

          {quotes.length ? <Quote /> : <Spinner />}
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes.quotes
  };
};

export default connect(
  mapStateToProps,
  { fetchQuotes }
)(App);
