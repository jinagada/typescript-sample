function addNumbers(a: number, b: number): number {
    return a + b;
}

function addStrings(a: string, b: string): string {
    return a + b;
}

function add(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Type Error');
}

function add1(a: number, b: number): number;
function add1(a: string, b: string): string;
function add1(a: any, b: any): any {
    return a + b;
}
let result = add(10, 20);
console.log(result);

function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}

class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return  ++this.current;
    }
}

let counter = new Counter();
console.log(counter.count());
console.log(counter.count(20));
