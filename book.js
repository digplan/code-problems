/*
1 Fibonacci
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. 
For instance,
F(3) = F(2) + F(1) */
function fib(n) {
    if(n < 2) return n
    return fib(n-1) + fib(n-2)
}

/*
2 Tribonacci with cache
A Tribonacci is the same concept as Fibonacci, except looks at three numbers
For instance,
F(4) = F(3) + F(2) + F(1) */
const cache = {}

function tribonacci(n) {
    if (n === 0) return 0
    if (n < 3) return 1
    if (cache[n]) return cache[n]
    cache[n] = tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1)
    return cache[n]
}

/*
3 Add without operator
Add two numbers using code, without using any operators */
function addnums(a, b) {
    if(b === 0) return a
    return addnums(a ^ b, (a & b) << 1)
}
const sum = addnums(1200, 5601)
console.log(sum)

/*
4 Insertion sort
*/
function InsertionSort(arr, k) {
    // Iterate each element in array, starting at 1
    for (let i = 1; i < arr.length; i++) {
        // Iterate backward from i
        for (let j = i; j > 0; j--) {
            // If value of j is less than preeceding value, swap the values
            if (arr[j] < arr[j - 1])
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
        }
    }
    return arr
}
console.log(InsertionSort([10, 12, 8, 4, 5, 6, 7, 8, 9, 10]))

/*
5 Bubble sort with recursion
*/
function bubbleSort(arr, n) {
    if (n === 0 || n === 1) return
    for (const i = 0; i < n; i++)
        // If first number is greater, swap the numbers
        if (arr[i] > arr[i + 1])
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
    bubbleSort(arr, n - 1)
}
console.log(bubbleSort([10, 12, 8, 4, 5, 6, 7, 8, 9, 10]))

/*
6 Sort groups
*/
function sortGroups(nums) {
    let low = 0, mid = 0, high = nums.length - 1

    while (mid <= high) {
        switch (nums[mid]) {
            case 0:
                [nums[low], nums[mid]] = [nums[mid], nums[low]]
                low++
                mid++
                break
            case 1:
                mid++
                break
            case 2:
                [nums[mid], nums[high]] = [nums[high], nums[mid]]
                high--
                break
        }
    }
}
console.log(bubbleSort([1, 2, 0, 0, 2, 2, 1, 1, 2]))

/*
7 Selection sort
*/
function selectionSort (arr) {

   //Loop till the second last element
   for(let i = 0; i < arr.length - 1; i++){

      //Loop after the i till the last element
      for(let j = i + 1; j < arr.length; j++){

         //if jth element is less than the ith element then swap
         //change < to > for sorting in descending order
         if(arr[j] < arr[i]){
           let temp = arr[i];
           arr[i] = arr[j];
           arr[j] = temp;
         }

      }

   }
   //return the sorted array
   return arr;
}
console.log(bubbleSort([1, 2, 0, 0, 2, 2, 1, 1, 2]))

/* 
8 Merge sort
*/
function merge(left, right) {
    let sortedArr = [] // the sorted items will go here
    while (left.length && right.length) {
        // Insert the smallest item into sortedArr
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right]
}
function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    // Recursive calls
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}
mergeSort([3, 5, 8, 5, 99, 1]) // [1, 3, 5, 5, 8, 99]

/*
9 Quicksort (recursive)
*/
function quickSort(arr) {
    if (arr.length < 2) return arr
    const pivot = arr[Math.floor(Math.random() * arr.length)]

    let left = [], right = [], equal = []

    for (let val of arr) {
        if (val < pivot) {
            left.push(val)
        } else if (val > pivot) {
            right.push(val)
        } else {
            equal.push(val)
        }
    }
    return [...quickSort(left), ...equal, ...quickSort(right)]
}

/*
10 Convert array to a linked list
*/
function linkedList(arr) {
    return arr.reduceRight((next, value) => ({ value, next }), null)
}
console.log(linkedList([3, 1, 2, 3, 4, 5]))

/*
11 Move zeroes
The problem "Move Zeroes" asks you to move all the zeroes in an array to the end while maintaining the relative order of the non-zero elements. Here is an example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

*/
const moveZeroes = (arr) => {
    let p1 = 0, p2 = 0
    while (p2 < arr.length) {
        if (arr[p2] !== 0)
            arr[p1] = arr[p2], p1++
        p2++
    }
    while (p1 < arr.length)
        arr[p1++] = 0
    return arr
}
console.log(moveZeroes([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))

/*
12 Reverse an integer */
const reverseInteger = (x) => {
    let res = 0, max = Math.pow(2, 31) - 1
    while (x) {
        if (res > max || res < -max) return 0
        res = res * 10 + x % 10
        x = ~~(x / 10)
    }
    return res
}
console.log(reverseInteger(1234567))

/*
13 Rotate an array
*/
const rotateArray = (nums, k) => {
    let res = []
    k = k % nums.length
    for (let i = 0; i < nums.length; i++) {
        const n = i < k ? i + nums.length : i
        res[n - k] = nums[i]
    }
    return res
}
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3))
