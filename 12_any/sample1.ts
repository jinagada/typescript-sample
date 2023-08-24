const json = `{"latitude": 10.11, "longitude": 12.12}`;
const currentLocation = JSON.parse(json);
console.log(currentLocation);
console.log(currentLocation.x); // undefined

let result: any;
result = 10.123;
console.log(result.toFixed());
result.willExist();

let result1: object;
result1 = 10.123; // error
result1.toFixed(); // error
