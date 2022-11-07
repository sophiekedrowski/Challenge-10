const employees = require("../lib/Employees");
const manager = employees.Manager


test('User is prompted for office number', () => {
const testManager = new manager("noah", "01", "noahc@gmail.com", "352")
// const officeNumber = "352"
expect(testManager.getofficeNumber()).toEqual("352")
})