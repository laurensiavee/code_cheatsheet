// JS Basic syntax
// https://www.youtube.com/watch?v=hdI2bqOjy3c&t=2s
// ~1:11:00 (sampe sebelum DOM)

// alert('hi');
console.log('hi');
console.error('err');
console.warn('warn');

// variables
// var, let, const

// var = global var, ga bagus, jrg dipake

// let variable plg kepake
let age = 12;
age = 14;

// const ya conts, ga bs diubah, harus di assign pas init dan ga bs diu reassign
const zero = 0;

// datatypes
// string, num, bool, undefined

const name = 'john wick';
const umur = 30;
const gpa = 3.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // ga di assign = auto datatype undefined

console.log(typeof age);

// string string an
console.log('my name is ' + name + ' age ' + age); //concat
console.log(`my name is ${name} age ${age}`); //template, ps: harus pke ` gabisa ' "
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substring(0,2));
console.log(name.split('')); //salah satu guna buat split csv

// array array an
const nums = new Array(1,2,3,4,5);
console.log(nums);

const fruits = ['apples', 'banana', 10, true]; // bs multi data type
console.log(fruits);
console.log(fruits[1]);

fruits.push('grapes'); // add to end
console.log(fruits);

fruits.unshift('berry'); // add to head
console.log(fruits);

fruits.pop(); // rmv last
console.log(fruits);

console.log(Array.isArray('hello'));

// objects literals
const person = {
    fName: 'Marry',
    lName: 'Joe',
    age: 30,
    hobbies: ['sing', 'dance'],
    address: {
        kota: 'bandar lampung',
        provinsi: 'lampung'
    }
}

console.log(person.address.kota);
console.log(person.hobbies[0]);

const { fName, lName, address: { kota } } = person; // ini kek ngambil variable dalam person biar bs dipake diluar, as const var
console.log(kota);

person.email = 'joemarry@email.com'; // assign new prop
console.log(person);

// arrays of object
const todos = [
    {
        id: 1,
        text: 't1',
        isComplete: true
    },
    {
        id: 2,
        text: 't2',
        isComplete: false
    }
];

console.log(todos[1].text)

// JSON
const todoJson = JSON.stringify(todos);
console.log(todoJson);

// for
for(let i=0; i<10; i++){
    console.log(i);
}

// while
let i=0;
while(i<10){
    console.log(i);
    i++;
}

for(let i=0; i<todos.length; i++){
    console.log(todos[i].text);
}

for(let todo of todos){
    console.log(todo.text);
}

// iter advance
// foreach, map, filter

todos.forEach(function(todo){
    console.log(todo.id);
});

// map return array
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

// filter return array
const todoId = todos.filter(function(todo){
    return todo.id === 1;
});
console.log(todoId);

// filter + map
const todoCompleted = todos.filter(function(todo){
    return todo.isComplete === true;
}).map(function(todo){
    return todo.text;
});

console.log(todoCompleted);

// if if an
const xx = 10
const yy = 10

// == ga match data type, pke ===
if(xx === 10 || yy > 10) {
    console.log(xx);
} 
else if (xx > 10 && yy <10) {
    console.log(xx);
}
else{
    console.log(xx);
}

const xxx = 10;
const col =  x>10? 'red': 'blue';
console.log(col)

switch(col){
    case 'red':
        console.log(col);
        break;
    default:
        break;
}

// function
function addNums(num1 = 1, num2 = 2){
    console.log(num1 + num2);
    return num1 + num2
}

addNums();
addNums(2, 9);

// arrow function
const addNumss = (num1 = 1, num2 = 2) => {
    console.log(num1 + num2);
    return num1 + num2
}
const addNumsss = (num1 = 1, num2 = 2) => console.log(num1 + num2);
addNumsss(4,4);
const addNumsRet = (num1 = 1, num2 = 2) => num1 + num2;
console.log(addNumsRet(7,4));

todos.forEach((todo) => console.log(todo));

// constructor function
// ada 2: es5/preclass/prototype, es6/class

// es5:
function Person(firstName, lastName, dob) //name class capital depan
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); // convert string to date

    // function dalem constructor class, not best practice, pke prototype aja
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

// prototype
Person.prototype.getBirthYearNew = function(){
    return this.dob.getFullYear();
}

// init(instantiate obj)
const person1 = new Person('Joe', 'mama', '4-3-2000');
const person2 = new Person('rick', 'roll', '9-2-2000');

console.log(person1.firstName);
console.log(person1.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person1.getBirthYearNew());

// es6:
class PersonES6 {
    constructor (firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYearES6(){
        return this.dob.getFullYear();
    }
}

