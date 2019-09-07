/*---------------------tools--------------------*/
;(function (window, undefined) {
  const TOOLS = {
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  };
  window.TOOLS = TOOLS;
})(window, undefined)

/*------------------------Parent---------------------*/
;(function (window, undefined) {
  function Parent(options) {
    options = options || {};
    this.width = options.width || 20;
    this.height = options.height || 20;
  }

  Parent.prototype.test = function () {
    console.log('test');
  };

  window.Parent = Parent;

})(window, undefined)

/*---------------------food--------------------*/
;(function (window, undefined) {
  // 记录上一次创建的食物，为删除做准备
  let elements = [];

  function Food(map, options) {
    options = options || {};
    Parent.call(this, options);
    this.backgroundColor = options.backgroundColor || 'green';
    // this.width = options.width || 20;
    // this.height = options.height || 20;
    // 借用构造函数
    this.x = options.x || 0;
    this.y = options.y || 0;
  }

  Food.prototype = new Parent();
  Food.prototype.constructor = Food;

  // 渲染
  Food.prototype.render = function (map) {
    // 删除之前创建的食物
    removeFood();

    this.x = TOOLS.getRandom(0, map.offsetWidth / this.width - 1) * this.width;
    this.y = TOOLS.getRandom(0, map.offsetHeight / this.height - 1) * this.height;
    // 动态创建div，在页面上显示的食物
    let div = document.createElement('div');
    map.appendChild(div);
    elements.push(div);
    // 设置食物的特性（也可以叫设置div的样式）
    div.style.backgroundColor = this.backgroundColor;
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
    div.style.position = 'absolute';
  };

  // 删除食物
  function removeFood() {
    for (let i = elements.length - 1; i >= 0; i--) {
      let div = elements[i];
      // 删除div
      div.parentNode.removeChild(div);
      // 删除数组
      elements.splice(i, 1);
    }
  }

  window.Food = Food;
})(window, undefined)

/*---------------------snake--------------------*/
;(function (window, undefined) {
  // 记录之前创建的蛇
  let elements = [];

  function Snake(options) {
    options = options || {};
    // 蛇节的大小
    // this.width = options.width || 20;
    // this.height = options.height || 20;
    Parent.call(this, options);
    // 蛇的移动方向
    this.direction = options.direction || 'right';
    // 蛇节的身体（蛇节）第一个元素是蛇头
    this.body = [
      {
        x: 3,
        y: 2,
        backgroundColor: 'red'
      },
      {
        x: 2,
        y: 2,
        backgroundColor: 'blue'
      },
      {
        x: 1,
        y: 2,
        backgroundColor: 'blue'
      }
    ];
  }

  Snake.prototype = new Parent();
  Snake.prototype.constructor = Snake;

  Snake.prototype.render = function (map) {
    // 删除之前创建的蛇
    removeSnake();

    // 把每一个蛇节渲染到地图上
    for (let i = 0, len = this.body.length; i < len; i++) {
      let snake = this.body[i];
      // 创建一个DIV,当作是每个蛇节
      let div = document.createElement('div');
      map.appendChild(div);

      // 记录当前创建的蛇
      elements.push(div);

      // 设置蛇的样式
      div.style.position = 'absolute';
      div.style.width = this.width + 'px';
      div.style.height = this.height + 'px';
      div.style.left = snake.x * this.width + 'px';
      div.style.top = snake.y * this.height + 'px';
      div.style.backgroundColor = snake.backgroundColor;
    }
  };

  // 删除蛇
  function removeSnake() {
    for (let i = elements.length - 1; i >= 0; i--) {
      let div = elements[i];
      // 删除div
      div.parentNode.removeChild(div);
      // 删除数组
      elements.splice(i, 1);
    }
  }

  // 控制蛇移动的方向
  Snake.prototype.move = function (food, map) {
    // 控制蛇身体的移动（当前蛇节到上一个蛇节的位置）
    for (let i = this.body.length - 1; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }
    // 判断蛇的移动方向
    let snakeHead = this.body[0];
    switch (this.direction) {
      case 'right':
        snakeHead.x += 1;
        break;
      case 'left':
        snakeHead.x -= 1;
        break;
      case 'top':
        snakeHead.y -= 1;
        break;
      case 'bottom':
        snakeHead.y += 1;
        break;
      default:
        break;
    }

    // 判断蛇头是否和食物的坐标重合
    let headX = snakeHead.x * this.width;
    let headY = snakeHead.y * this.height;
    if (headX === food.x && headY === food.y) {
      // 让蛇增加一节
      // 获取蛇的最后一节
      let last = this.body[this.body.length - 1];
      this.body.push({
        x: last.x,
        y: last.y,
        backgroundColor: last.backgroundColor
      });

      // 随机在地图上重新生成食物
      food.render(map);
    }
  };

  // 暴露构造函数给外部
  window.Snake = Snake;
})(window, undefined)

/*---------------------game--------------------*/
;(function (window, undefined) {
  let that;

  function Game(map) {
    this.food = new Food();
    this.snake = new Snake();
    this.map = map;
    that = this;
  }

  Game.prototype.start = function () {
    // 1.蛇和食物对象渲染到地图上
    that.food.render(that.map);

    // 2.开始游戏的逻辑
    // 2.1 让蛇移动起来
    // 2.2 当蛇遇到边界游戏结束
    runSnake();
    // 2.2 通过键盘控制蛇移动的方向
    bindKey();
  };

  // 蛇移动
  function runSnake() {
    let timeId = setInterval(function () {
      // 让蛇走一格
      this.snake.move(this.food, this.map);
      this.snake.render(this.map);

      // 2.2 当蛇遇到边界游戏结束
      // 获取蛇头的坐标
      let headX = this.snake.body[0].x;
      let headY = this.snake.body[0].y;
      // 计算蛇的移动限制区域
      let maxX = this.map.offsetWidth / this.snake.width;
      let maxY = this.map.offsetHeight / this.snake.height;

      // 如果越界的让游戏停掉
      if (headX < 0 || headX >= maxX) {
        alert('Game Over');
        clearInterval(timeId);
      }

      if (headY < 0 || headY >= maxY) {
        alert('Game Over');
        clearInterval(timeId);
      }
    }.bind(that), 150);
  }

  // 通过键盘控制蛇移动的方向
  function bindKey() {
    document.addEventListener('keydown', function (ev) {
      switch (ev.key) {
        case 'ArrowDown':
          this.snake.direction = 'bottom';
          break;
        case 'ArrowUp':
          this.snake.direction = 'top';
          break;
        case 'ArrowLeft':
          this.snake.direction = 'left';
          break;
        case 'ArrowRight':
          this.snake.direction = 'right';
          break;
        default:
          break;
      }
    }.bind(that), false)
  }

  window.Game = Game;
})(window, undefined)

/*---------------------game--------------------*/
;(function (window, undefined) {
  let map = document.getElementById('map');
  let game = new Game(map);
  game.start();
})(window, undefined);