window.onload = function() {
		var container = document.querySelector('.container');
		var smallImgBox = container.children[0];
		var smallImg = smallImgBox.children[0];
		var bigImg = container.children[2];
		var mask = document.querySelector('.mask');
		// 点击切换小图和大图
		var ulBox = document.querySelector('.clearfix');
		for(var i = 0; i < ulBox.children.length; i++) {
			ulBox.children[i].index = i;
			ulBox.children[i].addEventListener('mouseenter', function() {
				for(var j = 0; j < ulBox.children.length; j++) {
					ulBox.children[j].removeAttribute('style')
				}
				this.style.border = '2px solid #000';

				smallImg.src = "./images/pic-0" + (this.index + 1) + ".jpg";
				if (this.index === ulBox.children.length - 1) {
					ulBox.children[this.index].className = "clear"
					return
				}else {
					for(var j = 0; j < ulBox.children.length; j++) {
						ulBox.children[j].removeAttribute('class')
					}
					bigImg.children[0].src = "./images/pic-0" + (this.index + 1) + "-b.jpg"
				}
			})
		}
		// 点击列表图片显示对应的图片
		smallImgBox.onmouseenter = function() {
			for(var i = 0; i < ulBox.children.length; i++) {
				if(ulBox.children[i].className === "clear") {
					return
				}
			}
			mask.style.display = 'block';
			bigImg.style.display = 'block';
		}
		smallImgBox.onmouseleave = function() {
			mask.style.display = 'none';
			bigImg.style.display = 'none';
		}
		// 让小遮罩盒子发生移动
		smallImgBox.onmousemove = function(e) {
			e = e || window.event;
			var mathX = e.pageX - container.offsetLeft - mask.offsetWidth/2;
			var mathY = e.pageY - container.offsetTop - mask.offsetHeight/2;
			// 限制盒子的移动
			mathX = mathX < 0 ? 0 : mathX;
			mathY = mathY < 0 ? 0 : mathY;
			// num2是遮罩能够移动的总距离
			var num = smallImg.offsetWidth - mask.offsetWidth;
			var num2 = smallImg.offsetHeight - mask.offsetHeight;
			mathX = mathX > num ? num : mathX;
			mathY = mathY > num2 ? num2 : mathY;
			mask.style.left = mathX + 'px';
			mask.style.top = mathY + 'px';
			// num3是大图能够移动的总距离
			var num3 = bigImg.children[0].offsetWidth - bigImg.offsetWidth;
			var targetX = mathX * num3 / num;
			var targetY = mathY * num3 / num;
			bigImg.children[0].style.top = -targetY + 'px';
			bigImg.children[0].style.left = -targetX + 'px';
		}
}