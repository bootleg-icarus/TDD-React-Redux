import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../utils/index";
import ListItem from "./index";

describe("List Item Component", () => {
  describe("checking proptypes", () => {
    it("shold not throw a warning", () => {
      const expectedProps = {
        title: "Example title",
        desc: "Some desc text"
      };
      const PropError = checkProps(ListItem, expectedProps);
      expect(PropError).toBeUndefined();
    });
  });
  describe("component renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Example title",
        desc: "Some desc text"
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it("shoudl render props correctly", () => {
      const component = findByTestAttr(wrapper, "ListitemComponent");
      expect(component.length).toBe(1);
    });
    it("should render a title", () => {
      const title = findByTestAttr(wrapper, "componentTitle");
      expect(title.length).toBe(1);
    });
    it("should render a description", () => {
      const desc = findByTestAttr(wrapper, "componentDesc");
      expect(desc.length).toBe(1);
    });
  });
  describe("without title attr", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "Some desc text"
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it("should not render", () => {
      const component = findByTestAttr(wrapper, "ListitemComponent");
      expect(component.length).toBe(0);
    });
  });
});
