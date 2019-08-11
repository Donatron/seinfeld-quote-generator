import React from "react";
import { shallow } from "enzyme";

import App from "../../App";
import Header from "../Header/Header";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a header", () => {
  console.log(wrapped);
});
