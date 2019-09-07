window.onload = function() {
	var contanierBox = document.querySelector(".container")
	var smallImgBox = document.querySelector(".small-img")
	var mask = document.querySelector(".mask")
	var bigImgBox = document.querySelector(".big-img")
	var ulBox = document.querySelector(".clearfix")
	var smallImg = smallImgBox.children[0];
	var bigImg = bigImgBox.children[0];
	// 1.0 给列表盒子加上边框
	for(var i = 0; i < ulBox.children.length; i++) {
		ulBox.children[i].index = i;// 1.1 自定义属性
		// 1.2 排他思想处理边框
		ulBox.children[i].onmouseenter = function() {
			for(var i = 0; i < ulBox.children.length; i++) {
				ulBox.children[i].removeAttribute("style")
				ulBox.children[i].removeAttribute("class")
			}
			this.style.border = "2px solid #000"
			// 1.3 改变中图片和大图片的路径
			smallImg.src = "./images/pic-0" + (this.index + 1) + ".jpg";
			if(this.index == ulBox.children.length - 1) {
				ulBox.children[this.index].className = "biaoji"
				return;
			}
			bigImg.src = "./images/pic-0" + (this.index + 1) + "-b.jpg";
		}
	}// 2.0 放大镜的效果	2.1 鼠标移上 显示遮罩和大图
	smallImgBox.onmouseenter = function() {
		for(var i = 0; i < ulBox.children.length; i++) {
			if(ulBox.children[i].className =="biaoji") {
				return;
			}
		}
		mask.style.display = "block"
		bigImgBox.style.display = "block"
	}// 2.2 鼠标离开 隐藏遮罩和大图
	smallImgBox.onmouseleave = function() {
		mask.style.display = "none"
		bigImgBox.style.display = "none"
	}// 2.3 在盒子上移动, 获取当前的信息, 给mask 产生移动
	smallImgBox.onmousemove = function(e) {
		var x = e.pageX - contanierBox.offsetLeft - mask.offsetWidth/2;
		var y = e.pageY - contanierBox.offsetTop - mask.offsetHeight/2;
		var num1 = contanierBox.offsetWidth - mask.offsetWidth;
		var num2 = contanierBox.offsetHeight - mask.offsetHeight - ulBox.offsetHeight;
		x = x < 0 ? 0 : x;
		y = y < 0 ? 0 : y;
		x = x > num1 ? num1 : x;
		y = y > num2 ? num2 : y;
		mask.style.left = x + "px";
		mask.style.top = y + "px";
		var datu = bigImg.offsetWidth - bigImgBox.offsetWidth;
		var bigX = x * datu / num1;
		var bigY = y * datu / num1;
		bigImg.style.left = -bigX + "px";
		bigImg.style.top = -bigY + "px";
	}
}