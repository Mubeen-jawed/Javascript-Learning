// function about(num) {
//   console.log(`My name is ${this.firstName}. I'm ${this.age} years old. There are ${this.totalFamilyMembers} members in my family. My education is ${this.education}`);
// }


// let person1 = {
//   firstName: "Mubeen",
//   education: "Intermediate",
//   age: 17,
//   totalFamilyMembers: 5,
//   describe: about
// }

// let person2 = {
//   firstName: "Alina",
//   education: "Graduation",
//   age: 21,
//   totalFamilyMembers: 6,
//   describe: about
// }

// let person3 = {
//   firstName: "Laiba",
//   education: "Matric",
//   age: 17,
//   totalFamilyMembers: 3,
//   describe: about
// }

// person1.describe(3)

// console.log(this);

// "use strict"

// function myFunc() {
//   console.log(this);
// }

// myFunc.call()

// function about(favMusic, hobby) {
//   console.log(this.firstname, this.age, favMusic, hobby);
// }

// let user1 = {
//   firstname: "mubeen",
//   age: 17,
//   about: function() {
//     console.log(this.firstname, this.age);
//   }
// }

// let user2 = {
//   firstname: "saad",
//   age: 22,
// }


// about.call(user1, "Choo lu", "none")

// let myfunc = user1.about
// myfunc() // <== this will give undefined, cuz the object function has come out of the object. therefore it is returning global  object.


// call is same as apply

// apply take array as argument while call takes argument as individuals

// console.log(this);

// console.log(person?.describe());

// let arr = [1,2,3]


// let user1 = {
//     firstname: "mubeen",
//     age: 17,
//     about: () => {
//       // console.log(this.firstname, this.age);
//       console.log(this);
//     }
//   }

// user1.about()
// let user1 = {
//     firstname: "mubeen",
//     age: 17,
//     about: () => {
//       // console.log(this.firstname, this.age);
//       console.log(this);
//     }
//   }

// user1.about()

// let user1 = {
//     firstname: "mubeen",
//     age: 17,
//     about() {
//       console.log(this.firstname, this.age);
//     }
//   }

// user1.about()


// function user(firstName, lastName, email, age, address) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     email: email,
//     age: age,
//     address: address,
//     about: function() {
//       console.log(`My name is ${firstName + lastName}`);
//     },
//     is18: function() {
//       if(this.age > 18){
//         console.log("Yes");
//       } else{
//         console.log("No");
//       }
//     },
//   }
// }

// user("Mubeen", "jawed", "effe@gmail.com", 17, "my address")

let userMethod = {
  about : function() {
    return `My name is ${this.firstName + this.lastName}`
  },

  is18 : function() {
    if(this.age > 18){
      return ("Yes");
    } else{
      return "No"
    }
  }

}

function createUser(firstName, lastName, email, age, address) {
    let user = Object.create(userMethod)

    user.firstName = firstName
    user.lastName = lastName,
    user.email = email,
    user.age = age,
    user.address = address
    
    return user;

}

let user1 = createUser("Mubeen", "jawed", "effe@gmail.com", 17, "my address")
console.log(user1.about())

// let customer = {
//   customerID: 1,
//   customerName: "Mubeen",
//   email: "Mubenga@gamil.com",
//   productID: 4,
// }

// let product = Object.create(customer)

// product.productID = 4;
// product.productName = "Milk Pack";
// product.price = 350;
// product.stock = 231;

// console.log(product);










