

function animate(obj, target) {
	// 用定时器之前先清除定时器
    clearInterval(obj.timer);
    // 给对象的属性设置定时器
    obj.timer = setInterval(function () {
    	// 每次定时器都获取最新的偏移值
        var leader = obj.offsetLeft;
        var step = 10;
        // 如果当前值比目标值大, 则是负的步长
        step = leader < target ? step : -step;//step有了正负
        // 如果剩下的距离的绝对值比步长值还大 就继续走, 如果不是则手动
        if (Math.abs(leader - target) >= Math.abs(step)) {
            leader = leader + step;
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";//手动放到终点
            clearInterval(obj.timer);
        }
    }, 5);
}