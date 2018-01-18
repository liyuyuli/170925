/**
 * Created by Administrator on 2018/1/18 0018.
 */
(function (window) {
    var data = 'atguigu'
    function do1() {
        console.log('do1()'+data);
    }
    function do2() {
        console.log('do2()'+data);
    }
    window.module2={
        do1,
        do2
    }
})(window)