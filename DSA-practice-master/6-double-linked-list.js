// ====================================================== Double Linked List =============================================================
class Node {
    constructor(data){
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    getSize(){
        return this.size;
    }

    printList(){
        let res=[];
        let current = this.head;
        while(current){
            res.push(current.data)
            current = current.next;
        }
        console.log(res.join(' -> '));
    }

    addFirst(data){
        const newNode = new Node(data);
        if(this.head === this.tail) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return;
        }
        newNode.next = this.head;
        if(this.head) this.head.prev = newNode;
        this.head = newNode;
        this.size++;
    }

    addLast(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    
    removeFirst(){
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
    }

    removeLast(){
        if(!this.head) return undefined;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }else {
            let current = this.head;
            let prev;
            while(current.next){
                prev = current;
                current = current.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--;
    }

    addAt(index,data){
        if(index < 0 && index > this.getSize) throw new Error('Invalid Index !!');
        const newNode = new Node(data);
        if(index === 0){
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }else{
            let current = this.head;
            for(let i=0;i<index-1;i++){
                current = current.next;
            }
            newNode.prev = current;
            newNode.next = current.next;
            current.next = newNode;
        }
        this.size++;
    }

    removeAt(index){
        if(index < 0 && index > this.getSize) throw new Error('Invalid Index !!');
        if(index === 0){
            this.head = this.head.next;
            this.head.prev = null;
        }else{
            let current = this.head;
            for(let i=0;i<index-1;i++){
                current = current.next;
            }
            current.next = current.next.next;
            current.next.prev = current;
        }
        this.size--;
    }
}

const newDLL = new DoubleLinkedList()
newDLL.printList();

newDLL.addFirst(10);
newDLL.printList();

newDLL.addLast(20);
newDLL.printList();

newDLL.addLast(30);
newDLL.printList();

newDLL.addLast(40);
newDLL.printList();

newDLL.addFirst(0);
newDLL.printList();

newDLL.addAt(3,25);
newDLL.printList();

newDLL.removeAt(2);
newDLL.printList();

newDLL.removeFirst();
newDLL.printList();

newDLL.removeLast();
newDLL.printList();

newDLL.removeLast();
newDLL.printList();

newDLL.removeLast();
newDLL.printList();

newDLL.removeLast();
newDLL.printList();








console.log(newDLL);
console.log('size : '+ newDLL.getSize());
