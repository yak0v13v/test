import { moveZeros } from "./move-zeros";

describe("Move Zeroes", () => {
  test("Base case", () => {
    const array = moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
    expect(array).toEqual([false, 1, 1, 2, 1, 3, "a", 0, 0]);
  });

  test("Corner case", () => {
    const array = moveZeros([0, 0, 0, 1, 2, 0, 1, 3, "a"]);
    expect(array).toEqual([1, 2, 1, 3, "a", 0, 0, 0, 0]);
  });

  test("Function has no effect on the current array", () => {
    const array = [1, 0, 1, 0, 1, 0];
    const nums = moveZeros(array);

    expect(array).not.toEqual(nums);
  });
});
