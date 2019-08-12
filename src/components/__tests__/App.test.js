import React from "react";
import { mount } from "enzyme";

import App from "../../App";
import Root from "../../Root";
import Header from "../Header/Header";
import Quote from "../Quote/Quote";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
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

it("shows a quote", () => {
  expect(wrapped.find(Quote).length).toEqual(1);
});
