

//========================================================= selection sort ==============================================================================

function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min !== i){
            [arr[i],arr[min]] = [arr[min],arr[i]];
        }
    }
    return arr;
}

console.log(selectionSort([10,23,45,11,9,20]))