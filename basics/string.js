let name= new String("       prajwal krishna aralithaya      ")
console.log(name.trim().split(' '))
// like python trim and split is used in js
const age=19
const college=new String("SIT")
let sentence=`my name is ${name.trim()} and i am ${age} year old currently studying in ${college}`;
const new_name=name.replaceAll('a','u');
console.log(new_name);
// replace() just replace one instance at the same time replaceAll() replace all instances!!
let word=new String("harry")
console.log(`the word ${word} ${sentence.includes(word)?"is":"is not"} in the sentence`)