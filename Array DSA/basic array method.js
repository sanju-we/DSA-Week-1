const arr = [1, 2, 3, "sanju"];
arr.push(4);
arr.unshift(0);
arr.pop();
arr.shift();

for (const item of arr) {
  console.log(item);
}

//--------------------------time complexity---------------------------
// insert / remove from end = 0(1)
// insert / remove from beggiining = 0(n)
// Access = 0(1)
// Search = 0(n)
// Push/pop = 0(1)
// Shift/unshift/concat/slice/splice = 0(n)
// ForEach/map/filter/reduce = 0(n)

// ---------------------------array compixity---------------
// traverse = array lle ella elementilm keri irangunnath
// set = replacing new elem
// insert = bestie

//--------------------------space complexity in array init---------------------------
// O(n)S
// O(n)T

//--------------------------complexity in array set---------------------------
// arr[3] = 100 (replacing the 3rd possion)
// complixity = O(1)ST
// if for loop applied space: O(1)S,time:O(n)T

//--------------------------complexity in array get---------------------------
// b = arr[4]
// complixity = O(1)ST

//--------------------------complexity in array traverse---------------------------
// space : O(1)S
// time : O(n)T

//--------------------------complexity in array insert---------------------------
// space : O(1)S
// time : O(n)T

//--------------------------complexity in array insert---------------------------
// space : O(1)S
// time : O(1)T

//--------------------------complexity in dynamic array insert---------------------------
// in best case
// space : O(1)S
// time : O(1)T

// in worst case
// space : O(n)S
// time : O(n)T