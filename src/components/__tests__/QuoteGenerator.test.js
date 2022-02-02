import React from "react";
import { mount } from "enzyme";

import Root from "../../Root";
import QuoteGenerator from "../Quote/QuoteGenerator";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <QuoteGenerator />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("displays an option group and a button", () => {
  expect(wrapped.find("select").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});
