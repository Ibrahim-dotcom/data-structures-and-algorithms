class SinglyLinkedListsNode{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class SinglyLinkedLists{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size == 0;
    }

    insert(value){
        if(this.head === null) this.head = new SinglyLinkedListsNode(value);
        else{
            let temp = this.head;
            this.head = new SinglyLinkedListsNode(value);
            this.head.next = temp;
        }
        this.size++;
    }

    remove(value){
        let currentHead = this.head;
        if(currentHead.data === value){
            this.head = currentHead.next;
            this.size--;
        }
        else{
            let prev = currentHead;
            while (currentHead.next) {
                if (currentHead.data == value) {
                    prev.next = currentHead.next
                    prev = currentHead;
                    currentHead = currentHead.next;
                    break;
                }
                prev = currentHead;
                currentHead = currentHead.next;
            }
            if (currentHead.data == value) {
                prev.next = null;
            }
            this.size--;
        }

    }

    deleteAtHead(){
        if (this.head == null) return;
            let toReturn = this.head.data;
            this.head = this.head.next;
            this.size--;
            return toReturn;
    }

    find(value){
        let currentNode = this.head;
        while (currentNode.next) {
            console.log(currentNode.next)
            if(currentNode.data == value) return true;
            currentNode = currentNode.next;
        }
        return false;
    }
}

class DoublyLinkedListNode{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size == 0;
    }

    insertAtHead(value){
        if(this.head == null){
            this.head = new DoublyLinkedListNode(value);
            this.tail = this.head;
        }
        else{
            let temp = this.head;
            this.head = new DoublyLinkedListNode(value);
            this.head.next = temp;
            temp.prev = this.head;
        }
        this.size++;
    }

    insertAtTail(value){
        if (this.tail == null) {
            this.tail = new DoublyLinkedListNode(value);
            this.head = this.tail;
        } else {
            let temp = new DoublyLinkedListNode(value);
            temp.prev = this.tail;
            this.tail.next = temp;
            this.tail = temp;
        }
        this.size++;
    }

    deleteAtHead(){
        let toReturn = null;
        if (this.head == null) return toReturn;
        toReturn = this.head.data;
        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
            
        }
        else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
        return toReturn;
    }
    deleteAtTail(){
        let toReturn = null;
        if (this.tail == null) return toReturn;
        toReturn = this.tail.data;
        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
            
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
        return toReturn;
    }

    findStartingHead(value){
        let currentNode = this.head;
        while(currentNode.data != value){
            if(currentNode == this.tail) return false;
            currentNode = currentNode.next;
        }
        return true;
    }

    findStartingTail(value){
        let currentNode = this.tail;
        while(currentNode.data != value){
            if(currentNode == this.head) return false;
            currentNode = currentNode.prev;
        }
        return true;
    }
}

const dll = new DoublyLinkedList();
dll.insertAtHead(10)
//dll.insertAtHead(16)
//dll.insertAtHead(40)
//dll.deleteAtHead();
const sll = new SinglyLinkedLists();
sll.insert(5)
sll.insert(10)
sll.insert(2)
sll.insert(12)
//sll.remove(2)
sll.deleteAtHead()
console.log(dll.findStartingHead2(10), dll)


/*
                9
            4              10
        null      5

*/

root.left = fn(4,3) = fn(3, 3)