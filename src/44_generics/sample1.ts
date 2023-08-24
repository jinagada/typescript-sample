function getRandomNumberElement(items: number[]): number {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

function getRandomNumberElement1(items: any[]): any {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbers = [1, 5, 7, 4, 2, 9];
console.log(getRandomNumberElement(numbers));

let colors = ['red', 'green', 'blue'];
console.log(getRandomNumberElement1(colors));

function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let randomEle = getRandomElement<number>(numbers);
console.log(randomEle);
randomEle = getRandomElement(numbers);
console.log(randomEle);
let returnElem: string;
returnElem = getRandomElement(numbers); // error

function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

let result = merge({name: 'John'}, {jobTitle: 'Frontend Developer'});
console.log(result);
