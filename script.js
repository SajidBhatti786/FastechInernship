// Basics of JavaScript
console.log("Hello, world!");

// String Methods
const str = "Hello, world!";
console.log(str.length); // Length of the string
console.log(str.toUpperCase()); // Convert to uppercase
console.log(str.toLowerCase()); // Convert to lowercase
console.log(str.indexOf("world")); // Index of a substring
console.log(str.slice(7, 12)); // Extract a substring

// Update HTML content
document.getElementById("demo").innerHTML = `
  <h1>String Methods:</h1>
  <p>Length: ${str.length}</p>
  <p>Uppercase: ${str.toUpperCase()}</p>
  <p>Lowercase: ${str.toLowerCase()}</p>
  <p>Index of "world": ${str.indexOf("world")}</p>
  <p>Substring: ${str.slice(7, 12)}</p>
`;

// Number Methods
const num = 3.14159;
console.log(num.toFixed(2)); // Fixed decimal places
console.log(num.toString()); // Convert to string
console.log(parseInt("42")); // Parse as integer
console.log(parseFloat("3.14")); // Parse as float

// Update HTML content
document.getElementById("demo").innerHTML += `
  <h1>Number Methods:</h1>
  <p>Fixed decimal places: ${num.toFixed(2)}</p>
  <p>Converted to string: ${num.toString()}</p>
  <p>Parsed as integer: ${parseInt("42")}</p>
  <p>Parsed as float: ${parseFloat("3.14")}</p>
`;

// Date Methods
const date = new Date();
console.log(date.getFullYear()); // Current year
console.log(date.getMonth()); // Current month (0-11)
console.log(date.getDate()); // Current day of the month
console.log(date.getHours()); // Current hour
console.log(date.getMinutes()); // Current minute
console.log(date.getSeconds()); // Current second

// Update HTML content
document.getElementById("demo").innerHTML += `
  <h1>Date Methods:</h1>
  <p>Current year: ${date.getFullYear()}</p>
  <p>Current month (0-11): ${date.getMonth()}</p>
  <p>Current day of the month: ${date.getDate()}</p>
  <p>Current hour: ${date.getHours()}</p>
  <p>Current minute: ${date.getMinutes()}</p>
  <p>Current second: ${date.getSeconds()}</p>
`;

// Arrays & Objects
const fruits = ["apple", "banana", "orange"];
console.log(fruits.length); // Length of the array
console.log(fruits[1]); // Access an element by index
fruits.push("grape"); // Add an element to the end
console.log(fruits);

const person = { name: "John", age: 30, profession: "Developer" };
console.log(person.name); // Access a property
person.city = "New York"; // Add a property
console.log(person);

// Update HTML content
document.getElementById("demo").innerHTML += `
  <h1>Arrays & Objects:</h1>
  <p>Length of fruits array: ${fruits.length}</p>
  <p>Access element at index 1: ${fruits[1]}</p>
  <p>Updated fruits array: ${fruits}</p>
  <p>Person's name property: ${person.name}</p>
  <p>Added city property: ${person.city}</p>
`;

// Conditional Statements
const x = 10;
if (x > 5) {
  console.log("x is greater than 5");
 document.getElementById("demo").innerHTML += "<h1>Conditional Statements</h1>< p > x is greater than 5</ > ";
} else {
  console.log("x is less than or equal to 5");
  document.getElementById("demo").innerHTML += "<p>x is less than or equal to 5</p>";
}

// Loops
document.getElementById("demo").innerHTML += "<h1>Loops:</h1>";

for (let i = 1; i <= 5; i++) {
  console.log(i);
  document.getElementById("demo").innerHTML += `<p>For loop: ${i}</p>`;
}

let j = 0;
while (j < 5) {
  console.log(j);
  document.getElementById("demo").innerHTML += `<p>While loop: ${j}</p>`;
  j++;
}
// Function to change the text color
    function changeColor() {
      var message = document.getElementById('message');
      message.style.color = 'red';
    }
    
    // Event listener for button click
    var button = document.getElementById('btn');
    button.addEventListener('click', changeColor);
    
    // Function to highlight the paragraph
    function highlight() {
      var paragraph = document.getElementById('message');
      paragraph.classList.add('highlight');
    }
    
    // Event listener for mouseover event
    var paragraph = document.getElementById('message');
    paragraph.addEventListener('mouseover', highlight);
    
    // Function to remove the highlight
    function removeHighlight() {
      var paragraph = document.getElementById('message');
      paragraph.classList.remove('highlight');
    }
    
    // Event listener for mouseout event
paragraph.addEventListener('mouseout', removeHighlight);
    
// Function to show the welcome message
function showWelcomeMessage() {
  var nameInput = document.getElementById('name');
  var welcomeMsg = document.getElementById('welcomeMsg');
  
  // Get the value from the name input
  var name = nameInput.value;
  
  // Update the welcome message with the name
  welcomeMsg.textContent = 'Welcome, ' + name + '! to The FasTech Internship.';
}

// Event listener for button click
var button = document.querySelector('.welcome-message');
button.addEventListener('click', showWelcomeMessage);
// 1. Promises
// 2. Fetch
// 3. Async and await
// 4. Immutable array and objects
// 5. Destructing objects to assign value to variable
// 6. Higher order arrow functions
// 7. Rest operator with function parameters
// /******************************************************
// ************************** 1. Promises *******************
// ********************************************************/
const buyFlightTicket = () =>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const error = false;

            if(error){
                reject("Unsuccessful Operation!")
            }
            else{
                resolve("Successful Operation!!")
            }


        },3000)


    });


}

buyFlightTicket()
.then((success)=> console.log(success))
.catch((reject)=> console.log(reject));


/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 *
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

const userData = new Promise((resolve,reject) => {

    const error = true;
    if(error){
        reject("No data found!")
    }
    else{
        resolve({
            name: "Sajid",
            age: 22,
            email: "sbhattti1212@gmail.com"
        })
    }

});

userData
.then((success)=> console.log(success))
.catch((error)=> console.log(error))


/******************************************************
************************** 2. Fetch *******************
********************************************************/
//fetching data
fetch('https://jsonplaceholder.typicode.com/comments/1')
.then((response)=> response.json())
.then((data)=> console.log(data))
//posting data
fetch('https://jsonplaceholder.typicode.com/comments',{
    method: "POST",
    body: JSON.stringify({
        id: 1,
        name: "Sajid",
        email: "sbhatti1212@gmail.com",
        body: "This is awesome"
    }
    )
})
.then((response)=> response.json())
.then((data)=> console.log(data))

/******************************************************
************************** 3. Async and Await *******************
********************************************************/
//async only
let photos = [];

 async function photoUpload(){
    var uploadStatus =  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            photos.push("profile picture");
            resolve("photo uploaded")
        },3000)
    })

    let result = await uploadStatus;
    console.log(result);
    console.log(photos)

}

photoUpload();
//async await with fetch

apiUrl = "https://api.chucknorris.io/jokes/random"

async function getJoke(){
   const Response = await fetch('https://api.chucknorris.io/jokes/random');
   const data = await Response.json();
   console.log(data);

}
getJoke();

/******************************************************
************************** 4. Immutable array and objects *******************
********************************************************/

const arr = [1,2,3]
// arr = [4,2,5] we can change like this
arr[0]=4,arr[1]=2,arr[2]=5; //instead we can change like this

//sets
mySet = new Set([1,3,4])
console.log(mySet);
// prevent object mutation
function myObject(){
    "use strict";  // use strict mode to prevent mutation
    const Math_constants = {
        PI: 3.14
    };

    Object.freeze(Math_constants); // this is used to prevent mutation
    try{
        Math_constants.PI = 99;
    }
    catch(ex)
    {
        console.log(ex)
    }
    return Math_constants.PI;
}

const PI = myObject();
console.log(PI)

/******************************************************
************************** 5. Destructing objects to assgin value to variable *******************
********************************************************/
const person = {
    name: "sajid",
    email: "sbhattti1212@gmail.com"
}
//nested
const personal = {
    name : { official: "sajid",nickName: "sajoo"},
    email: "sbhatti1212@gmail.com"
}

const {name: myName} = person;
const {name: {nickName: myNickName} } = personal;
console.log(myName);
console.log(myNickName);

/******************************************************
************************** 6. Higher Order Arrow functions *******************
********************************************************/
/* 1. filter
   2. reduce
   3. map
   4. find
   5. forEach */


const array = [1,-23,89,3.4,11];

const squareList = (arr = [1,3,4])=>{  // we can also define default value like this
    const squaredIntegers = arr.filter(num=> Number.isInteger(num) && num >0).map(x=> x*x);
    return squaredIntegers;
}

const sqlist = squareList(array);
console.log(sqlist);

/******************************************************
************************** 7. Rest Operator for function parameter *******************
********************************************************/

function myFunction(...arg){

    return arg.reduce((a,b)=> a+b,0);
}
console.log(myFunction(1,3,4));