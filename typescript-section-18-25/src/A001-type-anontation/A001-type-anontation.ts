//Types basics
let nome: string = 'klesio';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer simbol');
//let big: bigint = 10s

// Arrays

let arrayNumbers: Array<number> = [1, 2, 3, 4];
let arrayNumbers2: number[] = [1, 5, 7, 4];
let arrayStrings: Array<string> = ['one', 'two', 'three'];
let arrayStrings2: string[] = ['one', 'two', 'three'];

console.log(arrayNumbers);
console.log(arrayStrings);

console.log(arrayNumbers2);
console.log(arrayStrings2);

//Objects

let person: { name: string; age: number; adulto?: boolean } = {
  age: 30,
  name: 'luiz',
  adulto: false,
};

console.log(person.name);

//Functions
function soma(x: number, y: number) {
  return x + y;
}

const sum = soma(2, 2);
console.log(sum);

// Type annotations

const sum2: (num1: number, num2: number) => number = (num1, num2) =>
  num1 + num2;

console.log(sum2(2,3));
