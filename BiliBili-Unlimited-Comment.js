// ==UserScript==
// @name         bilibli 发弹幕无限制
// @namespace    http://bumaociyuan.github.io/
// @version      0.1
// @description  enter something useful
// @author       bumaociyuan
// @match        http://www.bilibili.com/video/*
// @grant        none
// ==/UserScript==


(function($) {

    var t = window.setInterval(function() { //百度云把一些内容放到后面加载,因此我设置了一个延时循环，每隔100ms选择一下所需的元素，当所需的元素存在时，开始脚本，同时停止延时循环
        if ($(".ABP-Comment-Input").length > 0) {
            window.clearInterval(t);
            console.log('done');
            var input = $(".ABP-Comment-Input");
            input.keypress(function(event){
                if(event.which == 13){

                    setTimeout(function(){
                        input.removeAttr('disabled');

                        input.focus();
                    },200)
                }
            });
        }
        console.log('waiting');
    }, 100);



})(jQuery);
