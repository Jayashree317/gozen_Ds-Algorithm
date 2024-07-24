function rotateArrayReverse(nums, k) {
  const n = nums.length;
  k = k % n;

  nums.reverse();

  reverseArray(nums, 0, k - 1);

  reverseArray(nums, k, n - 1);

  return nums;
}

function reverseArray(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log(rotateArrayReverse(nums, k));
