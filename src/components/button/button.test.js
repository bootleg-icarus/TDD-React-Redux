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
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: "Example Text",
        emitEvent: mockFunc
      };
      wrapper = shallow(<ShareButton {...props} />);
    });

    it("should render a button", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
    it("should emit callback on click event", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
