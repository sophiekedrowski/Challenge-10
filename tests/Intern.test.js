const employees = require("../lib/Employees");
const intern = employees.Intern

test('User is prompted for school', () => {
const testIntern = new intern("noah", "01", "noahc@gmail.com", "UofM")
expect(testIntern.getSchool()).toEqual("UofM")
})