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
        this.elements = [];
    }
//创建一个数组,用来保存获取的节点和节点数组

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
            if(arguments.length==1) {
              return  getStyle(this.elements[i],attr);
            }
            this.elements[i].style[attr]=value;
        }
        return this;
};
 //添加class
Base.prototype.addClass = function(className){
     for(var i=0;i<this.elements.length;i++){
         if(!hasClass(this.elements[i],className)) {
             this.elements[i].className += ""+className;
         }
     }
     return this;
}
 //移除className
 Base.prototype.removeClass=function(className) {
     for(var i=0;i<this.elements.length;i++){
         if(!hasClass(this.elements[i],className) {
           this.classNames[i].className = this.elements[i].className.replace(new RegExp('(\\s|^)')+className+'(\\s|$),');
         }
     }
     return this;
 }
 }
 //设置link或style的css规则
Base.prototype.addRule=function(num,selectorText,cssText,position){
    var sheet = document.styleSheets[num];
   insertRule(sheet,electorText,cssText,position);
    return this;

}
//移除link或style的css规则
Base.prototype.removeRule = function(num,index){
    var sheet =document.styleSheets[num];
    delectRule(sheet,index);
    return this;


}

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
//设置鼠标移入移出方法
   Base.prototype.hover=function(over,out){
       for(vari = 0;i<this.elements;i++){
           this.elements[i].onmouseover=over;
           this.elements[i].onmouseout=out;
       }
       return this;
   }
//设置显示
 Base.prototype.show=function(){
    for(var i = 0;i<this.elements.length;i++){
        this.elements[i].style.display="block";
    }
    return this;
 }
 //设置隐藏
Base.prototype.hide=function(){
    for(var i = 0;i<this.elements.length;i++){
        this.elements[i].style.display="hide";
    }
    return this;
}
//设置物体居中
Base.prototype.centent =function(width,height){
    var top = (document.documentElement.clientHeight-250)/2;
    var left = (document.docuemntElement.clientWidth-350)/2;
    for(var i = 0;i<this.elements;i++){
        this.elements[i].style.top = top+'px';
        this.elements[i].style.left = left+"px";
    }
    return this;
};

/***********************************************/
//跨浏览器获取视口大小
function getinner(){
    if(typeof window.innerWidth !='undefined'){
        return{
            width:width.innerWidth;
            height:height.innerHeight;
        }
        else{
            return {
                width:document.documentElement.clientWidth;
                height:document.documentElement.clientHeight;
            }
        }
    }
}

function getStyle(element,attr){
    if(typeof window.getComputedStyle!='undefined'){//w3c
        return window.getComputedStyle(element,null)[attr]
    }else if(element.currentStyle!='undefined'){//IE
        return element.currentStyle[attr];
    }
}
}
//判断class是否存在
function hasClass(element,className){
    return this.elements[i].className.match(new RegExp('(\\s/^)'+className+'(\\s|$)'));
}
//跨浏览器添加link规则
function insertRule(sheet,electorText,cssText,position){
    if(typeof sheet.insertRule!='undefined'){//W3c
        sheet.insertRule(selectorText+'{'+cssText+')',position);
    }else if(typeof sheet.addRule!='undefined'){//IE
        sheet.addRule(selectorText,cssText,position);

    }
}
//跨浏览器移除link规则
function delectRule(sheet,index){
    if(typeof sheet.delectRule!='undefined'){//w3c
        sheet.delectRule(index);
    }else if(typeof sheet.removeRule!='undefined'){//Ie
        sheet.removeRule(index);

    }

}
/*
   //实现累加,并且清晰的指出是给addEvent用的
     //JS一切皆为对象,所以addEvent.ID语法正确,实际上是个全局变量
     alert(addEvent.ID);
     addEvent.ID++;
*/

//跨浏览器事件绑定
function addEvent(obj,type,fn){
    if(typeof obj.addEventListener!='undefined'){
        obj.addEventListener(type,fn,false);
    }else{
        //创建一个存放事件的哈希表（散列表）
        //obj.events={};
      if(!obj.events) obj.events={};
        //第一次执行时执行
        if(!obj.events[type]){
            //创建一个存放事件处理函数的数组
            obj.events[type]=[];
            //把第一次的事件处理函数先存储到第一个位置上
            if(obj['on'+type])obj.events[type][0]=fn;

        };
        //第二次开始执行我们用事件计数器来存储
        obj.events[type][++addEvent.ID]=fn;
        //执行事件处理函数
        obj['on'+type]=function(){
            for(var i in obj.events[type]){
                obj.events[type][i]();
            }
        };



}


}
//为每个事件分配一个计数器
addEvent.ID=1;
//绑定浏览器删除事件
function removeEvent(obj,type,fn){
    if(typeof obj,removeEventListener!='undefined'){
        obj.removeEventListener(type,fn,false);
    }else {
        alert(obj,events);
    }
}
/***********************************************/
//锁屏功能
Base.prototype.lock = function(){
    for(var i =0;i<this.elements.length;i++){
        this.elements[i].style.width = getinner().width+'px';
        this.elements[i].style.height = getinner().height+'px';
        this.elements[i].style.display = 'block';
    }
    return this;
};


Base.prototype.unlock = function(){
    for(var i =0;i<this.elements.length;i++){
        this.elements[i].style.display = 'none';
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
//触发浏览器窗口大小
Base.prototype.resize = function(fn){
    window.onresize = fn;
    return this;

}
//封装下拉菜单
window.onload=function(){
    $().getClass('member').hover(function(){
        $().getTagName('ul').show();
    },function(){
        $().getTagName("ul").hide();
    })
}
























