const employees = require("../lib/Employees");
const engineer = employees.Engineer

test('User is prompted for github', () => {
    const testEngineer = new engineer("noah", "01", "noahc@gmail.com", "noahcgithub")
    expect(testEngineer.getGithub()).toEqual("noahcgithub")
})

