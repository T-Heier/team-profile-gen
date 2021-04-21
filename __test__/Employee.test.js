const { expect } = require("@jest/globals");
const Employee = require("../lib/Employees");

test.todo("Can instantiate Employee"), () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
}