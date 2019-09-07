window.onload = function () {
    //alert("外部的JS");
    //找人
    var wrap = document.getElementById("wrap");
    var arrow = document.getElementById("arrow");
    //1.鼠标经过轮播图 让箭头渐渐地显示 鼠标离开渐渐消失
    wrap.onmouseover = function () {
        animate(arrow, {"opacity": 1});
    };
    wrap.onmouseout = function () {
        animate(arrow, {"opacity": 0});
    };

};