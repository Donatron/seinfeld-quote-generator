import React from "react";
import { mount } from "enzyme";
import QuoteGenerator from "../Quote/QuoteGenerator";

let wrapped;

beforeEach(() => {
  wrapped = mount(<QuoteGenerator />);
});

afterEach(() => {
  wrapped.unmount();
});

it("displays an option group and a button", () => {
  expect(wrapped.find("select").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});
