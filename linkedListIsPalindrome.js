// CREATING NODE AND LINKED LIST CLASSES
class Node {
  constructor(val){
      this.val = val;
      this.next = null;
  }
}

class LinkedList {
  constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
  push(val) {
      let newNode = new Node(val);
      if (!this.head) {
          this.head = newNode;
          this.tail = this.head;
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.length++;
      return this;
  }
}

// TURN STRING INTO LINKED LIST
var list = new LinkedList();
let str = 'reallycoolloocyllaerr';
for (let i = 0; i < str.length; i++) {
  list.push(str.charAt(i));
};

// FUNCTION TO CHECK IF LINKED LIST IS PALINDROME
function isPalindrome(list) {
  let current = list.head;
  let map = new Map();
  let counter = -1;

  // ADD LETTERS AND VALUES ACCORDING TO COUNTER TO MAP
  while (current) {
      counter++;
      if (map.has(current.val)) {
          map.set(current.val, map.get(current.val) + counter);
      } else {
          map.set(current.val, counter);
      }
      current = current.next;
  };
  
  // EDGE CASES FOR 1 OR 2 OR 3 CHARS
  if (map.size === 1) return true;
  if (list.length === 2 && map.size === 2) return false;
  if (list.length === 3 && map.size === 3) return false;

  // ITERATE THROUGH MAP VALUES TO CHECK IF VALUE IS FACTOR OF COUNTER
  let iterator = map.values();
  let value = iterator.next().value;

  while (value >= 0) {
    if (!((counter / (value % counter) === 2 || value / counter === 0.5 ) || value % counter === 0)) return false;
    value = iterator.next().value;
  }
  return true;
}

console.log(isPalindrome(list));