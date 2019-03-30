import "../src/styles/main.scss";

let start = 3;
let foundPrimes: any = [];
let foundPerfectNumbers: any = [];

for (let i = 0; i < 4; i++) {
  primeCheck();
  perfectNumberCheck();
}

console.log(foundPrimes);
console.log(foundPerfectNumbers);

function perfectNumberCheck() {
  if (findPerfectNumber(start)) {
    start = addition(foundPrimes[foundPrimes.length - 1]);
  } else {
    start = multiplikation(start);
    perfectNumberCheck();
  }
}

function primeCheck() {
  if (isPrime(start)) {
    start = multiplikation(start);
  } else {
    findPerfectNumber(start);
    start = addition(start);
    primeCheck();
  }
}

function multiplikation(value: any) {
  return value * 2;
}

function addition(value: any) {
  return value + value + 1;
}

function isPrime(value: any) {
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  foundPrimes.push(value);
  return true;
}

function findPerfectNumber(number: any) {
  let temp = 0;
  for (var i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }

  if (temp === number && temp !== 0) {
    foundPerfectNumbers.push(number);
    return true;
  } else {
    return false;
  }
}
