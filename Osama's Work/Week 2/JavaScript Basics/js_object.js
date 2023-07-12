// Objects in JavaScript
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person)


// Creating an empty Object then assigning value to it
let cars = {}
cars.name = "Nissan GTR"
cars.model = "R-35"
cars.engine_no = "V8"
cars.release_year = 2017
console.log("\n")
console.log(cars)

// WE can not copy object to another object by simple assignment statement like this
// let cars_copy = cars
// It both variable cars and cars_copy reference to same object in the memeory

// Iterating through Object
let txt = ''
for (let x in person) {
    txt += person[x];
}
console.log(txt)


// adding property to existing object

person.nationality = "Pakistan"
console.log("\n")
console.log(person)


// Deleting a particular field from object
delete cars.engine_no
console.log("\n")
console.log(cars)


// Nested objects

const person1 = {
    firstName:"John", lastName:"Doe", age:50, eyeColor:"blue",
    cars: [
        {
            name:"Nissan GTR",
            model:"R-35",
            engine:"V8",
        },
        {
            name:"Mustang GT",
            model:"GT",
            engine:"V12",
        }
    ]
}

console.log("\n")
console.log(person1)


// Method of the Object

const person3 = {
    firstName:"John", lastName:"Doe", age:50, eyeColor:"blue",

    fullname: function(){
        return this.firstName + " "+ this.lastName; 
    },
    // Getter and Settier
    get  age(){
        return this.age
    },

    set age(age){
        this.age=age
    },

}
console.log("\n")
console.log(person3.fullname())


 // constructor
 function Person(firstname, lastname, age, eyeColor){
    this.firstName=firstname;
    this.lastName=lastname;
    this.age=age;
    this.eyeColor=eyeColor;
}
const person7 = new Person("Osama","Arain", 22, "Brown");
console.log("\n")
console.log(person7)

// Standard Prototype Can not be changed
// Adding New Property to Constuctor usnig prototype
Person.prototype.nationality ="English"
// Adding New Function to Constructor using prototype
Person.prototype.name = function name() {
        return this.firstName + this.lastName;
}

console.log("\n")
console.log(person7)


