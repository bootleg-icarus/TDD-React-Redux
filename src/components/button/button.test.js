import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../utils/index";
import ShareButton from "./index";

describe("Shared button Component", () => {
  describe("Checking propTypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        buttonText: "Example Text",
        emitEvent: () => {}
      };
      const propsError = checkProps(ShareButton, expectedProps);
      expect(propsError).toEqual(undefined);
    });
  });
  describe("renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: "Example Text",
        emitEvent: () => {}
      };
      wrapper = shallow(<ShareButton {...props} />);
    });

    it("should render a button", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
