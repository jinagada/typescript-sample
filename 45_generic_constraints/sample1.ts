function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

let person = merge(
    {name: 'John'},
    {age: 25}
);
console.log(person);

let person1 = merge(
    {name: 'John'},
    25
);
console.log(person1);

function merge1<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

let person2 = merge1(
    {name: 'John'},
    25 // error
);

function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let str = prop({name: 'John'}, 'name');
str = prop({name: 'John'}, 'age'); // error
console.log(str);
