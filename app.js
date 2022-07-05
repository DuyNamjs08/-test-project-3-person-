

// bài 1 : tìm số lớn nhất và in ra số lần xuất hiện 
const arr = [1, 3, 3, 3, 4, 5, 5, 5, 8,8 , 16 , 7 ,15];
const arr1 = new Set(arr);
const arr2=[...arr1]
function mymax(a) {
  var m = -Infinity
  for (let i=0; i<a.length; ++i) {
    if (a[i] > m) {
      m = a[i];
    }   
  }
 const cutArr=a.filter(val=>val !=m)
  return cutArr.reduce((a,b)=>(a>b ? a : b))
}
const max=mymax(arr2);
console.log(`giá trị lớn thứ 2 của mảng là :${max}`);
const count = (arr, val) =>{
        return  arr.reduce((a, b) => (b === val ? a + 1 : a), 0);
        }
const result=count(arr, max);
console.log("số lần xuất hiện:", result);

// bài 2 tìm số lớn nhất trong "[4,5,6,23,34,55,55,5,6]"

const st="[4,5,6,23,34,55,55,5,6]";
const newAr=JSON.parse(st)
 var t = -Infinity;
 for (let i = 0; i < newAr.length; ++i) {
   if (newAr[i] > t) {
     t = newAr[i];
   }
 }
 console.log(`giá trị lớn nhất trong chuỗi string là : ${t}`);