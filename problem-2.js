// Problem 2 from Project Euler (https://projecteuler.net/problem=2)

var sumEven = 0

var fibonnaci = [1, 1]

var nextNumber = fibonnaci[fibonnaci.length - 2] + fibonnaci[fibonnaci.length - 1]

while (nextNumber <= 4000000) {
  fibonnaci === fibonnaci.push(nextNumber);
  nextNumber = fibonnaci[fibonnaci.length - 2] + fibonnaci[fibonnaci.length - 1];
  if (nextNumber % 2 === 0) {
    sumEven = sumEven + nextNumber;
  }
}

console.log('The sum of even numbers for Fibonnaci numbers under 4,000,000 is ' + sumEven + '!')
