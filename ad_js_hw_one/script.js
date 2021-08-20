"use stritc"
class  Employee  {
    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary; 
    }

    getName(){
        return name;
        
    }
    setName(name){
        this.name = name;
    }

    getAge(){
        return age;
    }
    setAge(age){
        this.age = age;
        
    }
    getSalary(){
        return salary;
        
    }
    getSalary(salary){
        this.salary = salary;
        
    }

    }
    class Programmer extends Employee{
        constructor(name,age,salary,lang){
            super(name,age,salary);
            this.lang = lang;
        }
        getProgrammerMonney(){
            return this.salary*3;
        }
    }
    
  
const Artem = new Employee ('Artem','32','20000');  
console.log(Artem);

let firstProgrammer = new Programmer('Vasya','32','20000','English');
console.log(firstProgrammer);
console.log("Money for Programer" + firstProgrammer.getProgrammerMonney());

let secondProgrammer = new Programmer('Petro','32','20000','English');
console.log(secondProgrammer);
console.log( "Money for Programer" + secondProgrammer.getProgrammerMonney());





