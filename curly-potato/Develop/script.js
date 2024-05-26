// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let employee;
  let addNewEmployee = true;
  let employeeArray = [];
  while (addNewEmployee == true) {
    employee = new Object();
    employee.firstName = prompt("Entry first name: ");
    employee.lastName = prompt("Entry last name: ");
    salary = prompt("Entry salary: ");
    // Check if salary is a valid number
    if (isNaN(salary)){
      salary = 0;
    }
    // Cast salary to integer 
    employee.salary = parseInt(salary);
    addNewEmployee = confirm("Add new employee?");
    employeeArray.push(employee);
  }
  return employeeArray;
  }

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  const numberOfEmployees = employeesArray.length;

  let totalSalary = 0;
  
  for(let i = 0; i < numberOfEmployees; i++){
    totalSalary = totalSalary + employeesArray[i].salary;
  }
 
  const avgSalary = totalSalary / numberOfEmployees;

  console.log(`The average employee salary between our ${numberOfEmployees} employee(s) is $${avgSalary}.00`)
 
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // Random integer is selected as an index for the array to reference
  const randomNumber = getRandomInt(employeesArray.length - 1);
  console.log(`Congrats to ${employeesArray[randomNumber].firstName} our random lottery winner!`)

}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  //console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
