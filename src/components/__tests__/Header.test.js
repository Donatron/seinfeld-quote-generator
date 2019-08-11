import React from "react";
import { mount } from "enzyme";

import Header from "../Header/Header";

let wrapped;

beforeEach(() => {
  wrapped = mount(<Header />);
});

afterEach(() => {
  wrapped.unmount();
});

it("displays an image", () => {
  expect(wrapped.find("img").length).toEqual(1);
});

it("shows an h1", () => {
  expect(wrapped.find("h1").length).toEqual(1);
});
