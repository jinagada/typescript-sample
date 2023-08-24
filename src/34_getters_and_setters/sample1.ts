class Person {
    public age!: number;
    public firstName!: string;
    public lastName!: string;
}

let person = new Person();
person.age = 26;

class Person1 {
    private _age!: number;
    private _firstName!: string;
    private _lastName!: string;

    public get age() {
        return this._age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public get firstName() {
        return this._firstName;
    }

    public set firstName(theFirstName: string) {
        if (!theFirstName) {
            throw new Error('Invalid first name.');
        }
        this._firstName = theFirstName;
    }

    public get lastName() {
        return this._lastName;
    }

    public set lastName(theLastName: string) {
        if (!theLastName) {
            throw new Error('Invalid last name.');
        }
        this._lastName = theLastName;
    }

    public get fullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    public set fullName(name: string) {
        let parts = name.split(' ');
        if (parts.length != 2) {
            throw new Error('Invalid name format: first last');
        }
        this._firstName = parts[0];
        this._lastName = parts[1];
    }
}

let person1 = new Person1();
person1.age = 10;
person1.age = 0; // error

person1 = new Person1();
person1.fullName = 'John Doe';
console.log(person1.fullName);
