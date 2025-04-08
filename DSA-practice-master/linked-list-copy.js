
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{ 
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    pop(){
        if(!this.head) return undefined;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }else{
            let current = this.head;
            let prev;
            while(current.next!==null){
                prev = current;
                current = current.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--
    }

    unshift(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{ 
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    shift(){
        if(!this.head) return undefined;
        let removedNode = this.head;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;
        }
        this.size--;
        return removedNode;
    }

    isCyclic(){
        let slow = this.head;
        let fast = this.head;

        while(fast!==null && fast.next!==null){
            slow = slow.next;
            fast = fast.next.next;
            if(slow === fast) return true
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

    getSize(){
        return this.size;
    }

    printlist(){
        let current = this.head;
        let result = [];
        while(current!==null){
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(' -> '))
    }

    reverse(){
        let prev = null;
        let current = this.head;

        while(current !== null){
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.tail = this.head;
        this.head = prev;
    }

    addAt(index,data){
        let newNode = new Node(data);
        if(index < 0 && index > this.getSize) throw new Error('Invalid Index !!');
        if(index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        }

        let current = this.head;
        for (let i = 0; i < index-1; i++){
            current = current.next;
        }

        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }

    removeAt(index){
        if(index < 0 && index > this.getSize) throw new Error('Invalid Index !!');
        if(!this.head){
            this.head = null;
            this.tail = null;
            return;
        }
        if(index === 0 ){
            this.head = this.head.next;
            return
        }
        let current = this.head;
        for (let i = 0; i < index-1; i++) {
            current = current.next;
        }
        current.next = current.next.next;
    }
    
}

const newList = new LinkedList();
newList.push(10)
newList.push(0)
newList.push(9)
newList.push(1)
// newList.addAt(2,20)
// newList.removeAt(2)
// newList.pop()
// newList.unshift(12)
// newList.shift()
// console.log(newList.isCyclic());
// console.log(newList.midOf());
// newList.printlist()
// newList.reverse();
newList.printlist() 





// console.log(newList);
// console.log(newList.getSize());
