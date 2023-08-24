let add: (x: number, y: number) => number;

add = function (x: number, y: number) {
    return x + y;
};

let add1: (a: number, b: number) => number =
    function (x: number, y: number) {
        return x + y;
    };

add1 = function (x: string, y: string): number {
    return x.concat(y).length;
}; // error
