// 1. Promise 是一个 构造函数，可以被new并得到一个 实例对象；
// 2. 在 Promise 上，有 resolve 和 reject 两个函数，其中，这个 resolve 表示成功的回调函数，reject 表示失败的回调函数；
// 3. 在 Promise.prototype 对象上，有个 .then 函数，这个 .then 表示 为 Promise 指定成功和失败的回调函数；

// axios.post().then(function(){}, function(){})
// Promise实例.then( 成功的回调 resolve，失败的回调 reject )

// 4. Promise 表示一个 异步的操作；
// const p = new Promise()   // 表示创建了一个【形式上】的异步操作；
// new Promise(function(){}) // 在 new Promise() 的时候， 可以在参数列表中，传递一个 匿名函数，这个匿名函数，就代表一个具体的异步操作；