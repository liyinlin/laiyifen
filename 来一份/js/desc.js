/**
 * Created by cz on 2016/11/4.
 */
$(function () {
    function getBannerList(json) {
        var ele="<div class='swiper-slide'>";
            ele+="<a href='###'><img src='"+json.commodityPicPath+"'></a>";
            ele+="</div>";
        return $(ele);
    }
    var id=czertwee.getQueryString("id");
    $.get("http://192.168.200.111:8036/home/GetInfo?id="+id,function (data) {
        console.log(data);
        var picList=data.picList;
        for(var i=0;i<picList.length;i++){
             if(picList[i].type==1){
                 $(".swiper-wrapper").append(getBannerList(picList[i]));
             }
        }
        if($(".swiper-container .swiper-slide").size()>1){
            var swiper = new Swiper('.swiper-container', {
                initialSlide: 0,
                autoplay: 1500,
                speed: 300,
                grabCursor: true,
                loop:true,
            });
        }
        $(".name").html(data.comm.title);
        $(".active_a").html(data.comm.activityContent);
        $(".price").html("￥"+data.comm.nowPrice+"<span>￥"+data.comm.oldPrice+"<span>");
        
    });
})