

var javascript高级_day04 = {
	"组合继承关系图" : [
		 		   " 										null",
		 		   		" 									  ^		",
		 		   		" 									  |		",
		 		   		" 								  __proto__	",
		 		   		" 				prototype			  |		",
		 		   		" 	object	<==============> object.prototype		",
		 		   		" 				constructor			  ^		",
		 		   		" 			\						  |		",
		 		   		" 			  \					  	  |		",
		 		   		" 			    \					  |		",
		 		   		" 			      \				  __proto__	",
		 		   		" 			        \				  |		",
		 		   		" 			          \				  |		",
		 		   		" 			   prototype \			  |		",
		 		   		" 	person	<==============> person.prototype ",
		 		   		" 			   constructor			  ^		",
		 		   		" 			\						  |		",
		 		   		" 			  \					  	  |		",
		 		   		" 			    \				  __proto__	",
		 		   		" 			      \					  |		",
		 		   		" 			        \				  |		",
		 		   		" 			          \			 new person ",
		 		   		" 			   prototype \		 	 ||	    ",
		 		   		" 	student	<==============> student.prototype ",
		 		   		" 			   constructor			  ^		",
		 		   		" 			\						  |		",
		 		   		" 			  \					  	  |		",
		 		   		" 			    \				  __proto__	",
		 		   		" 			      \					  |		",
		 		   		" 			        \				  |		",
		 		   		" 			          \				  |		",
		 		   		" 			            \			  |		",
		 		   		" 			              \			  |		",
		 		   		" 			                \		  |		",
		 		   		" 							new student 	",
		 		   	" 一定要理解这个继承关系图, 并且能独立绘制 "
					],
	"函数的声明方式" : [
					"1.0 普通函数通过function关键字声明一个函数",
						" 在页面的任何位置都可以进行调用",
					"2.0 函数表达式: 通过变量赋值存储一个函数体 ",
						" 只能在赋值代码之后执行",
						" 变量声明提升, 只提升声明不提升赋值 ",
					"3.0 自调用函数 / 匿名函数 ",
						" 没有名字, 页面加载的时候调用, 不能重复利用 ",
						" 关于使用自调用函数的注意点, 参看前一天的笔记",
					"4.0 通过new关键字使用构造函数声明的函数对象 ",
						" 如果存储的话将会是一个对象 ",
						" 这个函数体将要执行的代码都用字符串包裹起来, 放在实参括号中 ",
						" 这个函数也算是匿名函数的一种 "
					],
	"函数的调用形式与this的指向" : [
					"1.0 普通函数调用 ",
						" 普通的函数, 加了括号就可以执行 ",
					"2.0 作为方法调用 ",
						" 如果这个函数在对象内部作为方法, 则由对象打点调用 ",
					"3.0 作为构造函数调用 ",
						" 当我们通过new关键字创建一个对象的时候, 会调用这个函数 ",
					"4.0 作为注册事件的时候 ",
						" 注册事件将函数体赋值, 触发事件的时候调用该函数 ",
					"5.0 在定时器内部作为参数 ",
						" 在定时器内部作为参数, 响应条件时调用函数 ",
					"6.0 自...自调用 ",
						" 你懂的... ",
		 		   " 关于this的指向, 应该参考什么 ",
		 		   		" 有没有对象的参与 ",
		 		   		" 是否由对象调用 ",
		 		   		" 是否出现了嵌套关系 ",
		 		   		" 有没有通过其他方法绑定对象 ",
		 		   " 总结, 观察this的指向, 注意力在调用上, 不在声明上 ",
					],
	"改变this指向的方法" : [
		 		   " 1.0 call方法, 会调用函数, 可以传参 ",
		 		   		" 一般由构造函数直接调用 ",
		 		   		" 可以直接使用其他内置对象的方法, 作用于某个对象之上 ",
		 		   " 2.0 apply方法, 会调用函数, 传参是数组, 一个个拆解开传参 ",
		 		   		" 同样使某个函数内部改变this的指向 ",
		 		   		" 并且把数组内的值一个个传入进行运算 ",
		 		   " 3.0 bind方法, 不会调用函数, 会返回一个新的函数 ",
		 		   		" 如果是一个没有名字的函数, 可以直接调用bind方法 ",
		 		   		" 但是如果是一个有名字的函数, 就会报错 ",
		 		   			" 让函数名调用bind, 用另外一个名字接收新函数, 通过新名字调用 ",
					],
	"函数的其他成员" : [
		 		   " fn.arguments ",
		 		   		" 也可以直接用arguments ",
		 		   		" 函数调用时的实参 ",
		 		   		" 如果涉及到数据变化太大时, 可以不用传参, 通过arguments遍历操作 ",
		 		   " fn.caller ",
		 		   		" 表示当前函数的调用者 ",
		 		   		" 如果出现函数嵌套, 则返回嵌套的函数, 否则是null ",
		 		   " fn.name ",
		 		   		" 函数的名字 ",
		 		   " fn.length ",
		 		   		" 函数的形参个数, 是具体的数值 ",
					],
	"高阶函数的用法" : [
		 		   " 1.0 函数作为参数 ",
		 		   		" 函数A在调用时, 将函数体作为实参传递 ",
		 		   		" 函数A在执行时, 通过形参接收 ",
		 		   		" 在某个条件之下, 直接将形参加上括号调用 ",
		 		   		" 一般这种用法多用于回调函数 ",
		 		   		" 调用时的参数也可以传函数名 ",
		 		   " 另外一种 ",
		 		   		" 在某个函数内部执行的条件中, 调用另外一个函数 ",
		 		   " 2.0 函数作为返回值 ",
		 		   		" 需求: ",
		 		   		" 通过调用一个函数, 计算出来某个值, 下次能重复使用 ",
		 		   		" 问题： ",
		 		   		" 如果直接将这个值return, 那么每次调用方法, 可能导致结果不一 ",
		 		   " 解决问题的思路 ",
		 		   		" 在函数结束时, return一个函数, 可以是一个函数名 ",
		 		   		" 在新的函数中, return计算的结果 ",
		 		   		" 每次需要该值的时候, 调用这个新的函数 ",
		 		   	" 原因： ",
		 		   		" 函数在调用时, 会开启一个局部作用域, 存储声明的值 ",
		 		   		" 调用结束, 局部作用域消失, 垃圾回收机制回收内存 ",
		 		   		" 而 通过调用该函数, 使用新的函数返回了该值 ",
		 		   		" 那么, 每次在调用新的函数时, 会开启一个闭包 ",
		 		   		" 闭包中, 存储的就是初次调用外层函数时计算的值 ",
		 		   		" 所以不管新的函数调用了几次, 值都是原先存储的那一个 ",
					]
}