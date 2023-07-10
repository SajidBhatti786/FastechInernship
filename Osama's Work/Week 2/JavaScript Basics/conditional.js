
// Conditional Statement
console.log("\nConditional Statements:")
console.log("If Statement:")
let age = 18;
if(age >= 18){
    console.log("You are eligible to vote")
}
else {
    console.log("You are not eligible to vote")
}




console.log('\nSwitch Case:')
let day = 3;
console.log("Day is : " + day)
switch(day){
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7 :
        console.log("Sunday")
        break;
    default:
        console.log("Invalid Day")
        break
}


console.log("\nTernary Operator:")
let age1 = 18;
let isEligible = (age1 >= 18) ? "You are eligible to vote" : "You are not eligible to vote"
console.log("Eligible for Vote "+isEligible)


// Loops 

console.log("\nLoops:")

// For Loop
console.log("For Loop:")
for(let i=0;i<5;i++){
    console.log("i = "+i)
}


// While Loop
console.log("\nWhile loop:");
let i=0;
while(i<5){
    console.log("i = "+i)
    i++;
}
console.log("\nDo While loop:");
i=0;
do{
    console.log("i = "+i)
    i++;
}
while(i<5)


// Break & Continue Statements
console.log("\nBreak Statement:")
for(let i=0;i<5;i++){
    if(i==3){
        console.log("Break")
        break;
    }
    console.log("i = "+i)

    if (i==2){
        console.log("Continue...")
        continue;
    }

}

// For In Loop
console.log("\nFor In Loop:")
let person = {
    name : "John",
    age : 30,
    city : "New York"
}
for(let x in person){
    console.log(x+" : "+person[x])
}

// For Of Loop
console.log("\nFor Of Loop:")
let cars = ["BMW","Volvo","Mini"]
for(let x of cars){
    console.log(x)
}

// For Each Loop
console.log("\nFor Each Loop:")
cars.forEach(function(value,index){
    console.log(index+" : "+value)
}
)





