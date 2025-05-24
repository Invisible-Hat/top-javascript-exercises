const addNumbers = require("./addNumbers");

describe("addNumbers", function hello() {
  test("adds the numbers together", () => {
    expect(addNumbers()).toEqual(2);
  });
});
