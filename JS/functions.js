
//Declaration of the function
console.log('******Functions in JS******');
function cube(x){
    return x*x*x;
}

console.log(`Cube of 10 is ${cube(10)}`);
console.log();

// Ananymous function
console.log('***Ananymous Functions***')

const square = function(x){return x*x;}
console.log(`Square of 10 is ${square(10)}`);
console.log();

console.log('***Arrow Functions***')

const squareRoot = (x)=>Math.sqrt(x);

console.log(`Square root of 10 is : ${squareRoot(10)}`);
console.log(`Square root of 100 is : ${squareRoot(100)}`);
console.log();


console.log('***Call back functions');

const waitInterval = 500;
let curTime = 0;
const totalTime = 3000;
function startTime(callBack){
    setTimeout(()=>{
        clearInterval(ID);
        callBack('Time out');
        
    }, totalTime);
    const ID = setInterval(function(){
        console.log(`Current Time: ${curTime/1000}`)
        curTime += waitInterval;
    }, waitInterval);
}

startTime(function(value){
    console.log(`${value}`);
    console.log();
});



