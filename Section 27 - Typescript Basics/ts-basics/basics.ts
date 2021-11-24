// Primitives: numbers, strings, booleans
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number;

age = 12;

let userName:string | string[];

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More Complex types
let hobbies: string[];

hobbies = ['sports', 'cooking'];

type Person = {
  name: string,
  age: number
}

let person: Person;

person = {
  name: 'Max',
  age: 32
};


let people: Person[];

// Type inference

let course: string | number = 'React: The complete guide';

course = 1234;

// Function and Types

function addNums(a: number, b: number) {

}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];

  return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split('');