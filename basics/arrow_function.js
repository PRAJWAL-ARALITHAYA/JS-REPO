// This refers to current context if written inside an object this refers to object and when written outside globally it refers to {} but when written in console engine it refers to window


// There are two methods of writing the arrow function the 1st one we use curly packets and we should write the Return keyword and in the other one it is implicit return which does not require the return keyword if we doesnt use a curly brackets.

// first method
 let varibale1 = (num1,num2) => {
    return num1 + num2
 }
 console.log(varibale1(3,4));

//  second method
 let varibale2 = (num1,num2) => (num1 + num2)
 console.log(varibale2(4,5));
 //method to return an object in arrow function

 let obj_function = () => ({name:'prajwal'})
 console.log(obj_function());