function log(message): void {
    console.log(message);
}

let useless: void = undefined;
useless = 1; // error
useless = null; // OK
