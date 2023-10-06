//Hoisting

// we can access declaration function from anywhere

// hello()

// function hello() {
//   console.log("hello");
// }

// Default Parameters

// const sum = (a=0, b=0) => a + b

// console.log(sum())


// function numbers(a,b, ...c) {
//   console.log(`a is ${a}`);
//   console.log(`b is ${b}`);
//   console.log(`c is ${c}`);
// }

// numbers(2,3,4,5,6,7,8,9)

// const addAll = (...nums) => {

//   let total = 0

//   for (let num of nums){
//     total = num + total
//     console.log(total);
//   }
// }

// addAll(1,2,3,4,5,6);

// function outer() {
//   let age = 20
//   console.log(age, "outer");

//   function inner1() {
//     let age = 30
//     console.log(age,"inner1");

//     function inner2() {
//       // let age=40
//       console.log(age,'inner2');
//     }

//     inner2()
//   }

//   inner1()
// }

// outer()


// Param Destructuruing

// let quiz = {
//   question: "Largest Continent",
//   answer: "Asia"
// }

// function getObjValue({question, answer}) {
//   console.log(question, answer);
// }

// getObjValue(quiz)

// let items = ["Bat", "Ball", "Wicket", "Pad"]

// function getArrValue([item1, item2]) {
//   console.log(item1, item2);
// }

// getArrValue(items)


// callback Function

// function userName(name) {
//   return name
// }

// function greet(callback) {
//   console.log("Hello, ", callback("Mubeen"));
//   // console.log(userName());
// }

// greet(userName)

// function func1() {

//   console.log("func1");

//   function func2() {
//     console.log("func2");
//   }

//   return func2()
// }

// func1()