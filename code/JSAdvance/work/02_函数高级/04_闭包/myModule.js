/**
 * Created by Administrator on 2018/1/18 0018.
 */
function myModule() {
    var data ='atguigu'
    function do1() {
        console.log('do1()'+data);
    }
    function do2() {
        console.log('do2()'+data);
    }
    return{
        do1,
        do2
    }
}