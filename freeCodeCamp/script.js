const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
    
  }
  function countOnline(usersObj) {
  let n = 0
  for (user in usersObj) {
    console.log(user);
  }
  
    // for (let user in usersObj){
    // if (user.online) n++
    // }
  }
  
  console.log(countOnline(users));
  console.log(users.Alan.online);