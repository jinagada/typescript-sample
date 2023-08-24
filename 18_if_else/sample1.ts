const max = 100;
let counter = 0;
if (counter < max) {
    counter++;
}
console.log(counter);

counter = 100;
if (counter < max) {
    counter++;
}
console.log(counter);

if (counter < max) {
    counter++;
} else {
    counter = 1;
}
console.log(counter);

counter = 100;
counter < max ? counter++ : counter = 1;
console.log(counter);

let discount: number;
let itemCount = 11;
if (itemCount > 0 && itemCount <= 5) {
    discount = 5; // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // 10% discount
} else if (itemCount > 10) {
    discount = 15; // 15% discount
} else {
    throw new Error('The number of items cannot be negative!');
}
console.log(`You got ${discount}% discount.`);
