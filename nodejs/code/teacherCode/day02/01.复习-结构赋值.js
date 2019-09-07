// 定义： 把对象中的属性，当作 常量 或者 变量 ，给解放出来，就可以当作普通的变量来使用了；

var info = {
  address: '北京',
  name: '小刚刚',
  gender: '男',
  id: 1
}

// 我们想要使用  info 身上的Id，    

// var id = info.id

const { id } = info

console.log(id)