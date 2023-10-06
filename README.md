# Code problems
````
// Two Pointers
for(i=0; i<nums.length/2; i++)
  console.log(nums[i], nums[nums.length-i-1])

// Binary Search
(arr, v, start = 0, end = arr.length - 1) => {
    while (end - start > 1) {
        if (arr[start] == v) return start
        if (arr[end] == v) return end
        v < arr[start] ? start += ~~(end/2) : end -= ~~((start+end)/2)
    }
    return -1
}

// Reverse linked list
let prev = null;
while(head) {
  let saveNext = head.next
  head.next = prev
  prev = head     
  head = saveNext   
}
return prev
````
