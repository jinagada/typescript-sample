let counter: number = 0;

function increment(counter: number): number {
    return counter++;
}

let items1 = [1, 2, 3, null];
let items2 = [0, 1, null, 'Hi'];
let arr = [new Date(), new RegExp('\d+')];

document.addEventListener('click', function (event) {
    console.log(event.button);
});
document.addEventListener('scroll', function (event) {
    console.log(event.button); // error
});
