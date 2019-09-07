

var web_API-day05 = {
	"client系列" : [
				   "只读属性",
		 		   "clientWidth和clientHeight获取的是元素的宽高, 不加border",
				   "scrollWidth和scrollHeight获取的是元素内容的宽高, 不加border",
				   "offsetWidth和offsetHeight获取的是元素的宽高, 加border"
					],
	"获取window的宽度" : [
				   "可以获取页面的宽度, 应用于响应式",
		 		   "能够获取网页可视区的宽度和高度",
		 		   /*function client() {
				        return {
				            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
				            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
				        };
				    }*/
					],
	"事件对象" : [
				   "当我们在使用事件的时候, 其实是默认有参数进来的, 只是我们一直没有接收",
		 		   "通对象, 传入的参数可以任意起名, 一般叫做event或者e",
		 		   "为了兼容IE",
		 		   // var e = e || window.event;
		 		   "获取鼠标当前坐标",
		 		   		"event.screenX --> 鼠标在屏幕中的坐标",
		 		   		"event.clientX --> 鼠标在客户区中的坐标",
		 		   		"event.pageX --> 鼠标在页面中中的坐标	// 最常用",
		 		   "兼容page方法",
		 		   		"var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;"
		 		   		"var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;"
					],
	"京东放大镜案例" : [
				   "结构：父盒子中, 有小盒子和大盒子, 小盒子有小图片和隐藏的遮罩层, 大盒子在父盒子之外隐藏",
		 		   "鼠标经过小盒子, 显示遮罩层和大盒子, 鼠标离开小盒子, 隐藏它们",
		 		   		"注意这里不能将事件源设置成父盒子, 因为大盒子也是父盒子的元素",
		 		   		"如果鼠标移动过快, 经过大盒子的时候, 大盒子还未消失, 就是bug",
		 		   "遮罩移动的距离到底是多少？",
		 		   		"pageX - 盒子的offsetLeft  = 盒子x轴等于0",
		 		   		"pageY - 盒子的offsetTop  = 盒子y轴等于0",
			    		"确定了盒子左上角是(0, 0)",
			    	"现在为了让鼠标在盒子的中间, 又需要再减去盒子的一半",
			    	"所以坐标(0, 0)就在距离盒子内部(遮罩的一半, 遮罩的一半)",
			    	"而遮罩能够移动的距离就是, 盒子 - 左边的一半 - 右边的一半",
			    	"得出, 遮罩移动的距离是   小盒子总宽度/高度 - 遮罩的宽度/高度",
		 		   "如何确定比例关系？",
		 		   		"大图移动的距离 = 大图片总宽度/高度 - 显示的宽度/高度",
		 		   		"遮罩移动的距离 = 小盒子总宽度/高度 - 遮罩的宽度/高度",
		 		   		"移动比例  =  大图移动的距离 / 遮罩移动的距离",
		 		   "大图最终位置 =  -遮罩当前的位置 * 移动比例 + 'px'; "
					],
	"可拖拽案例" : [
				   "通过事件对象event获取鼠标在page中的坐标X和坐标Y",
		 		   "将坐标给盒子的top值和Left值赋值, 记得带单位",
		 		   "每次点击都需要获取鼠标离盒子的top和left值",
		 		   "鼠标移动时, 需要再减去上述的值, 才能真正得到鼠标当前的位置",
		 		   		"目的是不让鼠标移动时, 盒子的左上方闪到鼠标位置",
		 		   		"学习事件嵌套的用法, 对象的事件中调用document.onmousemove",
		 		   		"document.onmouseup的时候, 记得将document.onmousemove设置为null",
		 		   "用来清除默认选中文字",
		 		   		"window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();"
					],
	"自定义滚动条案例" : [
				   "计算高度比例 (浏览器的高度 : 内容的高度 = bar的高度 : 滚动条高度) ",
				   		"如果内容超出, 需要滚动条, 如果不超出, 则不显示",
		 		   "获取鼠标的pageY, 获取鼠标按下时, 在bar中的offsetTop",
		 		   		"var barBoxY = pageY - box.offsetTop - bar.offsetTop;",
		 		   "barY移动的距离等于鼠标的pageY - 盒子的offsetTop - barBoxY",
		 		   "限制盒子移动的范围 0 ~ (盒子高度- bar的高度), 进行判断",
		 		   "内容走的距离恰好是高度比例 * barY",
		 		   		"内容移动的距离为负值",
		 		   		"清除默认选中文字"
					]
}