// ==UserScript==
// @name         bilibli 发弹幕无限制
// @namespace    http://bumaociyuan.github.io/
// @version      0.2
// @description  enter something useful
// @author       bumaociyuan
// @match        http://www.bilibili.com/video/*
// @grant        none
// ==/UserScript==


(function($) {

    var t = window.setInterval(function() { 
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
