///---------------------------------------------------------------------------------------------
//-> if else

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}
a =trueOrFalse(true);
 console.log(a)// Output: Yes, that was true
 

///---------------------------------------------------------------------------------------------
//-> comparison with the equality operator
/**
 *  = is an assignment operator
 * == is an equality operator
 * === is a strict equality operator
 */
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}
a =testEqual(10);
console.log(a)// Output: Not Equal

///---------------------------------------------------------------------------------------------\
//-> comparison with the strict equality operator
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}
a =testStrict(7);
console.log(a)// Output: Equal

function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10"))// Output: Not Equal

///---------------------------------------------------------------------------------------------
//-> comparison with the inequality operator

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}
a =testNotEqual(99);
console.log(a)// Output: Not Equal

///---------------------------------------------------------------------------------------------
//-> comparison with the strict inequality operator

function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}
a =testStrictNotEqual(17);
console.log(a)// Output: Equal

///---------------------------------------------------------------------------------------------
//-> comparison with the greater than operator

function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under";
}

console.log(testGreaterThan(10))// Output: 10 or Under

///---------------------------------------------------------------------------------------------
//-> comparison with the greater than or equal to operator

function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}

console.log(testGreaterOrEqual(10))// Output: 10 or Over

///---------------------------------------------------------------------------------------------
//-> comparison with the less than operator

function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }
    if (val < 55) {
        return "Under 55";
    }
    return "55 or Over";
}

///---------------------------------------------------------------------------------------------
//-> comparison with the less than or equal to operator

function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}

console.log(testLessOrEqual(10))// Output: Smaller Than or Equal to 12
///---------------------------------------------------------------------------------------------
//-compariosn with the logical and operator
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

console.log(testLogicalAnd(10))// Output: No

///---------------------------------------------------------------------------------------------
//->compariosn with the logical or operator
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}
console.log(testLogicalOr(15))// Output: Inside


///---------------------------------------------------------------------------------------------
//-> else statements

function testElse(val) {
    var result = "";
    if(val>5){
        result = "Bigger than 5";
    }
    else{
        result = "5 or smaller";
    }
    return result;
}
console.log(testElseIf(4))// Output: 5 or smaller

///---------------------------------------------------------------------------------------------
//->else if statements

function testElseIf(val) {
    if(val>10){
        return "Greater than 10";
    }else if(val<5){
        return "Smaller than 5";
    }
    else{
        return "Between 5 and 10";
    }
}
testElseIf(7)// Output: Between 5 and 10

///---------------------------------------------------------------------------------------------
//-> logical order in if else statements

function orderMyLogic(val) {
    if(val<10){
        return "Less than 5";
    }
    else if (val <5 ){
        return "Less than 10";
    }
    else{
        return "Greater than or equal to 10";
    }
}

console.log(orderMyLogic(3))// Output: Less than 10

///---------------------------------------------------------------------------------------------
//-> chaining if else statements
/**
 * num < 5 return "Tiny"
 * num < 10 return "Small"
 * num < 15 return "Medium"
 * num < 20 return "Large"
 * num >= 20 return "Huge"
 */
function testSize(num) {
    if(num<=5){
        return "Tiny";
    }
    else if(num<=10){
        return "Small";
    }
    else if(num<=15){
        return "Medium";
    }
    else if(num<=20){
        return "Large";
    }
    else{
        return "Huge";
    }
}

console.log(testSize(700))// Output: Small


///---------------------------------------------------------------------------------------------
//-> golf code
/**
 * strokes 1 return "Hole-in-one!"
 * strokes <= par - 2 return "Eagle"
 * strokes == par - 1 return "Birdie"
 * strokes == par return "Par"
 * strokes == par + 1 return "Bogey"
 * strokes == par + 2 return "Double Bogey"
 * strokes >= par + 3 return "Go Home!"
 * par and strokes will always be numeric and positive
 */

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes){
    if (strokes == 1){
        return names[0];
    }
    else if(strokes <= par-2){
        return names[1];
    }
    else if(strokes == par - 1){
        return names[2];
    }
     else if(strokes == par ){
        return names[3];
    }
    
     else if(strokes == par + 1){
        return names[4];
    }
    
     else if(strokes  == par + 2){
        return names[5];
    }
    else if(strokes == par+3){
        return names[6];
    }
    
}

console.log(golfScore(5, 8))// Output: Go Home!

//---------------------------------------------------------------------------------------------
//-> switch statements

function caseInSwitch(val) {
    var answer ="";
    switch(val){
        case 1:
            answer = "Alpha";
            break;
        case 2:
            answer = "Beta";
            break;
        case 3:
            answer = "Gamma";
            break;
        case 4:
            answer = "Delta";
            break;
    }
    return answer;
}
console.log(caseInSwitch(4))// Output: Alpha

///---------------------------------------------------------------------------------------------
//-> default option in switch statements

function switchOfStuff(val) {
    var answer = "";
    switch(val){
        case `a`:
            answer = "Apple";
            break;
        case `b`:
            answer = "Bird";
            break;
        case `c`:
            answer = "Cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}

console.log(switchOfStuff(`2`))// Output: Cat

///---------------------------------------------------------------------------------------------
//-> multiple identical options in switch statements

function sequentialSizes(val) {
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "high";
            break; 
    }
    return answer;
}
console.log(sequentialSizes(9))// Output: high

///--------------------------------------------------
//->replacing if else chain

function chainToSwitch(val){
    var answer="";

    switch(val){
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;

    }
return answer;
}


///---------------------------------------------------------------------------------------------
//-> returning boolean values from functions

function isLess(a, b) {
    return a<b;
}
console.log(isLess(10, 15))// Output: true
