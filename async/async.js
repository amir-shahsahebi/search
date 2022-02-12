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


//   const delayedColorChange = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };

// this syntax won't wait for the previous functions
// async function rainbow() {
//   delayedColorChange("red", 1000);
//   delayedColorChange("orange", 1000);
// }

// rainbow();

//await will wait for a promise
// async function rainbow2() {
//     await delayedColorChange("red", 1000);
//   delayedColorChange("orange", 1000);
// }
// rainbow2();

const fakeRequest = (url) => {
  return new Promise((resolved, reject) => {
    const delay = Math.random() * 4500 + 500;
    console.log(delay)
    setTimeout(() => {
      if (delay > 3000) {
        reject("connection timeout");
      } else {
        resolved(`here is your fake data: ${url}`);
      }
    });
  });
};


async function makeTwoRequests() {
  try {
    let data1 = await fakeRequest("/page1");
    console.log(data1);
    let data2 = await fakeRequest("/page2");
    console.log(data2);
  } catch (err) {
    console.log("caught an error!");
    console.log("error is : ", err);
  }
}

makeTwoRequests();