/**
 * Created by windows on 2017/3/29.
 */
window.onload=function(){
    //获取当前日期
    var d = new Date();
    var f = d.getFullYear();
    var birth = 1995;
    document.write("董新从的年龄是:"+parseInt(f-birth));
}

