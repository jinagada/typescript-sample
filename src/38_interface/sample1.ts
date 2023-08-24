function getFullName(person: {
    firstName: string;
    lastName: string
}) {
    return `${person.firstName} ${person.lastName}`;
}

let person = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(getFullName(person));

interface Person {
    firstName: string;
    middleName?: string;
    lastName: string;
}

function getFullName1(person: Person) {
    return `${person.firstName} ${person.lastName}`;
}

let john = {
    firstName: 'John',
    lastName: 'Doe'
}
console.log(getFullName1(john));

let jane = {
    firstName: 'Jane',
    middleName: 'K.',
    lastName: 'Doe',
    age: 22
}
let fullName = getFullName1(jane);
console.log(fullName);

function getFullName2(person: Person) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}
fullName = getFullName2(jane);
console.log(fullName);

interface Person1 {
    readonly ssn: string;
    firstName: string;
    lastName: string;
}

let person1: Person1;
person1 = {
    ssn: '171-28-0926',
    firstName: 'John',
    lastName: 'Doe'
}
person1.ssn = '171-28-0000'; // error

interface StringFormat {
    (str: string, isUpper: boolean): string
}

let format: StringFormat;
format = function (str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format('hi', true));

let format1: StringFormat;
format1 = function (str: string, upper: boolean) {
    return upper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format1('hi', true));

let lowerCase: StringFormat;
lowerCase = function (str: string) {
    return str.toLowerCase();
}
console.log(lowerCase('Hi', false));

interface Json {
    toJson(): string
}

class Person2 implements Json {
    constructor(private firstName: string, private lastName: string) {
    }

    toJson(): string {
        return JSON.stringify(this);
    }
}

let person2 = new Person2('John', 'Doe');
console.log(person2.toJson());
