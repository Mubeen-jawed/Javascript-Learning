const person = {
  name: "Mubeen",
  "age": 17.8,
  "persons killed": ["dani", "uzair", "anas"]
}

let email = "email"
person[email] = "mubeenjawed3@gmail.com" // add key/value pair to object

console.log(person); // returning with email key and value

for (key in (person)) { 
  console.log(key);
} //return index of array and key of object

for (key of Object.keys(person)) { 
  console.log(key);
} //return value of array and error on object

// To itterate object on FOR OF loop, convert it to array using Object.keys/Object.values

