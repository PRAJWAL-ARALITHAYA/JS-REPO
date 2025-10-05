const Data = {
  name: "Prajwal",
  mail: "me@gmail.com",
  dob: "12 - 12 - 12",
  print: function () {
    console.log(`hello My name is ${this.name} and my email is ${this.mail}`);
  },
};
// console.log(Data.dob);
// console.log(Data.print());
function User(name, age, IsLoggedIn) {
  this.name = name;
  this.age = age;
  this.IsLoggedIn = IsLoggedIn;
  return this;
}
function DoubtThis() {
  const UserOne = new User("Prajwal", 19, true);
  const UserTwo = new User("krishna", 20, false);
  console.log(UserOne);
  console.log(UserTwo);
}
DoubtThis();
console.log(new);

