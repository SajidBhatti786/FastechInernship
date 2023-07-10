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
