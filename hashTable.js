class HashTable{
    constructor(size){
        this.size = size;
        this.keys = this.initArray(size)
        this.values = this.initArray(size)
        this.limit = 0;
    }

    initArray(size){
        const array = new Array(size).fill(null);
        return array;
    }

    hash(key){
        if (!Number.isInteger(key)) {
            throw 'must be int';
        }
        return this.secondHash(key % this.size);
    }

    secondHash(hashedKey){
        let R = this.size -2;
        return R - (hashedKey % R);
    }

    put(key, value){
        if (this.limit > this.size) {
            throw 'hash table is full!';
        }
        let hashedIndex = this.hash(key)//, squareIndex = 1;
        while (this.keys[hashedIndex] != null) {
            hashedIndex++; // this for linear probing and double hashing(with the second hashing function).
            // hashedIndex += Math.pow(squareIndex, 2); this line for quadratic probing

            hashedIndex %= this.size;
            //squareIndex++;

        
        }
        this.keys[hashedIndex] = key;
        this.values[hashedIndex] = value;
        this.limit++;
    }

    get(key){
        let hashedIndex = this.hash(key), squareIndex = 1;
        while (this.keys[hashedIndex] != key) {
            hashedIndex++; // this for linear probing and double hashing(with the second hashing function).
           // hashedIndex += Math.pow(squareIndex, 2); this line for quadratic probing
            hashedIndex %= this.size; 
        }
        return this.values[hashedIndex]
    }
}

let exampleTable = new HashTable(13);
exampleTable.put(7, 'hi');
exampleTable.put(20, 'hello');
exampleTable.put(33, 'sunny');
exampleTable.put(46, 'weather');
exampleTable.put(59, 'wow');
exampleTable.put(72, 'forty');
exampleTable.put(85, 'happy');
exampleTable.put(98, 'sad')

console.log(exampleTable.get(98))