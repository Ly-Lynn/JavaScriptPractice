const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      //... More employee records can be added here
    ];
function displayEmployees () {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}:${employee.name}:${employee.name}-${employee.department}-$${employee.salary}</p>`).join('')
    document.getElementById('employeesDetails').innerHTML = totalEmployees
}

function displayCertainEmployee (arr) {
    arr = arr[0]
    document.getElementById ('employeesDetails').innerHTML = `<p>${arr.id}: ${arr.name}: ${arr.name} - ${arr.department} - $${arr.salary}</p>`;
}

function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0)
    alert(`Total salaries: $${totalSalaries}`)
}

function displayHREmployees () {
    const hrEmployees = employees.filter(employee => employee.department==='HR')
    console.log(hrEmployees)
    displayCertainEmployee(hrEmployees)
}

function findEmployeeById (idx) {
    const foundEmployee = employees.find(employee => employee.id === idx)
    if (foundEmployee)
        displayCertainEmployee([foundEmployee])
    else
        document.getElementById('employeesDetails').innerHTML = 'no employee with this ID'
}