const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");

tweetForm.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("submitted");

  //   console.dir(tweetForm);
  //   console.log(tweetForm.elements.username.value);
  //   console.log(tweetForm.elements.tweet.value);

  //   there is better another way, you are selecting the inputs value by names

  console.log(e.target.username.value);
  console.dir(e.target.tweet.value);

  let usernameInput = e.target.username.value;
  let tweetInput = e.target.tweet.value;

  if (!usernameInput || !tweetInput) {
    alert("khodaii ye chizi benevis");
    return;
  } else {
    alert("submitted");
  }

  addTweet(usernameInput, tweetInput);

  e.target.username.value = "";
  e.target.tweet.value = "";
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");

  bTag.append(username); // <b>benyamin</b>
  newTweet.append(bTag, `- ${tweet}`); // <li><b>benyamin</b> - hii to everyone</li>

  tweetsContainer.append(newTweet);
};
