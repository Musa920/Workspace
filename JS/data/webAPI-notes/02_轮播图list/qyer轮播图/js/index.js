window.onload = function() {
	var banner = document.getElementById("banner")
	var moveWidth = banner.offsetWidth;
	var bannerList = document.getElementById("bannerList")
	var clickRight = document.getElementById("clickRight")
	var clickLeft = document.getElementById("clickLeft")

	var arr = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
	var num = 0;
	var flag = true;
	var timer = null

	for(var i = 0; i < arr.length; i++) {
		var li = document.createElement("li");
		//li.style.backgroundImage = "url(images/"+arr[i]+")"
		var img = document.createElement('img')
		img.src = "images/" + arr[i]
		li.appendChild(img)
		bannerList.appendChild(li)
	}
	bannerList.children[0].className = "current"

	banner.onmouseenter = function() {
		clearInterval(timer)
		clickRight.style.display = "block"
		clickLeft.style.display = "block"
	}

	banner.onmouseleave = function() {
		clickRight.style.display = "none"
		clickLeft.style.display = "none"
		timer = setInterval(clickRight.onclick, 2000)
	}

	clickRight.onclick = function() {
		if(flag) {
			flag = false;
			num++;
			if(num > bannerList.children.length - 1) {
				num = 0
			}
			for(var i = 0; i < bannerList.children.length; i++) {
				bannerList.children[i].removeAttribute("class")
				bannerList.children[i].removeAttribute("style")
			}
			if(num == 0) {
				bannerList.children[bannerList.children.length - 1].className = "current";
			}else {
				bannerList.children[num - 1].className = "current";
			}
			bannerList.children[num].style.width = 0;
			bannerList.children[num].style.right = 0;
			bannerList.children[num].style.display = "block";
			bannerList.children[num].style.zIndex = 2;
			animate(bannerList.children[num], {
				"width" : moveWidth
			}, function() {
				flag = true
			})
		}
	}

	clickLeft.onclick = function() {
		if(flag) {
			flag = false
			num--;
			if(num < 0) {
				num = bannerList.children.length - 1
			}
			for(var i = 0; i < bannerList.children.length; i++) {
				bannerList.children[i].removeAttribute("class")
				bannerList.children[i].removeAttribute("style")
			}
			if(num == bannerList.children.length - 1) {
				bannerList.children[0].className = "current";
			}else {
				bannerList.children[num + 1].className = "current";
			}
			bannerList.children[num].style.width = 0;
			bannerList.children[num].style.left = 0;
			bannerList.children[num].style.display = "block";
			bannerList.children[num].style.zIndex = 2;
			animate(bannerList.children[num], {
				"width" : moveWidth
			}, function() {
				flag = true
			})
		}
	}
	timer = setInterval(clickRight.onclick, 2000)
}