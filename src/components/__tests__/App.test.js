import React from "react";
import { mount } from "enzyme";

import App from "../../App";
import Root from "../../Root";
import Header from "../Header/Header";
import Quote from "../Quote/Quote";
import Spinner from "../Spinner/Spinner";
import Footer from "../Footer/Footer";

let wrapped;

const initialState = {
  quotes: {
    quotes: [],
    character: "",
    randomQuote: ""
  },
  episodes: {
    episodes: [],
    selectedEpisode: {}
  }
};

beforeEach(() => {
  wrapped = mount(
    <Root initialState={initialState}>
      <App />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("shows a header", () => {
  expect(wrapped.find(Header).length).toEqual(1);
});

it("shows a spinner when initialState is {}", () => {
  expect(wrapped.find(Spinner).length).toEqual(1);
});

// it("shows a quote after state has loaded", () => {
//   initialState.quotes.quotes = [
//     {
//       quote: "Quote 1",
//       author: "Some dude",
//       season: 1,
//       episode: 1
//     },
//     {
//       quote: "Quote 2",
//       author: "Some other dude",
//       season: 2,
//       episode: 2
//     },
//     {
//       quote: "Quote 3",
//       author: "Some dude",
//       season: 3,
//       episode: 3
//     }
//   ];

//   wrapped.update();

//   expect(wrapped.find(Quote).length).toEqual(1);
// });

it("shows a footer", () => {
  expect(wrapped.find(Footer).length).toEqual(1);
});
