function add(...args) { // 在定义方法的时候，在方法的形参列表中使用...args是rest参数；
  let total = 0;
  args.forEach(item => {
    total += item;
  });
  console.log(total);
}
// 实参个数不确定的时候用扩展运算符；
let arr = [2, 6, 9];
add(...arr);

// 在调用函数的时候用的...arr是扩展运算符