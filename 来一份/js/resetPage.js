/**
 * Created by cz on 2016/6/24.
 */
$(document).ready(function(){
    var width=document.documentElement.clientWidth;
    var scale=width/640;
    document.body.style.zoom=scale;
    $("body").css({display:"block"});

})
$(window).resize(function(){
    var width=document.documentElement.clientWidth;
    var scale=width/640;
    document.body.style.zoom=scale;
    $("body").css({display:"block"});

});
