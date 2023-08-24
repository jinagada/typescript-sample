class Person {
    readonly birthDate: Date;

    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}

let person = new Person(new Date(1990, 12, 25));
person.birthDate = new Date(1991, 12, 25); // error

class Person1 {
    constructor(readonly birthDate: Date) {
        this.birthDate = birthDate;
    }
}
