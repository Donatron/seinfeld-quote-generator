import { fetchQuotes } from "../";
import {
  FETCH_QUOTES,
  SELECT_CHARACTER,
  GET_RANDOM_QUOTE,
  FETCH_EPISODE,
  SELECT_EPISODE
} from "../";
import moxios from "moxios";

describe("fetch quotes", () => {
  it("has the correct action type", () => {
    const action = fetchQuotes();
    expect(action.type).toEqual(FETCH_QUOTES);
  });

  it("has the correct payload", () => {
    const action = fetchQuotes();
    moxios.install();
    moxios.stubRequest("https://seinfeld-quotes.herokuapp.com/quotes", {
      status: 200,
      response: {
        data: {
          quotes: [
            { quote: "Quote 1" },
            { quote: "Quote 2" },
            { quote: "Quote 3" },
            { quote: "Quote 4" },
            { quote: "Quote 5" }
          ]
        }
      }
    });

    console.log(action.payload);

    // expect(action.payload).toEqual([
    //   { quote: "Quote 1" },
    //   { quote: "Quote 2" },
    //   { quote: "Quote 3" },
    //   { quote: "Quote 4" },
    //   { quote: "Quote 5" }
    // ]);
  });
});
