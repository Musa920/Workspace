

var web_API-day06 = {
	"client系列" : [
					"由于在js中, 使元素从一个位置移动到位置是闪现的方式, 很难察觉其中过程"
				   // 需求 能够让任意对象通过过渡方式移动到指定位置
				    function animate(obj, target) {
				        clearInterval(obj.timer);
				        obj.timer = setInterval(function () {
				            var leader = obj.offsetLeft;
				            var step = 10;
				            step = leader < target ? step : -step;//step有了正负
				            if (Math.abs(leader - target) >= Math.abs(step)) {
				                leader = leader + step;
				                obj.style.left = leader + "px";
				            } else {
				                obj.style.left = target + "px";//手动放到终点
				                clearInterval(obj.timer);
				            }
				        }, 15);
				    }
					],
	"关于使用动画的一些疑问" : [
				   "除了使用上述计算方式, 还能用什么呢?",
				   		"可以使用CSS3中的过渡属性, transition: left 3s linear; ",
		 		   "那为什么要使用这个动画呢? ",
				   		"以动画的方式可以解决CSS3过渡属性在低版本中的兼容问题 ",
				   		"动画思想其实就是在处理一个数值到另外一个数值的变化 ",
				   			"可以抽象出这种算法, 应用于其他案例 ",
				   	"动画使用的要求有哪些?",
				   		"必须要有定位, 而且是绝对定位, 调用方法传值的时候不要加单位 ",
				   	"为什么不建议使用全局变量存储定时器的ID?",
				   		"因为开启一个定时器会将其之内的函数自动放入事件队列 ",
				   		"那么如果再一次调用函数的时候, 就会清除之前的定时器 ",
				   		"也就是说, 如果多次调用方法的话, 只会执行最后一次调用 ",
				   		"	建议用对象的属性存储定时器的ID ",
				   		"	清除的时候也是该对象的属性, 跟其他的对象就互不干扰 ",
					],
	"标签的属性和对象的属性的区别" : [
				   "标签对象的属性会映射到标签身上",
		 		  		" obj.setAttribute('index', i) ",
		 		  		" obj.getAttribute('index') ",
		 		  		" obj.removeAttribute('class') ",
		 		   "操作对象的属性",
		 		  		" obj.index = i ",
		 		  		" obj['itcast'] = 'heima' ",
		 		  		" 通过对象打点属性的方式直接获取 ",
		 		   "总结：",
		 		   		" 通过标签自定义的属性不能用对象的方式获取",
		 		   		" 通过对象设置的自定义属性不能用标签的属性获取",
		 		   		" 而标签自带的属性, style/className/src/id等等... 这些可以获取和设置"
					],
	"轮播图思路" : [
		 		   " 1.0 完成简单功能",
		 		   		" 1.1 父盒子确定当前轮播图的大小和具体的位置, 超出的部分隐藏",
		 		   		" 1.2 ul要设置很大的宽度, 足以让浮动的li标签一行显示",
		 		   		" 1.3 根据li的数量动态生成标记的数量, 默认隐藏左右箭头",
		 		   			"设置第一个ol里面的li的className是current",
		 		   " 2.0 完成按钮排他实现基本轮播",
		 		   		" 2.1 在动态生成ol的li的时候, 直接注册事件, 或者另外循环批量注册",
		 		   		" 2.2 给标记的li自定义属性index存储i的值, 在事件中进行按钮排他",
		 		   		" 2.3 在全局中, 获取盒子或者单个图片的宽度 ",
		 		   		" 2.4 调用动画方法, 传入ul对象, 目标距离是当前的 -索引(this.index) * 图片宽度 ",
		 		   " 3.0 完成下一张的无缝滚动",
		 		   		" 3.1 通过cloneNode动态复制第一张图片追加到ul的最后",
		 		   		" 3.2 轮播图三要素, 先加加, 后判断, 再执行",
		 		   			"判断是否为极端情况, 极端情况的话, 要先将索引清零, 再让ul闪现至0的位置",
		 		   			"这个地方一定不能用动画, 而是直接使用style.left",
		 		   		" 3.3 索引++ ",
		 		   		" 3.4 如果这个索引小于count, 就去触发标记li对应索引的click ",
		 		   		" 3.5 不然的话就要去调用动画, 让标记的li使用排他思想动态改变 ",
		 		   			"因为这个时候索引已经变成5了, 但是标记没有对应的第5个",
		 		   			"下次点击的时候, 才会知道index是5, 就会响应3.2的判断 ",
		 		   " 4.0 完成上一张的无缝滚动",
		 		   		" 4.1 只用判断一个特殊情况, 就是当index是0 ",
		 		   			"也就是第一张的时候, 再点击需要先让索引等于count, 再让ul闪现至0的位置",
		 		   			"这个地方一定不能用动画, 而是直接使用style.left",
		 		   		" 4.2 正常的情况下, 就让index--",
		 		   		" 4.3 让标记的li对应的索引去触发click事件 ",
		 		   " 5.0 使用定时器让轮播图自动播放 ",
		 		   		" 5.1 声明全局变量存储定时器的ID ",
		 		   			"定时器的两个, 第二个是毫秒时间",
		 		   			"第一个参数是函数, 可以在函数的内部去调用右箭头的click事件, 也可以如下",
		 		   			// var timerId = setInterval(arrRight.onclick, 2000)
		 		   		" 5.2 鼠标经过盒子, 清除定时器 ",
		 		   		" 5.3 鼠标离开盒子开启定时器 ",
					],
	"click和onclick的区别" : [
				   "注册事件的时候, 因为是给对象的事件属性赋值, 所以不能重复去赋值",
		 		   		"如果想多次赋值的话, 可以使用addEventListener",
		 		   "1.0 触发事件",
		 		   		// arrRight.click();
		 		   		// arrRight.onclick();
		 		   		" 可以在某个对象的事件中, 触发另外一个对象的事件",
		 		   		" click会真正的触发该事件, 如果是其他的按钮说不定还会有默认行为",
		 		   		" onclick是对象保存的那个函数体, 所以只是会将那个函数体执行, 不触发事件"
					]
}