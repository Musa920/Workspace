
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	function Ball(x, y) {
		this.x = x;
		this.y = y;
		this.r = 15;
		this.color = ["#e4e4e4","skyblue","yellowgreen","gary","#f44336","hotpink","#f40","#fff","#00bcd4"];
		this.num = Math.floor(Math.random() * 9);
		// 每帧移动的大小
		this.dx = Math.random()*10 - 5;
		this.dy = Math.random()*10 - 5;
		// 半径的衰减
		this.dR = Math.random() + 0.3;
		// 将实例化的小球放进数组里面
		ballArray.push(this);
	}
	Ball.prototype = {
		// 更新自己
		update : function() {
			this.x += this.dx;
			this.y += this.dy;
			this.r -= this.dR;
			if(this.r <= 0) {
				this.r = 0;
				ballArray = _.without(ballArray,this);
			}
		},
		rander : function() {
			// 绘制圆的API 
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.r, 0, Math.PI*2 ,true);
			ctx.fillStyle = this.color[this.num];
			ctx.fill();
		}
	}
	// 小球数组
	var ballArray = new Array();
	setInterval(function() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for(var i= 0; i < ballArray.length; i++) {
			// update可能把自己删了
			ballArray[i].update();
			// 要验证是否存在
			if(ballArray[i]) {
				ballArray[i].rander();
			}
		}
	}, 20)
	
	canvas.addEventListener("mousemove", function(event) {
		new Ball(event.offsetX, event.offsetY)
	});
