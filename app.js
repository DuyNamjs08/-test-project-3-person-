// bài 1 : tìm số lớn nhất và in ra số lần xuất hiện 
const arr = [1, 3, 3, 3, 4, 5, 5, 5, 8,8];
const arr1 = new Set(arr);
const arr2=[...arr1]
const test=(test)=>{
     const test1= test.sort((a,b)=>{
             return b-a
     })
     return test1[1]
}
console.log(`số lớn nhất trong mảng là :${test(arr2)}`);
test(arr2)
const count = (arr, val) =>
arr.reduce((a, b) => (b === val ? a + 1 : a), 0);
const result=count(arr, test(arr2));
console.log("số lần xuất hiện:", result);

// bài 2 tìm số lớn nhất trong "[4,5,6,23,34,55,55,5,6]"

const st="[4,5,6,23,34,55,55,5,6]";
const newAr=JSON.parse(st)
const numberMax = newAr.sort((a,b)=>{
    return a-b
});
console.log(`số lớn nhất trong chuỗi là :${numberMax[numberMax.length -1]}`);