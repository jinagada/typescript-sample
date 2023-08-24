let pending1: boolean;
pending1 = true;
// after a while
// ..
pending1 = false;

// NOT operator
const pending2: boolean = true;
const notPending = !pending2; // false
console.log(notPending);

const hasError: boolean = false;
const completed: boolean = true;

// AND operator
let result = completed && hasError;
console.log(result); // false

// OR operator
result = completed || hasError;
console.log(result); // true

let completed1: boolean = true;

function changeStatus(status: boolean) {
    // ..
}

