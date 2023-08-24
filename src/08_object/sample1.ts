let employee: object;
employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
console.log(employee);

employee = "Jane"; // error
console.log(employee.hireDate); // error

let employee1: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
};
employee1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

let employee2: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
}

let vacant: {};
vacant.firstName = 'John'; // error

let vacant1: {} = {};
console.log(vacant1.toString());
