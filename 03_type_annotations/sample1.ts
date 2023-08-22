let counter: number = 1;
// counter = 1;
// counter = 'Hello';
let name1: string = 'Jone';
let age: number = 25;
let active: boolean = true;
let arrayName: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
let person: { name: string; age: number };

person = {
    name: 'John',
    age: 25
};

let greeting: (name: string) => string;
greeting = function (name: string) {
    return `Hi ${name}`;
}
greeting = function () {
    console.log('Hello');
}; // error
