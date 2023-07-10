console.log("Hello world")
const  variable1 = 10
console.log("Simple Variable : "+variable1)

let variable2;
variable2 =78;
console.log("Variable declared using 'let' : "+variable2)


//  Declaring Variable Using Var
var variable3;
variable3 = 89;
console.log("Variable declared using 'var' : "+variable3)

const  variable4= 98;
console.log("Simple Variable initialize as constant using 'const' : "+variable4)


{
    let variable5 = 90;
    console.log("Declared using 'let' in a block : "+variable5)
}


// we can not access variable5 here
console.log("Can not access varaible5 outside the block in which it declared")

{
    var variable6 = 100;
    console.log("Declared using 'var' in a block : "+variable6)
}

// We can access variable6 here
console.log("Can access varaible6 outside the block in which it declared")