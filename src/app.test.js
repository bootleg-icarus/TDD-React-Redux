import App from "./App";
import { shallow } from "enzyme";
import { findByTestAttr, testStore } from "../utils";
import React from "react";
import expectExport from "expect";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("App component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      Posts: [
        {
          title: "Example title",
          desc: "some text"
        },
        {
          title: "Example title",
          desc: "some text"
        },
        {
          title: "Example title",
          desc: "some text"
        }
      ]
    };
    wrapper = setUp(initialState);
  });
  it("should render without errors", () => {
    const component = findByTestAttr(wrapper, "appComponent");
    expectExport(component.length).toBe(1);
  });
});
