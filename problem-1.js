// Problem 1 from Project Euler (https://projecteuler.net/problem=1)

var x = 1000; // change this value to calculte the sum of all the multiples of 3 or 5 below x

var sum = 0;

for (i = 0; i < x; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum = sum + i;
  }
}

console.log('The sum is ' + sum + '!');
