$(function() {
	var arr = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
	var num = 0;
	var flag = true;
	var timer = null;
	var imgWidth = $(window).width();
	for (var i = 0; i < arr.length; i++) {
		var newLi = document.createElement("li");
		var newImg = document.createElement("img")
		newImg.src = "images/" +arr[i];
		$(newLi).append(newImg)
		$("#bannerList").append(newLi)
	}
	$("#bannerList > li").eq(0).show();
	// 鼠标经过盒子, 显示或者隐藏左右箭头
	$("#banner").hover(function() {
		clearInterval(timer)
		$("#clickLeft, #clickRight").show()
	}, function() {
		$("#clickLeft, #clickRight").hide()
		timer = setInterval(autoPlay, 2000)
	});

	// 轮播开始
	$("#clickRight").click(function() {
		autoPlay()
	});

	$("#clickLeft").click(function() {
		if(flag) {
			flag = false;
			num--;
			if(num < 0) {
				num = $("#bannerList > li").length - 1;
				$("#bannerList > li").eq(0).addClass('current').siblings().removeAttr('class');
				$("#bannerList > li").eq(num).show().css({"width": 0, "left":0, "zIndex": 2}).animate({
					"width": imgWidth
				}, 800, function() {
				flag = true;
			}).siblings().removeAttr('style')
				return
			}
			$("#bannerList > li").eq(num + 1).addClass('current').siblings().removeAttr('class');
			$("#bannerList > li").eq(num).show().css({"width": 0, "left":0, "zIndex": 2}).animate({
				"width": imgWidth
			}, 800, function() {
				flag = true;
			}).siblings().removeAttr('style')
		}
	});

	timer = setInterval(autoPlay, 2000)

	function autoPlay() {
		if(flag) {
			flag = false;
			num++;
			if(num > $("#bannerList > li").length - 1) {
				num = 0;
			}
			$("#bannerList > li").eq(num - 1).addClass('current').siblings().removeAttr('class');
			$("#bannerList > li").eq(num).show().css({"width": 0, "right":0, "zIndex": 2}).animate({
				"width": imgWidth
			}, 800, function() {
				flag = true;
			}).siblings().removeAttr('style')
		}
	}





})