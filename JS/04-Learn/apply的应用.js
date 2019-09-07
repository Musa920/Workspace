let arr = [4, 5, 26, 8];
// 求数组中的最大值
console.log(Math.max.apply(Math, arr));

console.log(arr.join(' '));
console.log.apply(null, arr);

// apply的最大应用是把数组展开给前面的方法