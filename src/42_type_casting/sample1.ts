let input = document.querySelector('input[type="text"]');
console.log(input.value); // error
let input1 = document.querySelector('input[type="text"]') as HTMLInputElement;
console.log(input1.value);

let enteredText = (input as HTMLInputElement).value;

let el: HTMLElement;
el = new HTMLInputElement();

let input2 = <HTMLInputElement>document.querySelector('input[type="text"]');
console.log(input2.value);
