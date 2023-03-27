'use strict';

const allEmployees = [];
let form = document.getElementById('form');
let container = document.getElementById('cardContainer');


function Employee(EmployeeID, FullName, Department, level, imageURL) {
    this.Employee_ID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = 0
    allEmployees.push(this)
}

Employee.prototype.salaryCalc = function () {
    if (this.level == "Senior") {
        this.salary = randomNumber(1500, 2000);

    } else if (this.level == "Mid-Senior") {
        this.salary = randomNumber(1000, 1500);

    } else {
        this.salary = randomNumber(500, 1000);

    }
    this.salary = netsalay(this.salary)

}

Employee.prototype.render = function () {
    // document.write(`<h3>Employee Name = ${this.FullName} & Salary : ${this.salary}</h3>`)
    // };


    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card">
    <img src="${this.imageURL}" alt="img">
    <p>NAME: ${this.FullName} - ID: ${this.EmployeeID} Department: ${this.Department} - level: ${this.level} - ${this.salary}</p>
    </div>`;

    container.appendChild(div);

};

let ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "./assets/Ghazi.jpg");
let lana = new Employee(1001, "Lana Ali", "Finance", "Senior", "./assets/Lana.jpg");
let tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "./assets/Tamara.jpg");
let safi = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "./assets/Safi.jpg");
let omar = new Employee(1004, "Omar Zaid", "Development", "Senior", "./assets/Omar.jpg");
let rana = new Employee(1005, "Rana Saleh", "Development", "Junior", "./assets/Rana.jpg");
let hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "./assets/Hadi.jpg");

methodsCaller(allEmployees);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

function netsalay(salary) {
    return salary - (salary * 0.075)
}

function methodsCaller(allEmployees) {
    for (let i = 0; i < allEmployees.length; i++) {
        allEmployees[i].salaryCalc();
        allEmployees[i].render();
    }
}

form.addEventListener("submit", submitHandler);
window.addEventListener("load", getData);

function uniqueID() {
    return (Math.floor(Math.random() * 1000))
}



function submitHandler(event) {
    event.preventDefault();
    let FullName = event.target.fullname.value;
    let Department = event.target.department.value;
    let level = event.target.level.value;
    let imageURL = event.target.img.value;
    let newEmployee = new Employee(uniqueID(), FullName, Department, level, imageURL);
    newEmployee.salaryCalc(); // Call salaryCalc method to calculate salary
  
    allEmployees.push(newEmployee); // Add the new employee to the allEmployees array
    saveData(allEmployees); // Save the updated allEmployees array to local storage
  
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card">
        <img src="${imageURL}" alt="img">
        <p>NAME: ${FullName} - Id: ${newEmployee.Employee_ID} - Department: ${Department} - level: ${level} - ${newEmployee.salary}</p>
      </div>
    `;
    container.appendChild(div);
  }
  

function saveData(data) {
    let stringArr = JSON.stringify(data);
    localStorage.setItem('Employee', stringArr);
}

function getData() {
    let retrievedArr = localStorage.getItem('Employee');
    let objArray = JSON.parse(retrievedArr);
    for (let i = 0; i < objArray.length; i++) {
      let existingEmployee = allEmployees.find(emp => emp.Employee_ID === objArray[i].Employee_ID);
      if (!existingEmployee) {
        let newEmployee = new Employee(objArray[i].Employee_ID, objArray[i].FullName, objArray[i].Department, objArray[i].level, objArray[i].imageURL, objArray[i].netsalay);
        newEmployee.salaryCalc();
      }
    }
    renderAll();
  }

  function renderAll() {
    container.innerHTML = ""; 
    for (let i = 0; i < allEmployees.length; i++) {
        allEmployees[i].render();
    }
}



