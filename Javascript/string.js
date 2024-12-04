//---------------------------------------------------------------------------------------------
//-> declare a string

var myFirstName = "Harsh";
var myLastName = "Patel";

console.log(myFirstName + " " + myLastName); //Harsh Patel

//---------------------------------------------------------------------------------------------
//-> Escaping literal quotes in strings

// var myStr ="I am ""double quoted"" string inside ""double quotes""";
var myStr ='I am ""double quoted"" string inside ""double quotes';


//---------------------------------------------------------------------------------------------
//-> Quoting Strings with Single Quotes

var myStr = `<a href="http://www.example.com" target="_blank">Link</a>`;
console.log(myStr); //<a href="http://www.example.com" target="_blank">Link</a>

//---------------------------------------------------------------------------------------------
//-> Escape Sequences in Strings

/****
 *  \' single quote
 * \" double quote
 * \\ backslash
 * \n newline
 * \r carriage return
 * \t tab
 * \b backspace
 * \f form feed
 */

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

//---------------------------------------------------------------------------------------------
//-> Concatenating Strings with Plus Operator

var myname = "Harsh" + " " + "Patel";
console.log(
    myname
); //Harsh Patel

//---------------------------------------------------------------------------------------------
//-> Concatenating Strings with Plus Equals Operator

var myname = "Harsh ";
myname += "Janakkumar Patel";
console.log(myname); //Harsh Janakkumar Patel

var myStr = "This is the first sentence. ";
myStr += "this is the second sentence.";

console.log(myStr); //This is the first sentence. this is the second sentence.  


//---------------------------------------------------------------------------------------------
//-> Constructing Strings with Variables

var myName = "Harsh";
var myStr = "My name is " + myName + " and I am well!";
console.log(myStr); //My name is Harsh and I am well!           


//---------------------------------------------------------------------------------------------
//-> Appending Variables to Strings

var anotherAdjective = "awesome!";
var myStr = "Learning to code is ";
myStr += anotherAdjective;
console.log(myStr); //learning to code is awesome!

var myStr = "worthwhile";
myStr += " and fun!";
console.log(myStr); //worthwhile and fun!


//---------------------------------------------------------------------------------------------
//-> Find the Length of a String
var firstNameLength = 0;
var firstName = "Harsh";

firstNameLength = firstName.length;
console.log(firstNameLength); //5

var lastNameLength = 0;
var lastName = "Patel";
lastNameLength = lastName.length;
console.log(lastNameLength); //5

//---------------------------------------------------------------------------------------------
//-> Use Bracket Notation to Find the First Character in a String
var firstLetterOfFirstName = "";
var firstName = "Harsh";


firstLetterOfFirstName = firstName[0]; //first character of string is  represted in array index 0 
console.log(firstLetterOfFirstName); //H

///---------------------------------------------------------------------------------------------
//-> Understand String Immutability
var myStr = "Jello World";
myStr[0] = "H"; //string are immutable -- eroor
console.log(myStr); //Jello World
myStr = "Hello World";
console.log(myStr); //Hello World

///---------------------------------------------------------------------------------------------
//-> Use Bracket Notation to Find the Nth Character in a String

var firstName = "Harsh";
var secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName); //a
var lastName = "Patel";
var thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName); //t

///---------------------------------------------------------------------------------------------
//-> Use Bracket Notation to Find the Last Character in a String
var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName); //h

var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName); //l


///---------------------------------------------------------------------------------------------
//-> Use Bracket Notation to Find the Nth-to-Last Character in a String
var secondToLastLetterOfFirstName = firstName[firstName.length - 2];
console.log(secondToLastLetterOfFirstName); //s

var secondToLastLetterOfLastName = lastName[lastName.length - 2];
console.log(secondToLastLetterOfLastName); //e

///---------------------------------------------------------------------------------------------
//-> Word Blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
        var  result = "";
        result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb+" to the store";
        return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly")); //big dog ran quickly
console.log(wordBlanks("Harsh", "", "ran", "quickly")); //a Harsh ran quickly

