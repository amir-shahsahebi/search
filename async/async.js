// const login = async (username, password) => {
//   if (!username || !password) {
//     throw "missing credential";
//   }

//   if (password === "jasem") {
//     return `welcome to www.jasemKala.com dear ${username}`;
//   }

//   throw "invalid password";
// };

// login("benyamin", "jasem")
//   .then((msg) => {
//     console.log("logged in!");
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log("Error!");
//     console.log(err);
//   });



  const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// this syntax won't wait for the previous functions
// async function rainbow() {
//   delayedColorChange("red", 1000);
//   delayedColorChange("orange", 1000);
// }

// rainbow();

//await will wait for a promise
async function rainbow2() {
    await delayedColorChange("red", 1000);
  delayedColorChange("orange", 1000);
}
rainbow2();

