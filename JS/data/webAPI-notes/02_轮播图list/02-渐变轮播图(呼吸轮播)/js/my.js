window.onload = function() {
	var num = 0;
	var timer = null;
	var ul = $("container").children[0];
	var imgs = ul.children;
	var ol = $("container").getElementsByTagName('ol')[0];
	for (var i = 0; i < imgs.length; i++) {
		var olLi = document.createElement("li");
		olLi.innerText = i + 1;
		ol.appendChild(olLi);
	}
	ol.children[0].className = "current";
	for (var i = 0; i < ol.children.length; i++) {
		ol.children[i].index = i;
		ol.children[i].onmouseover = function() {
			paita(this, this.index)
			num = this.index;
		}
	}
	$("container").onmouseenter = function() {
		clearInterval(timer)
		$("arr").style.opacity = "1";
	}
	$("container").onmouseleave = function() {
		timer = setInterval($("arrRight").onclick, 2000)
		$("arr").style.opacity = "0";
	}
	$("arrRight").onclick = function() {
		num++;
		if (num > imgs.length - 1) {
			num = 0;
		}
		paita(ol.children[num], num)
	}
	$("arrLeft").onclick = function() {
		num--;
		if (num < 0) {
			num = imgs.length - 1;
		}
		paita(ol.children[num], num)
	}
	timer = setInterval($("arrRight").onclick, 3000)
	function paita(obj, arg) {
		for (var i = 0; i < imgs.length; i++) {
			animate(imgs[i], {"opacity" : "0"})
			ol.children[i].removeAttribute("class");
		}
		animate(imgs[arg], {"opacity" : "1"})
		obj.className = "current"
	}
}	
function $(id) {
	return document.getElementById(id);
}