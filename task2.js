function removeDuplicates(arr) {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

// Test input
const arr = [1, 1, 1, 2, 2, 3, 3, 3, 4, 5];
const newLength = removeDuplicates(arr);

console.log("New Length:", newLength); //  output: 5
console.log("Array after removing duplicates:", arr.slice(0, newLength));
