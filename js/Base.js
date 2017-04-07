/**
 * Created by windows on 2017/3/29.
 */
/*
*  创建javascript库
*  每个项目为了提高开发效率,我们需要创建一个用来存放大量的重复调用的代码
*  说白了就是把常用的js代码片段组织到一起
*  名字取得简短且富有意义
* /
window.onload=function(){
/*d对象式*/
    var Base = {
       getId:function(id){
        return document.getElementById(id);
       },
       getName:function(name){
        return document.getElementById(name);
       },
       getTagName:function(tag){
        return document.getElementById(tag);
       }
    }







}


