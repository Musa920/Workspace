function my$(id) {
	return document.getElementById(id);
}

window.onload=function(){
	(function(){
		var sliderPics=[
			{imgSrc:'img01.jpg',aLink:'javascript:;'},
			{imgSrc:'img02.jpg',aLink:'javascript:;'},
			{imgSrc:'img03.jpg',aLink:'javascript:;'},
			{imgSrc:'img04.jpg',aLink:'javascript:;'},
			{imgSrc:'img05.jpg',aLink:'javascript:;'},
			{imgSrc:'img06.jpg',aLink:'javascript:;'}
		];
		var box=my$('box');
		var slider=my$('slider');
		var len=sliderPics.length;
		var count=0;
		var arrLeft=my$('arrow').children[0];
		var arrRight=my$('arrow').children[1];
		// 创建轮播图每一页
		for(var i=0;i<len;i++) {
			var li=document.createElement('li');
			slider.appendChild(li);
			var a=document.createElement('a');
			a.style.backgroundImage='url(images/'+sliderPics[i].imgSrc+')';
			a.href=sliderPics[i].aLink;
			li.appendChild(a);
		}
		slider.children[0].className='current';

		// 创建ol小序号
		var sliderNO=document.createElement('ol');
		sliderNO.id='sliderNO';
		box.appendChild(sliderNO);
		for(var i=0;i<len;i++) {
			var li=document.createElement('li');
			li.innerText=i+1;
			sliderNO.appendChild(li);
			li.index=i;
			li.onmouseenter=liEnter;
		}
		sliderNO.children[0].className='current';


		// 鼠标移动到序号上的动画
		function liEnter() {
			count=this.index;
			paita();
			/*console.log(count);
			for(var i=0;i<len;i++) {
				sliderNO.children[i].className='';
				animate(slider.children[i],{opacity:0});
			}
			this.className='current';
			animate(slider.children[this.index],{opacity:1});*/
		}

		// 点击鼠标右箭头的动画
		arrRight.onclick=function() {
			count++;
			if (count>=len) {
				count=0;
			}
			paita();
			/*for(var i=0;i<len;i++) {
				sliderNO.children[i].className='';
				animate(slider.children[i],{opacity:0});
			}
			sliderNO.children[count].className='current';
			animate(slider.children[count],{opacity:1});*/
		}

		// 点击鼠标左箭头的动画
		arrLeft.onclick=function(){
			count--;
			if (count<0) {
				count=len-1;
			}
			paita();
			/*for(var i=0;i<len;i++) {
				sliderNO.children[i].className='';
				animate(slider.children[i],{opacity:0});
			}
			sliderNO.children[count].className='current';
			animate(slider.children[count],{opacity:1});*/
		}

		// 定时器动画
		var timer=setInterval(arrRight.onclick,2000);
		// 启停定时器
		box.onmouseenter=function(){
			clearInterval(timer);
		}
		box.onmouseleave=function(){
			timer=setInterval(arrRight.onclick,2000);
		}

		function paita() {
			for(var i=0;i<len;i++) {
				sliderNO.children[i].className='';
				animate(slider.children[i],{opacity:0});
			}
			sliderNO.children[count].className='current';
			animate(slider.children[count],{opacity:1});
		}
	})();
}