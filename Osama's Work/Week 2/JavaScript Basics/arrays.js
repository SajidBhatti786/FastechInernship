const myCars= [
  "Saab",
  "Volvo",
  "BMW"
];

// Accessing Cars Using Indices
console.log("Accessing Cars Using Indices")
console.log(myCars[0])
console.log(myCars[1])
console.log(myCars[2])



// Assigning Cars to empty Arrays
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

// Accessing Cars using Loop and Indices
console.log("\nAccessing Cars using Loop and Indices")
for(let i=0;i<cars.length;i++){
    console.log(cars[i])
}
// Adding Elements To Array
console.log("\nAdding Elements To Array")
cars.push("Audi")
console.log(cars)
// Removing Elements From Array
console.log("\nRemoving Elements From Array")
cars.pop()
console.log(cars)
// Changing Elements in Array
console.log("\nChanging Elements in Array")
cars[0]="Mercedes"
console.log(cars)
// Deleting Elements in Array
console.log("\nDeleting Elements in Array")
delete cars[0]
console.log(cars)
// Splicing an Array
console.log("\nSplicing an Array")
cars.splice(0,1,"Mercedes")
console.log(cars)
// Concatenating Arrays
console.log("\nConcatenating Arrays")
let cars2 = ["Audi","BMW"]
let cars3 = cars.concat(cars2)
console.log(cars3)
// Slicing an Array
console.log("\nSlicing an Array")
let cars4 = cars3.slice(1,3)
console.log(cars4)
// Sorting an Array
console.log("\nSorting an Array")
cars4.sort()
console.log(cars4)


// Reversing an Array
console.log("\nReversing an Array")
cars4.reverse()
console.log(cars4)
// Sorting an Array in Descending Order
console.log("\nSorting an Array in Descending Order")
cars4.sort(function(a,b){
    return b-a;
}
)
console.log(cars4)

// Sorting an Array in Ascending Order
console.log("\nSorting an Array in Ascending Order")
cars4.sort(function(a,b){
    return a-b;
}
)
console.log(cars4)

// Finding Max and Min Values in an Array
console.log("\nFinding Max and Min Values in an Array")
let numbers1 = [45,4,9,16,25]
let max = numbers1[0]
let min = numbers1[0]
for(let i=0;i<numbers1.length;i++){
    if(numbers1[i]>max){
        max = numbers1[i]
    }
    if(numbers1[i]<min){
        min = numbers1[i]
    }
}
console.log("Max = "+max)
console.log("Min = "+min)

// Finding Max and Min Values in an Array using Math Object
console.log("\nFinding Max and Min Values in an Array using Math Object")
let max1 = Math.max.apply(null,numbers1)
let min1 = Math.min.apply(null,numbers1)
console.log("Max = "+max1)
console.log("Min = "+min1)

// Finding Max and Min Values in an Array using Spread Operator
console.log("\nFinding Max and Min Values in an Array using Spread Operator")
let max2 = Math.max(...numbers1)
let min2 = Math.min(...numbers1)
console.log("Max = "+max2)
console.log("Min = "+min2)

// Map Function
console.log("\nMap Function:")
let numbers = [4,9,16,25]
let numbers2 = numbers.map(function(value,index){
    return value*2;
}
)
console.log(numbers2)
// Filter function
console.log("\nFilter Function:")
let numbers3 = numbers.filter(function(value,index){
    return value>10;
}
)
console.log(numbers3)

// Reduce Function
console.log("\nReduce Function:")
let sum = numbers.reduce(function(total,value,index){
    return total+value;
}
)
console.log(sum)

// Every Function
console.log("\nEvery Function:")
let numbers4 = [45,4,9,16,25]
let allOver18 = numbers4.every(function(value,index){
    return value>18;
}
)
console.log(allOver18)