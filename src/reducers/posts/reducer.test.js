import { types } from "../../actions/types";
import postReducer from "./reducer";
import expectExport from "expect";

describe("posts reducer", () => {
  it("should return default state", () => {
    const newState = postReducer(undefined, {});
    expectExport(newState).toEqual([]);
  });

  it("should return new state if receiving type", () => {
    const posts = [
      { title: "Test 1" },
      { title: "Test 2" },
      { title: "Test 3" }
    ];
    const newState = postReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts
    });
    expect(newState).toEqual(posts);
  });
});
