const obj = {
  name: 'jack',
  age: 20,
  sex: 'man'
};

const {name: name123, age, sex} = obj;
console.log(name123);
console.log(age);
console.log(sex);