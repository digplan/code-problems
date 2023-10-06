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
    for (const i in arr) {
        // Iterate backward from i
        for (let j = Number(i + 1); j > 0; j--) {
            // If value of j is less than preeceding value, swap the values
            if (arr[j] < arr[j-1])
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
   for(let i in arr){

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
    for (i in nums) {
        const n = i < k ? i + nums.length : i
        res[n - k] = nums[i]
    }
    return res
}
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3))

/*
14 Radix sort
Radix sort is an efficient sorting algorithm that works by sorting the elements of an array based on their individual digits. It is a non-comparative sorting algorithm, meaning that it does not compare the values of the elements being sorted. Instead, it works by sorting the elements based on the digits of their binary representation.
This implementation of radix sort works by iterating over each digit of the numbers in the input array, starting with the least significant digit. It uses an array of "buckets" to sort the numbers based on their digits. The numbers are then concatenated back into the original array in their sorted order.

The time complexity of radix sort is O(nk) where n is the number of elements in the array and k is the number of digits in the largest element. The space complexity is O(n + k).
*/
function radixSort(arr) {
  const maxDigits = getMaxDigits(arr);
  for (let i = 0; i < maxDigits; i++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (const num of arr) {
      buckets[getDigit(num, i)].push(num);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

function getMaxDigits(nums) {
  let maxDigits = 0;
  for (const num of nums) {
    maxDigits = Math.max(maxDigits, getNumDigits(num));
  }
  return maxDigits;
}

function getNumDigits(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(num)) + 1;
}

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

/* 15 Regular Expression 
Implement a regular expression function that matches * and .
*/
function regex (s, p) {
    let si = 0
    for(i in p) {
        if(p[i] === '*') {
            let la = p[i+1]
            while(s[si] && (s[si] !== la))
              si++
        } else if(p[i] === '.' || p[i] === s[si]) {
            si++
        } else {
            return false
        }
    }
    if(si < s.length) return false
    return true
}
console.log(regex('aab', 'c*a*b'))

/* 16 isPalindrome */
function isPalindrome(str) {
    // Calculate the middle index of the string
    const mid = Math.floor(str.length / 2)

    // Split the string into two halves
    const firstHalf = str.slice(0, mid)
    , secondHalf = str.slice(mid)
 
    // Compare the characters in each half
    for (i in mid) {
        if (firstHalf[i] !== secondHalf[secondHalf.length - 1 - i])
            return false
    }

    return true
}

/* 17 Search - Find shortest path BFS DFS */
function shortestPath(grid) {

    const START = [0, 0], END = [grid.length - 1, grid[0].length - 1]
    const queue = [START], path = [], visited = []

    while(queue.length) {
        const position = queue.pop() // [x, y] Depth-first search (stack LIFO)
        // const position = queue.unshift() // Breadth-first search (queue FIFO)

        if(visited.includes(position)) continue
        if(grid[position[0], position[1]] === END) return path

        [[position[0] + 1, position[1]], [position[0] - 1, position[1]], [position[0], position[1] + 1], [position[0], position[1] - 1]
        ].forEach(n => {
            if(n > -1 && n <= 36 && !visited.includes(n))
                queue.push(n)
        })
    }
}
console.log(shortestPath([
    ['START', '#', '#', '#', '#', '#', '#'],
    ['#', '.', '.', '.', '.', '.', '#'],
    ['#', '.', '#', '#', '#', '.', '#'],
    ['#', '.', '#', '.', '#', '.', '#'],
    ['#', '.', '#', '.', '#', '.', '#'],
    ['#', '.', '.', '.', '.', '.', 'END']
]))

/* 18 Convert Integer to Roman numeral */
function integerToRoman(n) {
    const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
    const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    const thousands = ["", "M", "MM", "MMM"]

    let solution = String(thousands[n / 1000])
    solution += hundreds[(n % 1000) / 100] 
    solution += tens[(n % 100) / 10]
    solution += ones[n % 10]
    return solution
}

/* 19 Convert Roman to Integer */
function romanToInteger(str) {
        const hash = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
        let ans = 0, cur = 0, prev = 0
        for (const j = str.length - 1; j >= 0; j--) {
            cur = hash[str[j]]
            cur < prev ? ans -= cur : ans += cur
            prev = cur
        }
        return ans
}

/* 20 Three-sum Return unique triplets that sum to 0 
Two pointers approach
*/
function threeSum(nums) {
    // Sort the array
    nums.sort()
    const result = []

    // Iterate
    for (let i = 0; i < nums.length - 2; i++) {

        if(i !== 0 && (nums[i] === nums[i - 1])) continue

        let j = i + 1, 
          k = nums.length - 1

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k]
            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]])
                while (nums[j] === nums[j + 1]) j++
                while (nums[k] === nums[k - 1]) k--
                j++
                k--
                continue
            }
            if(sum < 0) j++; else k--
        }
    }
    return result
}

/* 21 Edit distance
Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

Insert a character
Delete a character
Replace a character

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
*/
function minDistance(word1, word2) {
    const m = word1.length
    const n = word2.length

    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0) {
                dp[i][j] = j
            } else if (j === 0) {
                dp[i][j] = i
            } else if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1])
            }
        }
    }
    return dp[m][n]
}

/* 22 Stock profits 
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.
*/
function profit(prices) {
    let profit = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > prices[i - 1])
            profit += prices[i] - prices[i - 1]
    }
    return profit
}

/* 23 Find a number 
  Write a function that finds a two digit number, such that when the first digit is removed, becomes seven times smaller.
  Return -1 if no such number exists.
*/
function findNumber() {
    // Two digit numbers divisible by 7
    for(let i=14; i<100; i += 7) {
        const digit = i % 10
        if((i / 7) === digit)
            return i
    }
    return -1
}
console.log(findNumber())

/* 24 Magic square
A magic square is a grid of n by n size, each with a unique number, where each row, column, and diagonal
sum to the same total. Given a square of length (and width) n, find the value in the center square.
*/
function magicSquare(length) {
    let totalSum = 0, totalNumberOfSquares = length ^ 2
    // Get total sum of all squares
    for (let i = totalNumberOfSquares; i > 0; i--)
        totalSum += i
    // Get sum of a single row, column, or diagonal
    const rowTotal = totalSum / length
    // Get center value
    const centerVal = rowTotal / length
    
    return centerVal
}

/* 25 Multiplicative Magic Square
A Multiplicative Magic Square is a grid of length n times height n, where the product of each row and
each diagonal row is the same.  It differs from a Magic Square that adds values in the grid, in that the numbers in the
Multiplicative Magic square do not need to be consecutive.
Given an additive Magic Square, change it's values so that it becomes a valid Multiplicative Magic Square.
Hint: 2^6 = 2^3 * 2^2
*/

function multiplicativeMagicSquare(grid) {
    for(let row=0; row<grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            grid[row][col] = 2 ^ grid[row][col]
        }
    }
}
console.log(multiplicativeMagicSquare([
  [3, 8, 1],
  [2, 4, 6],
  [7, 0, 5]
]))

/* 26 Pay coins
Two people live in a country where there are two types of coins. 
One type coin is worth 5 units and the other is worth 7 units.
They each have an unlimited number of each type of coin.  Write a function that
returns a boolean true/false, if its possible for one person to pay the other n units,
using any number of exchange of coins between the two people.
*/
function canPay(n) {
    // Greatest common denominator of 5 and 7 is 1
    const ableToPay = (n % 1)
    return (ableToPay === 0)
}

/* 27
Find a number
Write a function to find the smallest 5-digit integer n, such that n^2 starts with 27182.
If one does not exist, return -1
*/
function findNumber() {

    let sqr_root = Math.sqrt(27182)
    while(sqr_root < 9999)
        sqr_root *= 10
    const rounded_up = Math.ceil(sqr_root)

    // Check value
    const val = rounded_up ^ 2
    if(val.toString().startsWith('27182'))
        return val
    else
        return -1
}

/* 28 Find index
You are given the following array [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]
Without iterating through the array, write a function that finds the index of the array that contains the first 1.
*/
function findIndex(arr) {
    let pos = Math.ceil(arr.length / 2)
    if(arr[pos] === 0 && arr[i+1] === 1)
        return pos
    else
        return findIndex(arr.splice(pos))
}
console.log(findIndex([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]))

/* 29 Decimal to binary
*/
function decToBinary(n) {
    const bstr = ''
    while(n > 0) {
        if (n % 2 == 1) {
            bstr = "1" + bstr
        } else {
            bstr = "0" + bstr
        }
        // divide number by 2
        n = Math.floor(n / 2);
    }
}

/* 30 Sequence Sum
Write a function that takes a start integer >= 0, and end Integer, and calculates the sum of the sequence of
integers in between.  For instance, given 5 and 10 = 5+6+7+8+9+10 = 45.
*/
function sequenceSum(start, end) {
    // S = n(first + last) / 2
    n = end - start + 1
    return n * (start + end) / 2
}

/* 31 Binary search */
const binary_search = (arr, v, start = 0, end = arr.length) => {
    // TODO !!!!!!!!
    var i = Math.floor(arr.length / 2)
    if(arr[i] === v) return i
    return arr[i] < v ? binary_search(arr, v, start, end)
}

const ret = binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 10)
console.log(ret)

generateParenthesis = (n) => {
    result = []
    generate = (left, right, str) => {
        if (left === n && right === n)
            result.push(str)
        if (left < n)
            generate(left + 1, right, str + '(')
        if (right < left)
            generate(left, right + 1, str + ')')
    }
    generate(0, 0, '')
    return result
}

console.log(generateParenthesis(6))

firstMissingPositive = function (nums) {
    // First, we need to understand that the first missing positive number is less than or equal to n (length of array) except for one case. The explanation is in the above.
    // We will position every positive integer in the array at its corresponding index
    // ex) 1 at index 0, 2 at index 1, 3 at index 2
    // In this way, the array can position all integers that are less than or equal to n at their corresponding indices without changing the size of given array.
    // Therefore, we can find the first missing positive integer by scanning through the array.

    for (i in nums) {
        idx = nums[i] - 1
        if (i == idx || nums[i] == nums[idx]) continue // already positioned or nums[i] is a duplicate
        if (idx >= 0 && idx <= nums.length - 1) {
            [nums[i], nums[idx]] = [nums[idx], nums[i]]
            i-- // check the swapped number
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (i + 1 == nums[i]) continue
        else return i + 1 // the next positive number which is i+1 doesn't exist in the array
    }

    return nums.length + 1 // the array is [1,2,...,n]
    // Time Complexity: O(n)
    // Space Complexity: O(1)
}
console.log(firstMissingPositive([3, 4, -1, 1]))  // 2

const longPressedName = (name, typed) => {
    let i = 0
    for (j in typed) {
        if (name[i] === typed[j]) i++
    }
    return i === name.length
}
console.log(longPressedName('alex', 'aaleex')) // true
console.log(longPressedName('saeed', 'ssaaedd')) // false

function ListNode(val) {
    this.val = val
    this.next = null
}

var reverseKGroup = function (head, k) {
    if (!head || k < 2) return head
    let count = 0, now = head, last = head, tmp = null

    while (now && count < k) {
        now = now.next
        count++
    }

    if (count === k) {
        now = reverseKGroup(now, k)
        while (count-- > 0) {
            tmp = last.next
            last.next = now
            now = last
            last = tmp
        }
        last = now
    }

    return last
}

const head = new ListNode(1)
const two = head.next = new ListNode(2)
const three = two.next = new ListNode(3)
const four = three.next = new ListNode(4)
const five = four.next = new ListNode(5)

const k = 3
console.log(JSON.stringify(reverseKGroup(head, k), null, 2))

const threeSumClosest = (nums, target) => {
    nums.sort((a, b) => a - b)
    let res = Infinity
    for (i in nums) {
        let left = i + 1, right = nums.length - 1
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (~~(target - sum) < ~~(target - res)) res = sum
            if (sum < target) left++
            else right--
        }
    }
    return res
}
console.log(threeSumClosest([-1, 2, 1, -4], 1))

const trappingRainWater = (height) => {
    let leftMax = 0, rightMax = 0, left = 0, right = height.length - 1, ans = 0
    while (left < right) {
        leftMax = Math.max(leftMax, height[left])
        rightMax = Math.max(rightMax, height[right])
        ans += (height[left] < height[right]) ? leftMax - height[left++] : rightMax - height[right--]
    }
    return ans
}

console.log(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))

const factorialize = (n) => {
    if (n < 0) return -1
    if (n === 0 || n === 1) return 1
    return n * factorialize(n - 1)
}
const uniquePaths = (m, n) => {
    return factorialize(m + n - 2) / (factorialize(m - 1) * factorialize(n - 1))
}
console.log(uniquePaths(3, 7))
