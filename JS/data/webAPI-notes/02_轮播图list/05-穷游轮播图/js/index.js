

$(function() {

	var winWidth = $(window).width()

	var imgArr = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];
	for(var i = 0; i < imgArr.length; i++) {
		var newImg = document.createElement("img");
		newImg.src = "images/" + imgArr[i];
		var newLi = $("<li></li>")
		$(newLi).append($(newImg))
		$("#bannerList").append(newLi);
	}

	$("#bannerList > li").eq(0).addClass('current');


	$("#banner").hover(function() {
		$("#clickLeft, #clickRight").show()
		clearInterval(timer)
	}, function() {
		$("#clickLeft, #clickRight").hide()
		timer = setInterval(autoPlay, 2000)
	});


	var num = 0;
	var timer = null;


	$("#clickRight").click(function() {

		autoPlay();

	})

	function autoPlay() {
		num++;

		if(num > 4){
			num = 0;
		}

		$("#bannerList > li").eq(num - 1).addClass('current').removeAttr('style').siblings().removeAttr('class style');
		$("#bannerList > li").children('img').removeAttr('style')
		$("#bannerList > li").eq(num).children('img').css("right","50%")
		$("#bannerList > li").eq(num).show().css({"right": 0, "width": 0, "zIndex": 2}).animate({"width": winWidth},1000);
	}


	$("#clickLeft").click(function(event) {
		num--;
		if(num < 0) {
			num = imgArr.length - 1;
			$("#bannerList > li").eq(0).addClass('current').removeAttr('style').siblings().removeAttr('class style');
			$("#bannerList > li").children('img').removeAttr('style');
			$("#bannerList > li").eq(num).children('img').css("left","50%");
			$("#bannerList > li").eq(num).show().css({"left": 0, "width": 0, "zIndex": 2}).animate({"width": winWidth},1000);
		}

		$("#bannerList > li").eq(num + 1).addClass('current').removeAttr('style').siblings().removeAttr('class style');
		$("#bannerList > li").children('img').removeAttr('style');
			$("#bannerList > li").eq(num).children('img').css("left","50%");
			$("#bannerList > li").eq(num).show().css({"left": 0, "width": 0, "zIndex": 2}).animate({"width": winWidth},1000);
	});


	timer = setInterval(autoPlay, 2000)


})