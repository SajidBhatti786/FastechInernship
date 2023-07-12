// Map in Javascript

console.log("\nMaps in Javascript")

// Create empty Map
const  myMap = new Map()
myMap.set( 1,"Nissan GTR")
myMap.set(2, "Lamborghini Aventador")
myMap.set(3, "Mustang GT")

console.log(myMap)

// Getting a value from Map
value = myMap.get(1)
console.log(value)

// Removing an element from map
myMap.delete(2)
console.log(myMap)

// Finding Key in Map
console.log(myMap.has(1))
console.log(myMap.has(2))
console.log(myMap.has(3))

// Common Functions 
// List all entries or iterating over each element of  the Map 

console.log("\nCommon Functions on Maps")
myMap.forEach(function(value, key){
    console.log(key  +" " + value)
})

// entries()

for (const x of myMap.entries()){
    console.log(x)
}
