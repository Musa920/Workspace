window.onload = function() {

	var container = document.getElementById("container");
	var arrRight = document.getElementById("arrRight");
	var arrLeft = document.getElementById("arrLeft");
	var ulBox = container.children[0]
	var arrBox = container.children[1]
	var olBox = container.children[2]

	var timer = null;
	var num = 0;

	for (var i = 0; i < ulBox.children.length; i++) {
		var olLi = document.createElement("li");
		olLi.innerText = i + 1;
		olBox.appendChild(olLi);
	}
	olBox.children[0].className = "current";
	for (var i = 0; i < olBox.children.length; i++) {
		olBox.children[i].index = i;
		olBox.children[i].onmouseenter = function() {
			paita(this, this.index)
			num = this.index;
		}
	}
	container.onmouseenter = function() {
		clearInterval(timer)
		arrBox.style.opacity = "1";
	}
	container.onmouseleave = function() {
		arrBox.style.opacity = "0";
		timer = setInterval(arrRight.onclick, 2000)
	}
	arrRight.onclick = function() {
		num++;
		if (num > ulBox.children.length - 1) {
			num = 0;
		}
		paita(olBox.children[num], num)
	}
	arrLeft.onclick = function() {
		num--;
		if (num < 0) {
			num = ulBox.children.length - 1;
		}
		paita(olBox.children[num], num)
	}

	timer = setInterval(arrRight.onclick, 3000)

	function paita(obj, arg) {
		for (var i = 0; i < olBox.children.length; i++) {
			animate(ulBox.children[i], {"opacity" : "0"})
			olBox.children[i].removeAttribute("class");
		}
		obj.className = "current"
		animate(ulBox.children[arg], {"opacity" : "1"})
	}
}	