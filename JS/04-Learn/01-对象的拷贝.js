let father = {
  name: 'jack',
  age: 20,
  sex: 'man'
};

let son = {
  name: 'jeckson'
};

function extend(parent, child) {
  for (let key in parent) {
    if (child[key]) {
      continue;
    }
    child[key] = parent[key];
  }
}

extend(father, son);
console.log(son);
