function add_numbers(num1, num2) {
  return num1 + num2;
  // Normal function definition with function name;
}
let result = add_numbers(3, 4);
console.log(result);
let addTwo = function(num){
  return num +2
  // Anonymous function without name the value is stored in a varibale;
}
console.log(addTwo(5))

let addThree = (num) => num +3;
    // Arrow function can be used with anonymous function with a single paramter . return is optional
console.log(addThree(5)); 