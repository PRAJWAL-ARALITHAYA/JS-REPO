const Usn = Symbol("1si");
const Myobject = {
    name:"Prajwal",
    age:19,
    [Usn]:"",
    loc:"Tumkur",
    Clg:"Sit",
    Attended:true,
    Days:["Mon","Tue"]
}
console.log(Myobject.name);
console.log(Myobject["Clg"]);
console.log(Myobject[Usn]);
console.log(Myobject.age);
//Object.freeze(Myobject)
Myobject.age = 20;
console.log(Myobject);
Myobject.hello = function(){
    console.log("Hello World");
}
Myobject.Greeting = function(x){
    console.log(`hello ${this.name} you are ${x} years old `);
}
Myobject.Greeting("25");