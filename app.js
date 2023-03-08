'use strict';

const allEmployees=[];
function Employee(EmployeeID,FullName,Department,level,imageURL){
    this.Employee_ID =EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary =0
    allEmployees.push(this)
}

Employee.prototype.salaryCalc = function(){
if(this.level == "senior"){
    this.salary=randomNumber(1500, 2000);

}else if(this.level == "Mid-Senior"){
    this.salary= randomNumber(1000, 1500);

}else {
    this.salary= randomNumber(500, 1000);

    }
    this.salary = netsalay (this.salary)

}

Employee.prototype.render = function(){
document.write(`<h3>Employee Name = ${this.FullName} & Salary : ${this.salary}</h3>`)
};

let ghazi = new Employee(1000,"Ghazi Samer","Administration","Senior");
let lana = new Employee(1001,"Lana Ali","Finance","Senior");
let tamara = new Employee(1002,"Tamara Ayoub","Marketing","Senior");
let safi = new  Employee(1003,"Safi Walid","Administration","Mid-Senior");
let omar = new Employee(1004,"Omar Zaid","Development","Senior");
let rana = new Employee(1005,"Rana Saleh","Development","Junior");
let hadi = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");

methodsCaller (allEmployees);

function randomNumber(min, max){
    return Math.floor(Math.random()* (max - min)) + min
}
function netsalay (salary){
    return salary - (salary * 0.075)
}
function methodsCaller (allEmployees){
    for(let i=0; i<allEmployees.length;i++){
        allEmployees[i].salaryCalc();
        allEmployees[i].render();
    }

}