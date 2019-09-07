window.onload = function() {
	var container = document.querySelector(".container");
	var arrBox = document.querySelector(".arr");
	var ulBox = document.querySelector(".clearfix");
	var olBox = container.children[2];
	var imgWidth = container.offsetWidth;
	var arrLeft = document.getElementById("arrLeft")
	var arrRight = document.getElementById("arrRight")
	var timerId = null;

	// 1.0 遍历生成ol里面的li标签
	for(var i = 0; i < ulBox.children.length; i++) {
		var li = document.createElement("li");
		li.innerText = i + 1;
		olBox.appendChild(li)
	}
	olBox.children[0].className = "current";

	// 2.0 给按钮注册事件 进行排他
	for(var i = 0; i < olBox.children.length; i++) {
		olBox.children[i].index = i;
		olBox.children[i].onmouseenter = function() {
			changeD(this.index)
			animate(ulBox, {"left" : -this.index * imgWidth})

			num = this.index;
		}
	}

	container.onmouseenter = function() {
		arrBox.style.display = "block"
		clearInterval(timerId)
	}
	container.onmouseleave = function() {
		arrBox.style.display = "none"
		timerId = setInterval(arrRight.onclick, 2000)
	}

	var count = ulBox.children.length


	function changeD(number) {
		for(var i = 0; i < olBox.children.length; i++) {
				olBox.children[i].removeAttribute("class")
			}
		olBox.children[number].className = "current"
	}

	var num = 0;
	// 3.0 右箭头点击事件
	arrRight.onclick = function() {

		/*if(num == count) {
			num = 0;
			ulBox.style.left = 0 +'px';
		}*/
	// --------------------------------------------
		num++;
		if(num < 5) {
			olBox.children[num].onmouseenter();
		}else {
			animate(ulBox, {"left" : -num * imgWidth})
			changeD(0)
		}
	}

	// 4.0 左箭头点击事件
	arrLeft.onclick = function() {
		if(num == 0) {
			num = ulBox.children.length - 1;
			ulBox.style.left = -num * imgWidth + "px";
		}
		num--;
		olBox.children[num].onmouseenter();
	}

	// 5.0 左箭头点击事件
	timerId = setInterval(arrRight.onclick, 2000)

	var cloneBox = ulBox.children[0].cloneNode(true);
	ulBox.appendChild(cloneBox);

}