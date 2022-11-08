const employees = require("../lib/Employees");
const employee = employees.Employee


test('Based on the employee type selected, it prompts user for name', () => {
const testEmployeeName = new employee("noah", "01", "noahc@gmail.com")
expect(testEmployeeName.getName()).toEqual("noah")
})

test('Based on the employee type selected, it prompts user for ID', () => {
    const testEmployeeID = new employee("noah", "01", "noahc@gmail.com")
    expect(testEmployeeID.getID()).toEqual("01")
})

test('Based on the employee type selected, it prompts user for email', () => {
    const testEmployeeEmail = new employee("noah", "01", "noahc@gmail.com")
    expect(testEmployeeEmail.getEmail()).toEqual("noahc@gmail.com")
})