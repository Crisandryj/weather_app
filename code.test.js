const { upCase, sum } = require("./code-test");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("capitalize letters", () => {
  expect(upCase("hello")).toBe("Hello");
});