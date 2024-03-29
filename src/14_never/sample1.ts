function raiseError(message: string): never {
    throw new Error(message);
}

function reject() {
    return raiseError('Rejected');
}

let loop = function forever() {
    while (true) {
        console.log('Hello');
    }
}

function fn(a: string | number): boolean {
    if (typeof a == "string") {
        return true;
    } else if (typeof a == "number") {
        return false;
    }
    // make the function valid
    return neverOccur();
}

let neverOccur = () => {
    throw new Error('Never!');
}
