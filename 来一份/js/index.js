/**
 * Created by cz on 2016/11/3.
 */
$(function () {
    if($(".swiper_ban .swiper-slide").size()>1){
        var swiper = new Swiper('.swiper_ban', {
            initialSlide: 0,
            autoplay: 1500,
            speed: 300,
            grabCursor: true,
            loop: true
        });
    }
    function getXianshi(json) {
        var ele="<div class=\"swiper-slide slide\">"
        ele+="<a href='descPage.html?id="+json.id+"'>";
        ele+="<div>";
        ele+="<img src='"+json.PicPath+"' alt='"+json.name+"'>";
        ele+="</div>";
        ele+="<div>";
        ele+="<div>"+json.name+"</div>";
        ele+="<div>￥"+json.nowPrice+"<span>￥"+json.oldPrice+"</span></div>";
        ele+="</div>";
        ele+="</a>";
        ele+="</div>";
        return $(ele);
    }
    function getActionOne(json) {
        ele="<a href='descPage.html?id="+json.id+"'>";
        ele+="<img src='"+json.PicPath+"' alt='"+json.name+"'>"
        ele+="</a>";
        return $(ele);
    }
    function getActionOther(json) {
        var title=json.title.split(" ");
        var info="";
        for(var i=0;i<title.length-2;i++){
            info+=title[i]=" ";
        }
        info=info.substring(0,info.length-1);
        var ele="<a href='descPage.html?id="+json.id+"'>";
        ele+="<div>"+json.name+"</div>";
        ele+="<div>"+info+"</div>";
        ele+="<div>￥"+json.nowPrice+"</div>";
        ele+="<img src='"+json.PicPath+"' alt='"+json.name+"'>";
        ele+="</a>";
        return ele;
    }
    var type=["","肉制品","蜜饯干果"]
    function getDisplay(json) {
        var ele="<div>";
        ele+="<div class='active'>";
        ele+="<div>"+type[json[0].type]+"</div>"
        ele+="</div>";
        ele+="<div class='action more'>"
        for(var i=0;i<json.length;i++){
            ele+="<div class='slide'>";
            ele+="<a href='descPage.html?id="+json[i].id+"'>";
            ele+="<div>";
            ele+="<img src='"+json[i].PicPath+"' alt='"+json[i].name+"'>";
            ele+="</div>";
            ele+="<div>";
            ele+="<div>"+json[i].name+"</div>";
            ele+="<div>￥"+json[i].nowPrice+"<span>￥"+json[i].oldPrice+"</span></div>";
            ele+="</div>";
            ele+="</a>";
            ele+="</div>";
        }
        ele+"</div>";
        ele+"</div>";
        return $(ele);
    }
    $.get("http://192.168.200.111:8036/home/index",function (data) {
        var xsList=data.XianShilist;
        for(var i=0;i<xsList.length;i++){
            $(".swiper-wrap .swiper-wrapper").append(getXianshi(xsList[i]));
        }
        var swiper_var = new Swiper('.swiper-wrap', {
            slidesPerView: 'auto',
            freeMode: true,
        });
        var jxList=data.JingXuan;
        $(".three>div:nth-child(1)").append(getActionOne(jxList[0]));
        for(var i=1;i<jxList.length;i++){
            $(".three>div:nth-child(2)").append(getActionOther(jxList[i]));
        }
        $(".display").append(getDisplay(data.list1));
        $(".display").append(getDisplay(data.list2));
    });
})