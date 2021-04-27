const { expect } = require("@jest/globals");
const Employee = require("../lib/Employees");

test.todo("Can instantiate engineer"), () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object");
}