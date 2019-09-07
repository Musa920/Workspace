window.onload = function () {
    //alert("外部的JS");
    //找人
    var wrap = document.getElementById("wrap");
    var arrow = document.getElementById("arrow");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;//所有图片
    //1.鼠标经过轮播图 让箭头渐渐地显示 鼠标离开渐渐消失
    wrap.onmouseover = function () {
        animate(arrow, {"opacity": 1});
    };
    wrap.onmouseout = function () {
        animate(arrow, {"opacity": 0});
    };
    //2.设置图片位置

    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度

    //获取页面上所有的li 让他们从当前的位置 以动画的效果到指定的位置
    for (var i = 0; i < lis.length; i++) {
        animate(lis[i], config[i]);
    }


};