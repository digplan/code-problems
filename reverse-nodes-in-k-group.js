function ListNode(val) {
    this.val = val;
    this.next = null;
}

var reverseKGroup = function (head, k) {
    if (!head || k < 2) return head
    let count = 0, now = head, last = head, tmp = null
 
    while (now && count < k) {
        now = now.next
        count++
    }

    if (count === k) {
        now = reverseKGroup(now, k);
        while (count-- > 0) {
            tmp = last.next
            last.next = now
            now = last
            last = tmp
        }
        last = now
    }

    return last;
}

const head = new ListNode(1)
const two = head.next = new ListNode(2)
const three = two.next = new ListNode(3)
const four = three.next = new ListNode(4)
const five = four.next = new ListNode(5)

const k = 3
console.log(JSON.stringify(reverseKGroup(head, k), null, 2))