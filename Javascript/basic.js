//->comments

var num=5 ; // in-line comment

/* this is a 
multi-line comment 

asdasdsdfsdxzcvzcvz
dsxcvvseasfd



*/
num  =  num + 5;


//---------------------------
//->Data Types

//undefined, null, boolean, string, symbol, number, and object

//->Variables are used to store this value 
/* var,let,const 
 */

var myName = "harsh"
myName = 8

let ourname = "hageemaru"

const pi = 3.14

//---------------------------
//->Storing values with Assignment Operator

var a;
console.log(a) //undefined
var b = 2;

a = 7;
console.log(a)//7


//---------------------------
//->Initializing Variables with the Assignment Operator
var a=9;
console.log(a)//9

//---------------------------
//->Uninitialized Variables

var a = 5;
var b = 10;
var c = "I am a harsh";

a = a + 1;
b = b + 5;
c = c + " patel";

//---------------------------
//->case sensitivity in javascript

//declarations
var studlyCapVar; //camel case
var properCamelCase;
var titleCaseOver;

//assignments
studlyCapVar = 10;
properCamelCase = "A string";
titleCaseOver = 9000;

//---------------------------
//->Add two numbers with javascript

var sum = 10 + 23;
console.log(sum) //33

//---------------------------
//->Subtract one number from another with javascript

var difference = 45 - 33;
console.log(difference) //12

//---------------------------
//->Multiply two numbers with javascript

var product = 8 * 10;
console.log(product) //80

//---------------------------
//->Divide one number by another with javascript

var quotient = 66 / 33;
console.log(quotient) //2

//---------------------------
//->Increment a number with javascript

var myVar = 87;
myVar++;
console.log(myVar) //88
myVar = myVar + 1;
console.log(myVar) //89

//---------------------------
//->Decrement a number with javascript
myVar = myVar - 1;
console.log(myVar) //88
myVar--;
console.log(myVar) //87

//---------------------------
//->Decimal numbers with javascript

var ourDecimal = 5.7;
var myDecimal = 0.009;


//---------------------------
//->Multiply two decimals with javascript

var product = 2.0 * 2.5;
console.log(product) //5

//---------------------------
//->Divide one decimal by another with javascript

var quotient = 4.4 / 2.0;
console.log(quotient) //2.2

//---------------------------
//->Finding a remainder in javascript

var remainder;
remainder = 11 % 3;
console.log(remainder) //2

//---------------------------
//->Compound Assignment with Augmented Addition

var a = 3;
var b = 17;
var c = 12;

a += 12; // a = a + 12 ,o/p = 15
b += 9;// b = b + 9 ,o/p = 26
c += 7;// c = c + 7 ,o/p = 19
console.log(a)
console.log(b)
console.log(c)
//---------------------------
//->Compound Assignment with Augmented Subtraction

a-=1 // a = a - 1  ,o/p = 14
b-=6 // b = b - 6   ,o/p = 20
c-=5 // c = c - 5   ,o/p = 14
console.log(a)
console.log(b)
console.log(c)

//---------------------------
//->Compound Assignment with Augmented Multiplication

a*=3 // a = a * 3  ,o/p = 42
b*=2 // b = b * 2   ,o/p = 40
c*=10 // c = c * 10   ,o/p = 140
console.log(a)
console.log(b)
console.log(c)


//---------------------------
//->Compound Assignment with Augmented Division

a/=3 // a = a / 3  ,o/p = 14
b/=2 // b = b / 2   ,o/p = 20
c/=10 // c = c / 10   ,o/p = 14
console.log(a)
console.log(b)
console.log(c)
 

