const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "prajwal", email: "me@gmail.com" });
    } else {
      reject("ERROR:Something went wrong");
    }
  }, 1000);
});
promiseOne
  .then((user) => {
    console.log(user);
    console.log("promise succesful");
  })
  .catch(function (error) {
    console.log(error);
    console.log("PromiseOne");
  })
  .finally(function () {
    console.log("Completed whatever happend");
  });

async function Github() {
  try {
    const response = await fetch("https://api.github.com/users/prajwal-aralithaya");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    console.log("git");
  }
}
Github();

fetch("https://api.github.com/users/prajwal-aralithaya")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
    console.log("Fetch");
  });
