function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.speak = function () {
    // console.log(this.name + "说好了");
  }
  this.goHome = function () {
    console.log(this.name + "回家了");
  }
  // console.log(this)
}

let p1 = new Person('Henay', 23, '女');
let p2 = new Person('Musa', 26, '男');
// console.log(p1.speak())
// console.log(p2.speak())

const date = new Date();
console.log(date.toLocaleDateString(). + ' ' + date.toLocaleTimeString());