import React from "react";
import { shallow } from "enzyme";

import Synopsis from "../Quote/Synopsis";

const episode = {
  summary: "Episode summary"
};

const wrapped = shallow(<Synopsis episode={episode} />);

it("shows an h3", () => {
  expect(wrapped.find("h3").length).toEqual(1);
});

describe("episode synopsis", () => {
  it("shows a p tag", () => {
    expect(wrapped.find("h3").length).toEqual(1);
  });

  it("renders the correct episode synopsis", () => {
    expect(wrapped.find("p").text()).toContain("Episode summary");
  });
});
