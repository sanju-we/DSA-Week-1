//======================================================== Insertion Sort ================================================================
function insertionSort(arr){
    for(let i=0;i<arr.length;i++){
        let key = arr[i];
        let j = i-1;
        while(j>=0 && arr[j] > key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}
console.log(insertionSort([64, 34, 25, 12, 22, 11, 12, 90]))
