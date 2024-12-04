///------------------------------------------------------------------------------------------------
//->objects

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
    };

var myDog = {
    "name" : "cheemu",
    "legs" : 2,
    "tails" : 9,
    "friends" : ["khatti toffeeeeee"]
};

//-----------------------------------------------------------------------------------------------
//-> Accessing object properties with dot notation

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
console.log(hatValue);
var shirtValue = testObj.shirt;
console.log(shirtValue);

//-----------------------------------------------------------------------------------------------
//-> Accessing object properties with bracket notation

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObj["an entree"];
console.log(entreeValue);
var drinkValue = testObj["the drink"];
console.log(drinkValue);

//-----------------------------------------------------------------------------------------------
//-> Accessing object properties with variables

var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 19;
var player = testObj[playerNumber];
console.log(player);

//-----------------------------------------------------------------------------------------------
//-> Updating object properties

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
    };
    ourDog.name = "Happy Camper";
    console.log(ourDog.name);

    var myDog = {
        "name" : "cheemu",
        "legs" : 2,
        "tails" : 9,
        "friends" : ["khatti toffeeeeee"]
    };
    myDog.name = "Happy cheemu";
    console.log(myDog.name);

//-----------------------------------------------------------------------------------------------
//-> Add new properties to an object
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
    };
    ourDog.bark = "bow-wow";
    console.log(ourDog);
    
    var myDog = {
        "name" : "cheemu",
        "legs" : 2,
        "tails" : 9,
        "friends" : ["khatti toffeeeeee"]
    };
    myDog.bark = "woof!";
    console.log(myDog);

//-----------------------------------------------------------------------------------------------
//-> Delete properties from an object

delete ourDog.friends;
console.log(ourDog);

delete myDog.friends;
console.log(myDog);
//-----------------------------------------------------------------------------------------------
//-> Using objects for lookups

function phoneticLookup(val){
    var result = "";
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val];
    return result;
}

console.log(phoneticLookup("charlie"));

//-----------------------------------------------------------------------------------------------
//-> Testing objects for properties
//---- hasOwnProperty method is used to check if the property is present in the object or not
var myObj = {
    gift : "pony",
    pet : "kitten",
    bed : "sleigh"
};

function checkObj(checkProp){
    if (myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
}

console.log(checkObj("gift"));

//-----------------------------------------------------------------------------------------------
//-> Manipulating complex objects

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },

    {
        "artist": "Beau Carnes",
        "title": "cerulean skies",
        "release_year": 2018,
        "formats": [
            "youtube video"
        ]
    }

];

//-----------------------------------------------------------------------------------------------
//-> Accessing nested objects

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

//-----------------------------------------------------------------------------------------------
//-> Accessing nested arrays

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);

//-----------------------------------------------------------------------------------------------
//-> Record collection

var collection = {
    "2548": {
        "album": "Slippery when wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it rock",
            "You give love a bad name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value){
    if(value === ""){
        delete collection[id][prop];
    }
    else if (prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }
    else {
        collection[id][prop] = value;
    }
    return collection;
}

// console.log(updateRecords(5439, "artist", "ABBA"));
console.log(updateRecords(2468, "tracks", "test"));

//-----------------------------------------------------------------------------------------------
//-> Iterate with while loops

var myArray = [];

var i =0;

while (i < 5){
    myArray.push(i);
    i++;
}
console.log(myArray);

//-----------------------------------------------------------------------------------------------
//-> Iterate with for loops

var ourArray = [];
for(var i = 0; i < 5; i++){
    ourArray.push(i+1);
}
console.log(ourArray);
var myArray = [];
for (var i = 1; i < 6; i++){
    myArray.push(i);
}
console.log(myArray);

//-----------------------------------------------------------------------------------------------
//-> Iterate odd numbers with a for loop

var ourArray = [];
for (var i = 0; i < 10; i += 2){
    ourArray.push(i);
}
console.log(ourArray);

var myArray = [];
for (var i = 1; i < 10; i += 2){
    myArray.push(i);
}
console.log(myArray);

//-----------------------------------------------------------------------------------------------
//-> Count backwards with a for loop

var ourArray = [];

for(var i = 10; i > 0; i -= 2){
    ourArray.push(i);
}
console.log(ourArray);

var myArray = [];
for (var i = 9; i > 0; i -= 2){
    myArray.push(i);
}
console.log(myArray);

//-----------------------------------------------------------------------------------------------
//-> Iterate through an array with a for loop

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++){
    ourTotal += ourArr[i];
}
console.log(ourTotal);

var myArr = [2, 3, 4, 5, 6];
var myTotal = 0;

for (var i = 0; i < myArr.length; i++){
    myTotal += myArr[i];
}  
console.log(myTotal);

///-----------------------------------------------------
//-> Nesting for loops

function multiplyAll(arr){
    var product =1;

    for (var i=0;i<arr.length;i++){
        for (var j=0;j<arr[i].length;j++){
            product *= arr[i][j];
        }
    }


    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);

//-----------------------------------------------------------------------------------------------
//-> Iterate with do...while loops
//--- the main difference between do...while and while loop is that do...while loop will run atleast once.
var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
}
while (i < 5);

console.log(i, myArray);

///-----------------------------------------------------
//-> Profile lookup

var contacts = [
    {
        "firstname": "Akira",
        "lastname": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]

    },
    {
        "firstname": "Harry",
        "lastname": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstname" : "Sherlock",
        "lastname" :"Holmes",
        "number" : "0487345643",
        "likes" : ["Intriguing Cases", "Violin"]
    },
    {
        "firstname" : "Kristian",
        "lastname" : "Vos",
        "number" : "unknown",
        "likes" : ["JavaScript", "Gaming", "Foxes"]
    }
]

function lookupProfile(name,prop){
    for (var i =0; i<contacts.length; i++){
        if (contacts[i].firstname === name){
            return contacts[i][prop] || "No such property";
        }
    }
    return "no such contact";
};

var data = lookupProfile("hello", "likes");
console.log(data);