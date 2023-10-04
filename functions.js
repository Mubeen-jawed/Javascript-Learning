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

const addAll = (...nums) => {

  let total = 0

  for (let num of nums){
    total = num + total
    console.log(total);
  }
}

addAll(1,2,3,4,5,6);
