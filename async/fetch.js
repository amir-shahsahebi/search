// base useful form of using fetch
const fetchUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await res.json();
    console.log(data);
  } catch (jasemError) {
    console.log("something went wrong", jasemError);
  }
};

fetchUsers();
