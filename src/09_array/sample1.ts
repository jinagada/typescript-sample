let skills: string[];
skills[0] = "Problem Solving"; // error
skills[1] = "Programming"; // error
skills.push('Software Design'); // error

let skills1 = ['Problem Sovling', 'Software Design', 'Programming'];

let skills2: string[];
skills2 = ['Problem Sovling', 'Software Design', 'Programming'];
// skills2.push(100); // error

let skill = skills2[0];
console.log(typeof (skill));

let series = [1, 2, 3];
console.log(series.length);
let doubleIt = series.map(e => e * 2);
console.log(doubleIt);

let scores = ['Programming', 5, 'Software Design', 4];
let scores1: (string | number)[];
scores1 = ['Programming', 5, 'Software Design', 4];
