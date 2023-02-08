class StackQueue{
    constructor(array){
        this.array = [];
        if(array) this.array = array;
    }

    getBuffer(){
        return this.array.slice();
    }

    isEmpty(){
        return this.array.length == 0;
    }

}

class Stack extends StackQueue{
    peek(){
        return this.array[this.array.length-1];
    }

    push(item){
        this.array.push(item);
    }

    pop(){
        return this.array.pop();
    }
}

function stackAccessNthTopNode(stack, n) {
    let bufferArray = stack.getBuffer();
    if(n <= 0) throw 'error';
    let buffer = new Stack(bufferArray)
    while (--n != 0) buffer.pop();
    return buffer.pop();
}

function stackSearch(stack, element) {
    let bufferArray = stack.getBuffer();
    let buffer = new Stack(bufferArray);
    while(!buffer.isEmpty()){
        if(buffer.pop() == element) return true;
    }
    return false;
}
let stack1 = new Stack();
stack1.push(5);
stack1.push(17)
stack1.push(10);
console.log(stack1.getBuffer())

class Queue extends StackQueue{
    peek(){
        return this.array[0];
    }

    enqueue(item){
        this.array.push(item);
    }

    dequeue(){
        return this.array.shift();
    }
}

function queueAccessNthTopNode(queue, n) {
    if (n <= 0) throw 'error';
    buffer = queue.getBuffer();
    bufferQueue = new Queue(buffer);
    while (--n != 0) {
        bufferQueue.dequeue()
    }
    return bufferQueue.dequeue();
}

function searchQueue(queue, element) {
    buffer = queue.getBuffer();
    bufferQueue = new Queue(buffer);
    while (!bufferQueue.isEmpty()) {
        if (bufferQueue.dequeue() == element) return true;
    }
    return false;
}