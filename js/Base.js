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
   //前台调用
    var $=function(){
        return new Base();//每次new出一个Base方法
    };
   //基础库
    function Base(){
    }
//创建一个数组,用来保存获取的节点和节点数组
  Base.elements = [];
  //获取Id节点
  Base.getId = function(id){
    this.element.push(document.getElementById(id));
    return this;
  };
  //获取元素节点
  Base.getTagName = function(tag){
    var tags = document.getElementsByTagName(tag);
    for(var i = 0;i<tags.length;i++){
        this.elements.push(tags[i]);
    }

    return this;
}
//获取CLASS节点数组
Base.prototype.getClass = function(className,idName){
      var node =null;
      if(arguments.length ==2){
          node = document.getElementById(idName);
      }else{
          node= document;
      }
      var all = node.getElementsTagName('');
      for(var i = 0;i<all.length;i++){
          if(all[i].className==className){
              this.elements.push(all[i]);
          }
      }
      return this;
}
//获取某一个节点
Base.prototype.getElement = function(num){
    var element = this.elements[num];
    this.elements = [];
    this.elements[0] = element;
    return this;

}
  //设置css
    Base.prototype.css=function(attr,value){
        for(var i=0;i<this.elements.length;i++){
            if(arguments.length==1){
              if(typeof window.getComputedStyle!='undefined'){//w3c
                  return window.getComputedStyle(this.elements[i],null)[attr]
              }else if(typeof this.elements[i].currentStyle!='undefined'){//IE
                 return this.elements[i].currentStyle[attr];
              }
            }
            this.elements[i].style[attr]=value;
        }
        return this;
};
  //设置innerHTML
    Base.prototype.html=function(str){
        for(var i=0;i<this.elements.length;i++){
            if(arguments.length==0){
                return this.elements[i].innerHTML;
            }
            this.elements[i].innerHTML=str;
        }
        return this;
    };
 //触发click事件
    Base.prototype.click=function(fn){
        for(var i=0;i<this.elements.length;i++){
            this.elements[i].onclick=fn;
        }
        return this;
    };








