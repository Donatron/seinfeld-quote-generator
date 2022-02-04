import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { selectCharacter, getRandomQuote } from "../../actions";

class QuoteGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCharacter: "",
      isDropdownOpen: false
    };
  }
  handleChange = e => {
    this.props.selectCharacter(e.target.value);
    this.setState({
      selectedCharacter: e.target.value
    });
  };

  handleClick = e => {
    const { quotes, character } = this.props;

    let quote;

    if (character === "" || character === "all") {
      const index = Math.floor(Math.random() * quotes.length);
      quote = quotes[index];
    } else {
      const filteredQuotes = quotes.filter(quote => {
        return quote.author.toLowerCase() === character;
      });
      const index = Math.floor(Math.random() * filteredQuotes.length);
      quote = filteredQuotes[index];
    }

    this.props.getRandomQuote(quote);
  };

  render() {
    const { isDropdownOpen } = this.state;
    return (
      <div className="Quote-Generator">
        <Dropdown
          isOpen={isDropdownOpen}
          toggle={() => this.setState({ ...this.state, isDropdownOpen: !isDropdownOpen })}
        >
          <DropdownToggle caret>
            Get Quotes By Character
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>
              Character
            </DropdownItem>
            <DropdownItem
              onClick={this.handleChange}
              value="all"
            >
              Anyone
            </DropdownItem>
            <DropdownItem
              onClick={this.handleChange}
              value="jerry"
            >
              Jerry
            </DropdownItem>
            <DropdownItem
              onClick={this.handleChange}
              value="george"
            >
              George
            </DropdownItem>
            <DropdownItem
              onClick={this.handleChange}
              value="elaine"
            >
              Elaine
            </DropdownItem>
            <DropdownItem
              onClick={this.handleChange}
              value="kramer"
            >
              Kramer
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button
          color="success"
          size="lg"
          onClick={this.handleClick}
        >
          Giddyup
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes.quotes,
    character: state.quotes.character,
    episodes: state.episodes.episodes
  };
};

export default connect(
  mapStateToProps,
  { selectCharacter, getRandomQuote }
)(QuoteGenerator);
