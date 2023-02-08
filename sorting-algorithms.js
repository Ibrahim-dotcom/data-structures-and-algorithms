function swap(arr, first, second){
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j <= i; j++){
            if(arr[j] > arr[i])swap(arr, i, j);
        }
    }
    return arr;
}

function selectionSort(arr){
    let min;
    for(let i = 0; i < arr.length; i++){
        min = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[min] > arr[j]) min = j;
        }
        if(min != i) swap(arr, min, i);
    }
    return arr;
}

function insertionSort(arr){
    let i, j, value;
    for(i = 0; i < arr.length; i++){
        value = arr[i];
        for (j = i - 1; j > -1 && arr[j] > value; j--) {
            arr[j + 1] = arr[j];
            
        }
        arr[j + 1] = value;
    }
    return arr;
}


function quickSort(arr){
    return quickSortHelper(arr, 0, arr.length-1);
}

function quickSortHelper(arr, left, right){
    let index;
    if(arr.length > 1){
        index = partition(arr, left, right);
        if(left < index - 1){
            quickSortHelper(arr, left, index-1)
        }
        if(index < right){
            quickSortHelper(arr, index, right)
        }
    }

    return arr;
}

function partition(arr, left, right){
    let pivot = arr[Math.floor((left + right) / 2)];
    while(left <= right){
        while(arr[left] < pivot){
            left++;
        }
        while (pivot < arr[right]) {
            right--;
        }
        if (left <= right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return left;
}

function quickSelect(arr, low=0, high=arr.length-1, k=Math.floor((low + high) / 2)){
    let p = partition(arr,low, high);
    if(p == k-1) return arr[p];
    else if(p > k - 1) return quickSelect(arr, low, p-1, k);
    else return quickSelect(arr, p+1, high, k);
}

function merge(arrA, arrB) {
    let elemA = 0, elemB = 0, sortedArr = [];
    while(elemA < arrA.length && elemB < arrB.length ){
        if (arrA[elemA] <= arrB[elemB]) {
            sortedArr.push(arrA[elemA++]);
        }
        else{
            sortedArr.push(arrB[elemB++]);
        }
        
    }
    return sortedArr.concat(arrA.slice(elemA)).concat(arrB.slice(elemB));
}

function mergeSort(array) {
     let mid = Math.floor(array.length/2);
     let leftArray = array.slice(0,mid);
     let rightArray = array.slice(mid);
     if(array.length < 2) return array;
     return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function countSort(array) {
    let hash = {};
    let count = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (hash[element]) hash[element]++;
        else hash[element]  = 1;
    }

    for (const key in hash) {
        for (let i = 0; i < hash[key]; i++) {
            count.push(parseInt(key));
        }
    }
    return count

}
