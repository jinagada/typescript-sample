class Person {
    protected ssn: string;
    private firstName: string;
    private lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person = new Person('153-07-3130', 'John', 'Doe');
console.log(person.ssn); // error

class Person1 {
    constructor(protected ssn: string, private firstName: string, private lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
