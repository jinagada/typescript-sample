function multiply(a: number, b: number, c?: number): number {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

function multiply1(a: number, b?: number, c: number): number { // error
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

