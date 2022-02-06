let lis = document.querySelectorAll("li");
// for (let li of lis) {
//   li.addEventListener("click", () => {
//     li.remove();
//   });
// }

const tweetsContainer = document.querySelector("#tweets");
const tweetForm = document.querySelector("#tweetForm");

tweetForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;

  addTweet(usernameInput.value, tweetInput.value);

  usernameInput.value = "";
  tweetInput.value = "";
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`- ${tweet}`);
  tweetsContainer.append(newTweet);
};

tweetsContainer.addEventListener("click", (e) => {
    console.dir(e.target);
    console.log(e.target.nodeName);
  e.target.nodeName === "LI" && e.target.remove();

  //   e.target.matches('li') && e.target.remove()
});

window.addEventListener("click", (e)=> {
    console.dir(e.target.nodeName)
})



// another way for deleting any items of list
window.addEventListener("click",(e)=> {
  // when we want to update a list for exp, we can add event listener and inside it we need to assign a variable that it update automaticaly when listener active
  let lis = document.querySelectorAll("li");
  // lis is the lists of li that update
  console.log(lis)
    for (let li of lis) {
      // because of lis is an array, we cant delet it, thus we use a loop for iterate on it to change 
      li.addEventListener("click", () => {
        li.remove();
      });
    }
})