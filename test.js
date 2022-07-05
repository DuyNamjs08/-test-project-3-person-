const arr = [1, 3, 3, 3, 4, 5, 5, 5, 8, 8];
const count = (arr, val) => {
 return arr.reduce((a, b) => (b === val ? a + 1 : a), 0);
};
const result = count(arr, 5);
console.log("số lần xuất hiện:", result);
