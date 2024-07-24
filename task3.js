function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Test input
const n = 10;
const result = factorial(n);

console.log(`Factorial of ${n}: ${result}`); //  output: Factorial of 10: 3628800
