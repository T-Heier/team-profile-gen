const { expect } = require("@jest/globals");
const Employee = require("../lib/Employees");

test.todo("Can instantiate intern"), () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
}