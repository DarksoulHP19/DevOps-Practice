//-----------------------------------------------
//->class

import { capitalizeString } from "./string_function";

class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

const zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);

function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);

//---------------------------------------------------------
//->getter and setter

class Book{
    constructor(author){
        this._author = author;
    }
    get writer(){
        return this._author;
    }
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}

function makeClass(){
    class Thermostat{
        constructor(temp){
            this._temp = 5/9 * (temp - 32); // feranheit to celcius 
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

console.log(temp);
//---------------------------------------------------------
