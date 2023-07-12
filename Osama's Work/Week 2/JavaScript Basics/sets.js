
// Sets In JavScript

console.log("Sets in Javascript\n")

// Creating a set
let mySet = new Set();
mySet.add("Osama")
mySet.add("Arain")
mySet.add("Osama")          // can not duplicate values in sets

console.log(mySet)

// Creating a set from an array
let myArray = [1, 11, 3, 30, 10, 6, 7, 8, 9]
let mySet2 = new Set(myArray)
console.log(mySet2)

// Creating a set from a string
let myString = "Osama Arain"
let mySet3 = new Set(myString)
console.log(mySet3)

// Creating a set from a map
let myMap = new Map()
myMap.set("Osama", 1)
myMap.set("Arain", 2)
let mySet4 = new Set(myMap)
console.log(mySet4)

// Creating a set from a set
let mySet5 = new Set(mySet)
console.log(mySet5)

// Getting the size of a set
console.log("The Size of mySet is : "+mySet.size)

// Checking if a value is in the set
console.log(mySet.has("Osama"))
// Removing elements from a set using delete method or remove function (returns true/false based on
// if the value was present in the set or not)
console.log(mySet.delete("Osama"))
console.log(mySet)

// Clearing a set
mySet.clear()
console.log(mySet)


// Common Functions on sets

// forEach
mySet2.forEach(function(value){
    console.log(value)
})

// keys
console.log(mySet2.keys())
// Values
console.log(mySet2.values())

// List all elements

console.log("\nPrinting Values")
for(const val of mySet2.values()){
    console.log(val)
}
