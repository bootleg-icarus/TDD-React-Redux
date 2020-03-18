import React from "react";
import { shallow } from "enzyme";

import Headline from "./index";
import { findByTestAttr } from "../../../utils/index";

const setUp = props => {
  return shallow(<Headline {...props} />);
};
describe("Headline Component", () => {
  describe("have props", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "test description"
      };
      wrapper = setUp(props);
    });

    it("should render with props", () => {
      const component = findByTestAttr(wrapper, "headlineComponent");
      expect(component.length).toBe(1);
    });

    it("should render a h1", () => {
      const h1 = findByTestAttr(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("should render a p", () => {
      const p = findByTestAttr(wrapper, "desc");
      expect(p.length).toBe(1);
    });
  });

  describe("has no props", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setUp();
    });

    it("should render without errors", () => {
      const component = findByTestAttr(wrapper, "headlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
