const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  console.log(delay);

  setTimeout(() => {
    if (delay < 3000) {
      success(`here is your fake data from ${url}`);
    } else {
      failure("connection timeout :( ");
    }
  }, delay);
};

/*
const success = function (response) {
    console.log("it worked");
    console.log(response);
}
success('here is your fake data from ')
*/

// fakeRequestCallback(
//   "jasem.com/page1",
//   function success(response) {
//     console.log("it worked page 1");
//     console.log(response);

//     fakeRequestCallback(
//       "jasem.com/page2",
//       function success(response) {
//         console.log("it worked page 2");
//         console.log(response);

//         fakeRequestCallback(
//           "jasem.com/page3",
//           function success(response) {
//             console.log("it worked page 3");
//             console.log(response);
//           },
//           function failure(error) {
//             console.log("error in page 3");
//             console.log(error);
//           }
//         );
//       },
//       function failure(error) {
//         console.log("error in page 2");
//         console.log(error);
//       }
//     );
//   },
//   function failure(error) {
//     console.log("error in page 1");
//     console.log(error);
//   }
// );

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    console.log(delay);

    setTimeout(() => {
      if (delay < 3000) {
        resolve(`here is your fake data from ${url}`);
      } else {
        reject("connection timeout :( ");
      }
    }, delay);
  });
};

// then
// catch
// fakeRequestPromise("jasem.com/page1")
//   .then(() => {
//     console.log("it worked page 1");

//     fakeRequestPromise("jasem.com/page2")
//       .then(() => {
//         console.log("it worked page 2");

//         fakeRequestPromise("jasem.com/page3")
//           .then(() => {
//             console.log("it worked page 3");
//           })
//           .catch(() => {
//             console.log("error page 3 ");
//           });

//       })
//       .catch(() => {
//         console.log("error page 2");
//       });
//   })
//   .catch(() => {
//     console.log("error page 1");
//   });

fakeRequestPromise("jasem.com/page1")
  .then((data) => {
    console.log("it worked page 1");
    console.log(data);
    return fakeRequestPromise("jasem.com/page2");
  })
  .then((data) => {
    console.log("it worked page 2");
    console.log(data);
    return fakeRequestPromise("jasem.com/page3");
  })
  .then((data) => {
    console.log(data);
    console.log("it worked page 3");
  })
  .catch((error) => {
    console.error(error);
    console.log("error");
  });

// const getData = async () => {
//   try {
//     const data = await axios.get("jasem.com/page1");
//   } catch (error) {
//     console.log(error);
//   }
// };
