//-----------------------------------------------------------------------------
//->Genrate Random Fractions

function randomFraction() {

    return Math.random();
}

console.log(randomFraction());

//-----------------------------------------------------------------------------
//->Genrate Random Whole Numbers

function randomWholeNumber() {

    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNumber());

//-----------------------------------------------------------------------------
//->Genrate Random Whole Numbers within a Range

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
function randomWholeNum(){
    return Math.floor(Math.random() * 10);
}
console.log(randomNumberBetween0and19);

//-----------------------------------------------------------------------------
//->genrate random fractions within a range

function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

console.log(ourRandomRange(1, 9));

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(5, 15));

//-----------------------------------------------------------------------------
//->parseInt function
//parseInt function is used to convert a string into an integer.

function convertToInteger(str) {
    return parseInt(str);
}
convertToInteger("56");
console.log(convertToInteger("56"));

//-----------------------------------------------------------------------------
//->parseInt with a Radix
//The parseInt() function can also be used with a radix. The radix specifies the base of the number in the string. The radix can be an integer between 2 and 36.

function convertToInteger(str) {
    return parseInt(str, 2); //change base 10 to base 2
}

console.log(convertToInteger("101"));

//-----------------------------------------------------------------------------
//->Ternary Operator

// condition ? statement-if-true : statement-if-false;

function checkEqual(a, b) {
    return a === b ? true : false;
}

console.log(checkEqual(1, 1));

//-----------------------------------------------------------------------------
//->Multiple Ternary Operators  

function checkSign(num) {
    return num > 0 ? "positive" : num <0 ? "negative" : "zero";
}

console.log(checkSign(-10));//negative

//-----------------------------------------------------------------------------
//->var and let

let catName = "Quincy";
let quote;

 catName = "Beau";

function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";
    return quote;
}

console.log(catTalk());



function checkScope() {
    "use strict";
    //let i = "function scope";
    if (true) {
        var i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;

}

console.log(checkScope());
//-----------------------------------------------------------------------------
//->const keyword
// whenever

function printManyTimes(str) {
    "use strict";

    const sentence = str + " is cool!";
    // sentence = str + " is amazing!"; //error
    for (let i = 0; i < str.length; i += 2) {
        console.log(sentence);
    }
 
}
console.log(printManyTimes("Harsh"));

//-----------------------------------------------------------------------------
//->Mutate an Array Declared with const

const s = [5, 7, 2];
function editInPlace() {
    "use strict";

    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
console.log(editInPlace());

//-----------------------------------------------------------------------------
//->Prevent Object Mutation

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try{
        // MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
// console.log(PI); //--> this will throw an error

//-----------------------------------------------------------------------------
//->Arrow Function:- use to replace the function keyword

const magic = ()=>  Date()

//-----------------------------------------------------------------------------
//->Arrow Function with Parameters

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

//-----------------------------------------------------------------------------
//->Higher Order Arrow Functions

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};


const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//-----------------------------------------------------------------------------
//->Default Parameters

const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));

//-----------------------------------------------------------------------------
//->Rest Operator
//  ... rest operator is used to store multiple arguments in a single variable.
const sum = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3, 4));

//-----------------------------------------------------------------------------
//->Spread Operator
//  ... spread operator is used to expand arrays and other expressions in places where multiple parameters or elements are expected.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function (){
    arr2 = [...arr1];//copying arr1 to arr2
    arr1[0] = 'potato';

})();
console.log(arr1);

//-----------------------------------------------------------------------------
//->Destructuring Assignment to Assign Variables from Objects

var voxel = {x: 3.6, y: 7.4, z: 6.54};
const {x: a, y: b, z: c} = voxel;

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const {tomorrow: tempOfTomorrow} = avgTemperatures;
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));

//-----------------------------------------------------------------------------
//->Destructuring Assignment with Nested Objects

const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast) {
    "use strict";

    const {tomorrow: {max: maxOfTomorrow}} = forecast;
    return maxOfTomorrow;
}

const {tomorrow: {max: maxOfTomorrow}} = LOCAL_FORECAST;
console.log(getMaxOfTmrw(LOCAL_FORECAST));


//-----------------------------------------------------------------------------
//->Destructuring Assignment to Assign Variables from Arrays

const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);

let an = 8, bn = 6;
(() => {
    "use strict";
    [an, bn] = [bn, an];
})();
console.log(an);
console.log(bn);

//-----------------------------------------------------------------------------
//->Destructuring Assignment with the Rest Operator to Reassign Array Elements

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    const [a, b, ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

//-----------------------------------------------------------------------------
//->Destructuring Assignment to Pass an Object as a Function's Parameters

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
}
const half = (function() {
    return function half({max, min}) {
        return (max + min) / 2.0;
    };
})();

console.log(stats);
console.log(half(stats));

//-----------------------------------------------------------------------------
//->Template Literals

const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const greeting = `Hello, my name is ${person.name}! 
I am
 ${person.age} years
  old.`;
console.log(greeting);
//-----------------------------------------------------------------------------
//->Write Concise Object Literal Declarations Using Simple Fields

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]};

    function makeList(arr) {
        const resultDisplayArray = [];
        for (let i = 0; i < arr.length; i++) {
            resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
        }
        return resultDisplayArray;
    }

    //---------------------------------------------------------------------
    //-> simple fields

    const createPerson =(name,age,gender) =>({name,age,gender});
    console.log(createPerson("Zodiac Hasbro", 56 ,"male"));

//-------------------------------------------------------------------------
//-> consentive declaration funcion

const bicycle = {
    gear : 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);

