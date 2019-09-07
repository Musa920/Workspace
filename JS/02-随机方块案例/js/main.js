/*获取父容器*/
let container = document.getElementById('container');

let arr = []; /*存储每次创建的小方块*/
for (let i = 0; i < 10; i++) {

  let r = TOOLS.getRandom(0, 255);
  let g = TOOLS.getRandom(0, 255);
  let b = TOOLS.getRandom(0, 255);
  let box = new Box(container, {
    backgroundColor: "rgb(" + r + "," + g + "," + b + ")"
  });
  arr.push(box);
}

randomBox();
setInterval(randomBox, 1000);

function randomBox() {
  for (let i = 0; i < arr.length; i++) {
    let box = arr[i];
    box.random();
  }
}