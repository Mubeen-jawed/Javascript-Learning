// let numbers = [2, 5, 8, 3, 9]

// function cal(number, index) {
//   console.log(`Number is ${number}, Index is ${index}`);
// }

// // for (let i=0; i < numbers.length; i++){
// //   cal(numbers[i], i)
// // }

// numbers.forEach((number, index) => {
//   console.log(number, index);
// })

// let obj = [
//   {
//     firstName: "Mubeen",
//     age: 20
//   },
//   {
//     firstName: "Asif",
//     age: 23
//   },
//   {
//     firstName: "Ali",
//     age: 18
//   },
// ]

// obj.forEach(function(user) {
//   console.log(user)
// })

// let numbers = [2, 5, 8, 3, 9]

// let sum = numbers.reduce((accumulator, number) => {
//   // console.log(`accumulator is ${accumulator}`);
//   // console.log(`number is ${number}`);
//   return accumulator + number
// })  

// console.log(sum);

// let userCart = [
//   {userID: 1, productName: "Laptop", price: 70000},
//   {userID: 2, productName: "Headphone", price: 8000},
//   {userID: 3, productName: "Mouse", price: 2500},
// ]

// let priceSum = userCart.reduce((accumulator, newValue) => {
//   return accumulator + newValue.price
// }, 0)

// console.log(priceSum);

// let numbers = [2, 5, 8, 3, 9, 100, 321]

// numbers.sort((a,z) => {
//   return z-a
// })

// console.log(numbers);

// let userCart = [
//   {userID: 1, productName: "Laptop", price: 70000},
//   {userID: 2, productName: "Headphone", price: 8000},
//   {userID: 3, productName: "Mouse", price: 2500},
//   {userID: 4, productName: "Phone", price: 10000}
// ]

// let lowToHigh = [...userCart].sort((a,b) => {
//   return a.price - b.price
// })

// let highToLow = [...userCart].sort((a,b) => {
//   return b.price - a.price
// })

// console.log(lowToHigh);

// find Method

// let animals = ["Monkey", "Cat", "Dog", "Elephant", "Lion"]

// function len(string){
//   return string.length === 3
// }

// let ans = animals.find((animal) => animal.length < 4)
// console.log(ans);

// let user = userCart.find((user) => user.userID%2 === 0)
// console.log(user);

// Every Method

// let arr = [2]

// let arr = [1,2,3,4,5,6,7,8,,9]

// let ans = arr.every((number) => number%2 === 0)
// console.log(ans);

// Fill Method


// let myArray = new Array(10).fill(10)
// console.log(myArray);

// let arr = [1,2,3,4,5,6,7,8,9]


// fill item  start  end


// arr.fill(0, 2,8)

// console.log(arr);

//Splice

// let arr = [1,2,3,4,5,6,7,8,9]

// // Start  Delete  Insert
  
// arr.splice(2, 3)

// console.log(arr);


