function add(a: number, b: number): number {
    return a + b;
}

let sum = add('10', '20'); // error

function echo(message: string): void {
    console.log(message.toUpperCase());
}

function add1(a: number, b: number) {
    return a + b;
}
