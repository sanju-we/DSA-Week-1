// var merge = function (nums1, m, nums2, n) {
//     let result = []
//     let left = nums1.splice(0,m)
//     let right = nums2.splice(0,n)
//     result.push(...left,...right)
//     return result.sort((a,b)=>a-b)
// };

var merge = function (nums1, m, nums2, n) {
    const result = []
    for(let i=0;i<m;i++){
        result.push(nums1[i])
    }
    for(let j=0;j<n;j++){
        result.push(nums2[j])
    }
    return result.sort()
};

// var merge = function (nums1, m, nums2, n) {
//   let result = []
//   let left = nums1.slice(0,m)
//   let right = nums2.slice(0,n)
//   result.push(...left,...right)
//   return result.sort()
// };

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))