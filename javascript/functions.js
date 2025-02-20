//functions

//syntax

//function name(){}

//function f(){

   // console.log("chips");
    //console.log("lays");
//}

//f();

// types

// function statement and declaration------------>>>  here we give function name with parameter and arguments

function f(js){

    console.log("evil");

}
f();

//function expression---------------------->>>>>>> here function is declared inside a variable name

let a=function g(ab){

    console.log("bad");

}
a();

//anonymous function------------------------->>>>>>>> here we need not give the function name

let b=function(cd){

    console.log(cd);

}
b("polite");

//Immediate Invoke funtion expression--->IIFE  It starts with a circle paranthesis and no function name

(function(iife){

    console.log(iife);
} )("invoke");

// Arrow function------------>   It is a single line function

// syntax-------->()=>{}

let arr=(g)=>{console.log(g);}
arr("arrow function");


