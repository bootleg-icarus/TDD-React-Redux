import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAttr } from "../../../utils/index";

const setUp = (props = {}) => {
  return shallow(<Header {...props} />);
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("should render Header component", () => {
    const wrapper = findByTestAttr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });
  it("should render logo comp", () => {
    const wrapper = findByTestAttr(component, "logo");
    expect(wrapper.length).toBe(1);
  });
});
