/**
 * Created by windows on 2017/3/29.
 */
/*
*  创建javascript库
*  每个项目为了提高开发效率,我们需要创建一个用来存放大量的重复调用的代码
*  说白了就是把常用的js代码片段组织到一起
*  名字取得简短且富有意义
* /
/*对象式*/
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
    var $=function(){
        return new Base();//每次new出一个Base方法
    };
    function Base(){
     //创建一个数组,用来保存获取的节点和节点数组
        this.elements = [];
    //获取Id节点
        this.getId = function(id){
           this.element.push(document.getElementById(id));
           return this;
    };
    //获取元素节点
    this.getTagName = function(tag){
        var tags = document.getElementsByTagName(tag);
        for(var i = 0;i<tags.length;i++){
            this.elements.push(tags[i]);
        }

        return this;
    }
}
    Base.prototype.css=function(attr,value){
        for(var i=0;i<this.elements.length;i++){
            this.elements[i].style[attr]=value;
        }
        return this;
};
    Base.prototype.html=function(str){
        for(var i=0;i<this.elements.length;i++){
            this.elements[i].innerHTML=str;
        }
        return this;
    };
    Base.prototype.click=function(fn){
        for(var i=0;i<this.elements.length;i++){
            this.elements[i].onclick=fn;
        }
        return this;
    };








