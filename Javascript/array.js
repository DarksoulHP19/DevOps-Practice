///---------------------------------------------------------------------------------------------
//-> Store Multiple Values in one Variable using JavaScript Arrays

var ourarray = ["John", 23];
console.log(ourarray); //["John", 23]


var myarray = ["Quincy", 1];
console.log(myarray); //["Quincy", 1]
///---------------------------------------------------------------------------------------------
//-> Nest one Array within Another Array

var ourArray = [["the universe", 42], ["everything", 101010]]; //2D array
console.log(ourArray); //[ [ 'the universe', 42 ], [ 'everything', 101010 ] ]

var myArray =[['bulls', 23], ['white sox', 45]];
console.log(myArray); //[ [ 'bulls', 23 ], [ 'white sox', 45 ] ]

///---------------------------------------------------------------------------------------------
//-> Access Array Data with Indexes
var ourArray = [50,60,70];  
var ourData = ourArray[0]; //50
console.log(ourData);
 
var myArray = [500000,60,70]; 

var myData = myArray[0]; //50
console.log(myData);

///---------------------------------------------------------------------------------------------
//-> Modify Array Data With Indexes
var ourArray = [18,64,99];
console.log(`before updation array second element is `,ourArray[1],"and array is ",ourArray); //[18,64,99]
ourArray[1] = 45; //ourArray now equals [18,45,99].

var myArray = [18,64,99];
console.log(`after updation array second element is `,ourArray[1],"and array is ",ourArray); //[18,64,99]

///---------------------------------------------------------------------------------------------
//-> Access Multi-Dimensional Arrays With Indexes

var myarr =[[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myarr[0][0]; //1    here 1st index is for outer array and 2nd index is for inner array.
console.log(myData);

///---------------------------------------------------------------------------------------------
//-> Manipulate Arrays with push()

var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]); // ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]  
console.log(ourArray);


var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]); // myArray now equals [["John", 23], ["cat", 2], ["dog", 3]]  
console.log(myArray);

///---------------------------------------------------------------------------------------------
//-> Manipulate Arrays with pop() :- pop removes the last element from an array and returns that element.

var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop(); // removedFromOurArray now equals 3.
console.log(removedFromOurArray); //3

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop(); // removedFromMyArray now equals ["cat", 2].
console.log(removedFromMyArray); //[ 'cat', 2 ]

///---------------------------------------------------------------------------------------------
//-> Manipulate Arrays with shift() :- shift removes the first element from an array and returns that element.

var ourArray = [1,2,3];
var removedFromOurArray = ourArray.shift(); //1.
console.log(removedFromOurArray); //1

var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift(); //["John", 23].
console.log(removedFromMyArray); //[ 'John', 23 ]

///---------------------------------------------------------------------------------------------
//-> Manipulate Arrays with unshift() :- unshift adds an element in the beginning of an array.

var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy"); // ourArray now equals ["Happy", "J", "cat"]
console.log("after opration array is",ourArray); 

var myArray = [["John", 23], ["dog", 3]];
myArray.shift(); // myArray now equals [["dog", 3]]
myArray.unshift(["Paul", 35]); // myArray now equals [["Paul", 35], ["dog", 3]]
console.log("after opration array is",myArray);

///---------------------------------------------------------------------------------------------
//-> Shopping List (nested array)

var myList =[["cereal",3],["milk",2],["bananas",3],["juice",2],["eggs",12]];
console.log(myList);