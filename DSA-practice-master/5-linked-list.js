class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    getSize() {
        return this.size;
    }
    printList() {
        let result = [];
        let current = this.head;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return console.log(result.join(' -> '));

    }
    addLast(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++
    }
    addFirst(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
    removeLast() {
        if (!this.head) return undefined;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let current = this.head;
            let prev;
            while (current.next) {
                prev = current;
                current = current.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--
    }
    removeFirst() {
        if (!this.head) return undefined;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.size--;
    }
    addAt(index, data) {
        const newNode = new Node(data);
        if (index < 0 && index > this.getSize) throw new Error('Invalid Index !!');
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }
    removeAt(index) {
        if (index < 0 && index > this.getSize) throw new Error('Invalid Index !!');
        if (index === 0) {
            this.head = this.head.next;
            return;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next
            }
            current.next = current.next.next;
        }
        this.size--;
    }
    reverse(){
        let prev = null,
            current = this.head;
        while(current){
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.tail = this.head;
        this.head = prev;
    }
    isCyclic(){
        let slow = this.head;
        let fast = this.head;

        while(fast!==null && fast.next!==null){
            slow = slow.next;
            fast = fast.next.next;
            if(slow === fast) return true;
        }
        return false;
    }
    midOf(){
        let slow = this.head;
        let fast = this.head;

        while(fast!==null && fast.next!==null){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.data;
    }
}

const neoList = new LinkedList();

function arrayToLinkedList(arr){
    const list = new LinkedList()
    for(let data of arr){
        push(list,data);
    }
}

function linkedListToArray(list){
    let arr = [];
    let current = list.head;

    while(current.next){
        arr.push(current.data)
        current = current.next;
    }
    return arr;
}


neoList.addLast(1)
neoList.printList()

neoList.addLast(2)
neoList.printList()

neoList.addLast(3)
neoList.printList()

neoList.addFirst(0)
neoList.printList()

neoList.addFirst(-1)
neoList.printList()

neoList.addFirst(-2)
neoList.printList()

// neoList.reverse();//---------------- Reverse 
// neoList.printList()

neoList.removeLast()
neoList.printList()

neoList.removeFirst()
neoList.printList()

neoList.addAt(2, 5);
neoList.printList()

neoList.removeAt(3);
neoList.printList();



console.log(neoList.midOf());
console.log(neoList.isCyclic());    


console.log('size = ' + neoList.getSize());
console.log(neoList);
