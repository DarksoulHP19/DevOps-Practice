///---------------------------------------------------------------------------------------------
//-> functions

//-> Function: its a method to reuse the code

function ourReusableFunction() {
    console.log("Hey, I am reusable function");
}

ourReusableFunction(); //function call o/p is: Hey, I am reusable function
 
function reusableFunction() {
    var a = "Headers";
    console.log(a);
}

reusableFunction(); //function call o/p is: Headers

///---------------------------------------------------------------------------------------------
//-> Passing Values to Functions with Arguments

function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}

ourFunctionWithArgs(10, 5); //passing values to function     o/p is: 5


function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(10,5); //passing values to function     o/p is: 15

///---------------------------------------------------------------------------------------------
//-> Global Scope and Functions
// scope refers to the visiblity of variables. Variables which are defined outside of a function block have Global scope.
// Global scope means they can be seen everywhere in your JavaScript code.


var myGlobal = 10; //global variable

function fun1() {
    oopsGlobal = 5; 
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1(); //o/p is:
fun2(); //o/p is: myGlobal: 10

///---------------------------------------------------------------------------------------------
//-> Local Scope and Functions
// Variables which are declared within a function, as well as the function parameters have local scope.
// That means they are only visible within that function.

function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope(); //o/p is: 5

//console.log(myVar); //o/p is: ReferenceError: myVar is not defined

///---------------------------------------------------------------------------------------------
//-> Global vs. Local Scope in Functions

var outerWear = "T-Shirt"; //global variable

function myOutfit() {
    var outerWear = "sweater"; //local variable
    return outerWear;                       
    /* 
    so in execution  of this  function it will give preference to local variable not to the global variable..
    */
}
console.log(myOutfit()); //o/p is: sweater
console.log(outerWear); //o/p is: T-Shirt  

///---------------------------------------------------------------------------------------------
//-> Return a Value from a Function with Return

function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10)); //o/p is: 3

function timesFive(num) {
    return num * 5;
}
console.log(timesFive(5)); //o/p is: 25
///---------------------------------------------------------------------------------------------
//-> Understanding Undefined Value returned from a Function

var sum = 0;
function addThree() {
    sum += 3;
    return sum;
}

function addFive() {
    sum += 5;
    return sum;
}

console.log(addThree());//3
console.log(addFive()); //8

///---------------------------------------------------------------------------------------------
//-> Assignment with a Returned Value

var changed = 0;
function change(num) {
    return (num + 5) / 3;
    
}
changed = change(10);
console.log(changed); //o/p is: 5

var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

proceessed = processArg(7); //o/p is: 2
console.log(proceessed);

///---------------------------------------------------------------------------------------------
//-> Stand in Line


function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr)); //Before: [1,2,3,4,5]
console.log(nextInLine(testArr, 6)); //1
console.log("After: " + JSON.stringify(testArr)); //After: [2,3,4,5,6]


///---------------------------------------------------------------------------------------------
//-> Understanding Boolean Values

function welcomeToBooleans() {
    return true; //returning boolean value ,if it is  flase then it will return false 
}

a = welcomeToBooleans(); //o/p is: true
console.log(a);