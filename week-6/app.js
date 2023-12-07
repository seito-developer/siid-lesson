// Q1
class Cat {
  constructor() {
      name = "Whiskers"; //this
  }

  meow() {
      return `${name} says meow!`; //this
  }
}

// let myCat = new Cat();
// console.log(myCat.meow());  // Outputs: "Whiskers says meow!"

// // Q2
// class Student {
//   constructor(name) {
//       this.name = name;
//   }

//   getName = function() {
//       return this.name;
//   }
// }

// let student1 = new Student("Alice");
// console.log(student1.getName());

// // Q3
// class Rectangle {
//   constructor(height, width) {
//       this.height = height;
//       this.width = width;
//   }

//   calculateArea() {
//       return this.height * this.width;
//   }
// }

// let myRectangle = new Rectangle(5, 10);
// console.log(myRectangle.calculateArea());

// // Q4
// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHello() {
//     return `${this.name} says hello!`;
//   }
// }

// // インスタンスのコード
// const john = new Person("John");
// console.log(john.sayHello());  // Outputs: "John says hello!"

// Q5
class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  speak() {
      let pronoun = this.age < 20 ? '僕' : '私';
      return `${pronoun}は${this.name}という名前です。${this.age}歳です。よろしく!`;
  }
}

// 使用例
let youngPerson = new Person('Yoshi', 15);
console.log(youngPerson.speak());  // Outputs: "僕はYoshiという名前です。15歳です。よろしく!"

let adultPerson = new Person('Hiroshi', 25);
