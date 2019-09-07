    

    function setN(obj){
        obj.name='aa';
        obj = new Object();
        obj.name = 'bb';
    };
    var per = new Object();
    setN(per);
    console.log(per.name);  // "aa"




    var a = 5;
    function test(){
        a = 0;
        console.log(a);     // 0   0
        console.log(this.a); // 5  undefined
        var a;
        console.log(a)      // 0   0
    }
    test();
    new test();