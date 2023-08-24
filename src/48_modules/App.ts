import {EmailValidator} from "./EmailValidator";
import ZipCodeValidator from "./ZipCodeValidator";

let email = 'john.doe@typescripttutorial.net';
let validator = new EmailValidator();
let result = validator.isValid(email);
console.log(result);

validator = new ZipCodeValidator();
result = validator.isValid('95134');
console.log(result);
