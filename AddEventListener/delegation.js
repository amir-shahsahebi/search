let lis = document.querySelectorAll("li");
for (let li of lis) {
  li.addEventListener("click", () => {
    li.remove();
  });
}

const tweetsContainer = document.querySelector("#tweets");
const tweetForm = document.querySelector("#tweetForm");

// tweetForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const usernameInput = tweetForm.elements.username;
//   const tweetInput = tweetForm.elements.tweet;

//   addTweet(usernameInput.value, tweetInput.value);

//   usernameInput.value = "";
//   tweetInput.value = "";
// });

// const addTweet = (username, tweet) => {
//   const newTweet = document.createElement("li");
//   const bTag = document.createElement("b");
//   bTag.append(username);
//   newTweet.append(bTag);
//   newTweet.append(`- ${tweet}`);
//   tweetsContainer.append(newTweet);
// };

// tweetsContainer.addEventListener("click", (e) => {
//   e.target.nodeName === "LI" && e.target.remove();

//   //   e.target.matches('li') && e.target.remove()
// });
