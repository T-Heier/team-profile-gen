const { expect } = require("@jest/globals");
const Employee = require("../lib/Employees");

test.todo("Can instantiate Manager"), () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
}