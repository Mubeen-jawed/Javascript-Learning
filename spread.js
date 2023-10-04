// const items = ["cookies", "choclates", "Wafers"]
// const items1 = ["cookies", "choclates", "Wafers"]

// let newItems = [...""]

// console.log(newItems);

// const user1 = {
//   username1: "Mubeen Jawed",
//   email1: "mueb33@hotmail.com",
//   password1: "mubeen"
// }

// const user2 = {
//   username: "mustafa dani",
//   email: "mustafad@hotmail.com",
//   password: "mustafa"
// }

// const newUser = {...user1, ...user2, key: "mmm"};
// console.log(newUser);

// console.log({...["mubeen", "ff"]});

console.log({..."abcdefghijklmnopqrstuvwxyz"});

// spread operator can be understood as REST OF THE ITEM

// Example:

function items(a, b, ...c) {
  console.log("a: ", a);
  console.log("b: ", b);
  console.log("c: ", c);
}

items("tea", "Biscuits", "Cake", "Sweets", "Snacks")
