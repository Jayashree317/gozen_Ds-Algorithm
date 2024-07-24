function findMissingNumber(arr, n) {
    const sumExpected = (n * (n + 1)) / 2;
    const sumActual = arr.reduce((acc, num) => acc + num, 0);
    return sumExpected - sumActual;
}
const arr2 = [1, 3, 4, 5, 6, 7, 8, 9, 10];
const n2 = 10;
console.log("Missing Number:", findMissingNumber(arr2, n2));  // output: 2
