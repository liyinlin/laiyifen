/**
 * Created by cz on 2016/11/8.
 */
$(function () {
    function getList(json) {
        var ele="<div class=\"clear\">";
            ele+="<a class=\"clear\" href='descPage.html?id="+json.id+"'>";
            ele+="<div><img src='"+json.PicPath+"' alt='"+json.name+"'></div>";
            ele+="<div>";
            ele+="<div>"+json.title+"</div>";
            ele+="<div>￥"+json.nowPrice+"<span>￥"+json.oldPrice+"</span></div>";
            ele+="<div>";
            ele+="<span>"+json.reviewsNum+"条评价</span>";
            ele+"<span>"+json.highOpinion+"%好评</span>";
            ele+="</div>";
            ele+="</div>";
            ele+="</a>";
            ele+="<a href='shoppingCart.html?id="+json.id+"'><img src='images/gwc_s.png'></a>";
            ele+="</div>";
        return $(ele);
    }
    var maxPage;
    var list_info="";
    $.get("http://192.168.200.111:8036/home/PageIndex?pageIndex=1",function (data) {
        maxPage=data.countPage;
        var list=data.DataList;
        for(var i=0;i<list.length;i++){
            $(".list").append(getList(list[i]));
        }
        list_info+=JSON.stringify(data.DataList)+"╋";
        storage.setInfo("list_info",list_info);
    })
    index=2;
    $(window).on("scroll",function () {
        if (czertwee.isBottom()) {
            if(index<=maxPage){
                $.get("http://192.168.200.111:8036/home/PageIndex?pageIndex="+index,function (data) {
                    var list=data.DataList;
                    for(var i=0;i<list.length;i++){
                        $(".list").append(getList(list[i]));
                    }
                    index++;
                    list_info+=JSON.stringify(data.DataList)+"╋";
                    storage.setInfo("list_info",list_info);
                });
            }
        }
    });
})