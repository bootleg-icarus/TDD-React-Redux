import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import { findByTestAttr, checkProps } from "../../../utils/index";

const setUp = props => {
  return shallow(<Headline {...props} />);
};
describe("Headline Component", () => {
  describe("checking PropTypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "test desc",
        tempArr: [
          {
            fName: "test_fName",
            lName: "test_lName",
            email: "test@email.com",
            age: 23,
            onlineStatus: false
          }
        ]
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBe(undefined);
    });
  });

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
