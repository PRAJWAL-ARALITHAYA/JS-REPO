const num= new Number(87.49);  // this is an object
console.log(typeof(num))
console.log(num.toFixed(3));
const nums=10  // this is a primitive number
console.log(num.toLocaleString('en-IN')) // displays the number in indian order type will be string
console.log(typeof(num.toLocaleString('en-IN')))
console.log(typeof(num.toString()))
console.log(num.toPrecision(2));
console.log(nums)