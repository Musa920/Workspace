    function animate(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                if (k === "opacity") {//特殊处理
                    var leader = getStyle(obj, k) * 100;
                    var target = json[k] * 100;//0.5
                    var step = (target - leader) / 10;//0.5-1=-0.5
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);//-1
                    leader = leader + step;
                    obj.style[k] = leader / 100;//opacity没有单位
                } else if (k === "zIndex") {
                    obj.style.zIndex = json[k];//无需渐变 直接设置即可
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = json[k];
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader + "px";
                }
                if (leader !== target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {//如果有才调用
                    fn();//动画执行完成后执行
                }
            }
        }, 15);
    }

    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }