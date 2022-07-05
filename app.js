// bài 1 : tìm số lớn nhất và in ra số lần xuất hiện 
const arr = [1, 3, 3, 3, 4, 5, 5, 5, 8,8];
const arr1 = new Set(arr);
const arr2=[...arr1]
const test=(test)=>{
     const test1= test.reduce((a,b)=>{
             return (a>b) ? a : b 
     })
     const test2 = test.filter((item) => item != test1);
    
     return test2[test2.length - 1];
}
console.log(`số lớn nhì trong mảng là :${test(arr2)}`);
test(arr2)

const count = (arr, val) =>{

        return  arr.reduce((a, b) => (b === val ? a + 1 : a), 0);
        }
const result=count(arr, test(arr2));
console.log("số lần xuất hiện:", result);

// bài 2 tìm số lớn nhất trong "[4,5,6,23,34,55,55,5,6]"

const st="[4,5,6,23,34,55,55,5,6]";
const newAr=JSON.parse(st)
const numberMax = newAr.reduce((a,b)=>{
    return (a>b) ? a : b
});
console.log(`số lớn nhất trong chuỗi là :${numberMax}`);