
window.onload = function() {
	var arr = [];
	checkedReg("userName", /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/);
	checkedReg("eMail", /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
	checkedReg("phoneNum", /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/);
	checkedReg("promise", /^\d{6}$/);
	function checkedReg(obj, reg) {
		var currentId = document.getElementById(obj);
		currentId.onblur = function() {
			if(reg.test(this.value)) {
				this.removeAttribute("class");
				this.parentNode.getElementsByTagName("span")[0].style.display = "none";
				this.parentNode.getElementsByTagName("i")[0].style.opacity = "1";
				this.index = 1;
			}else {
				this.classList.add("current");
				this.parentNode.getElementsByTagName("span")[0].style.display = "block";
				this.parentNode.getElementsByTagName("i")[0].style.opacity = "0";
			}
		}
	}
	var pwd = document.getElementById("pwd");
	var strange = document.getElementById("strange");
	pwd.onkeyup = function() {
		if(/[0-9]/.test(this.value) || /[a-zA-Z]/.test(this.value) || /[,\./_-]/.test(this.value)) {
			this.style.color = "#fff"
			strange.style.background = "linear-gradient(to right, red 33% ,#fff 30%)";
		}
		if(/[0-9]/.test(this.value) && /[a-zA-Z]/.test(this.value) || /[0-9]/.test(this.value) && /[,\./_-]/.test(this.value) || /[a-zA-Z]/.test(this.value) && /[,\./_-]/.test(this.value)) {
			this.style.color = "#fff"
			strange.style.background = "linear-gradient(to right, orange 50% ,#fff 50%)";
		}
		if(/[0-9]/.test(this.value) && /[a-zA-Z]/.test(this.value) && /[,\./_-]/.test(this.value)) {
			this.style.color = "#fff"
			strange.style.background = "green";
		}
		if(this.value.length < 6) {
			this.style.color = "#000"
			strange.style.background = "#fff";
		}
	}
	pwd.onblur = function() {
		if(this.value.length < 6) {
			this.classList.add("current");
			this.parentNode.getElementsByTagName("span")[0].style.display = "block";
			this.parentNode.getElementsByTagName("i")[0].style.opacity = "0";
		}else {
			this.removeAttribute("class");
			this.parentNode.getElementsByTagName("span")[0].style.display = "none";
			this.parentNode.getElementsByTagName("i")[0].style.opacity = "1";
			this.index = 1;
		}
	}

	var yanZheng = document.getElementById("yanzhengma");
	yanZheng.onclick = function() {
		this.disabled = true;
 		this.className = "cur"
		var num = 10;
		num = num < 10 ? "0" + num : num;
 		this.value = num + "秒后重新发送";
		clearInterval(this.timer)
		this.timer = setInterval(function() {
			num--;
			if(num == 0) {
				clearInterval(this.timer)
				this.disabled = false;
 				this.value = "发送验证码";
 				this.removeAttribute("class")
 				return;
			}
 			num = num < 10 ? "0" + num : num;
 			this.value = num + "秒后重新发送";
		}.bind(this), 1000)
	}

	var submitB = document.getElementById("submitB");
	// 把所有需要填写的表单通过自定义属性找到
	var inputs = document.querySelectorAll("input")
	for(var i = 0; i < inputs.length; i++) {
		if(inputs[i].dataset.input == "element") {
			arr.push(inputs[i])
		}
	}
	submitB.onclick = function(e) {

		var newArr = []
		for(var i = 0; i < arr.length; i++) {
			if(arr[i].index) {
				newArr.push(true);
			}
		}
		if(newArr.length == 0) {
			e.preventDefault();
			for(var i = 0; i < arr.length; i++) {
				arr[i].classList.add("current");
				arr[i].parentNode.getElementsByTagName("span")[0].style.display = "block";
				arr[i].parentNode.getElementsByTagName("i")[0].style.opacity = "0";
			}
		}else if(newArr.length < arr.length){
			e.preventDefault();
		}
	}

}