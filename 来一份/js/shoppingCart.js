/**
 * Created by cz on 2016/11/7.
 */
$(function () {
    var num=Number($(".change>div:nth-child(1)").next().html());
    if(num<=0){
        num=0;
        $(".change>div:nth-child(1)").find("img").attr("src","images/jian_hui.png");
    }
    function isAllCheck($input) {
        var flag;
        for(var i=0;i<$input["length"];i++){
            var index=i.toString();
            if($input[index].checked){
                flag=true;
            }else{
                return false;
            }
        }
        return flag;
    }
    var id=czertwee.getQueryString("id");
    var list=czertwee.getInfo("list");
    var list_info=czertwee.getInfo("list_info");
    if(!list){
        list="";
    }
    list+=id+",";
    czertwee.setInfo("list",list);
    list=czertwee.getSDArray(list,",");
    list_info=czertwee.getSDArray(list_info,"╋");
    list_info=czertwee.getJson(list_info);
    list=czertwee.strTONum(list);
    var flag_del=true;
    var $input_max=$(".main").find(".dp_name").find(".checkbox").children("input");
    $(".posR>a").on("click",function () {
        if(flag_del){
            $(".del_prev").stop(true,true).animate({"left":"-100px"},200);
            flag_del=false;
        }else{
            $(".del_prev").stop(true,true).animate({"left":"0px"},200);
            flag_del=true;
        }
    });
    $(document).delegate(".list .check","click",function(){
        var $max_parent=$(this).parent().parent().parent().parent().parent();
        var $parent_prev=$(this).parent().parent().parent().parent().prev();
        var $this_prev=$(this).prev();
        var ele="<img src='images/icon_gou.png'/>";
        if($this_prev[0].checked){
            $this_prev.removeProp("checked");
            $(this).css({"border":"1px solid #666"});
            $(this).children("img").remove();
        }else{
            $this_prev.prop("checked",true);
            $(this).css({"border":"1px solid #f23030"});
            $(this).html($(ele));
        }
        var $input=$max_parent.find(".list").find(".checkbox").children("input");
        var $check=$parent_prev.find(".check");
        if(isAllCheck($input)){
            $check.prev().prop("checked",true);
            $check.css({"border":"1px solid #f23030"});
            $check.html($(ele));
        }else{
            $check.prev().removeProp("checked");
            $check.css({"border":"1px solid #666"});
            $check.children("img").remove();
        }
        if(isAllCheck($input_max)){
            $(".js .check").prev().prop("checked",true);
            $(".js .check").css({"border":"1px solid #f23030"});
            $(".js .check").html($(ele));
        }else{
            $(".js .check").prev().removeProp("checked");
            $(".js .check").css({"border":"1px solid #666"});
            $(".js .check").children("img").remove();
        }
    });
    $(document).delegate(".dp_name .check","click",function(){
        var $this_prev=$(this).prev();
        var $this_parent=$(this).parent();
        var $check=$(this).parent().parent().next().find(".check")
        var ele="<img src='images/icon_gou.png'/>";
        if($this_prev[0].checked){
            $this_prev.removeProp("checked");
            $(this).css({"border":"1px solid #666"});
            $(this).children("img").remove();
            $check.css({"border":"1px solid #666"});
            $check.children("img").remove();
            $check.prev().removeProp("checked");
        }else{
            $this_prev.prop("checked",true);
            $(this).css({"border":"1px solid #f23030"});
            $(this).append($(ele));
            $check.css({"border":"1px solid #f23030"});
            $check.html($(ele));
            $check.prev().prop("checked",true);
        }
        if(isAllCheck($input_max)){
            $(".js .check").prev().prop("checked",true);
            $(".js .check").css({"border":"1px solid #f23030"});
            $(".js .check").html($(ele));
        }else{
            $(".js .check").prev().removeProp("checked");
            $(".js .check").css({"border":"1px solid #666"});
            $(".js .check").children("img").remove();
        }
    });
    $(document).delegate(".one .check","click",function(){
        var $this_prev=$(this).prev();
        var ele="<img src='images/icon_gou.png'/>";
        if($this_prev[0].checked){
            $(".check").css({"border":"1px solid #666"});
            $(".check").children("img").remove();
            $(".check").prev().removeProp("checked");
        }else{
            var $check=$(".check").not("input:checked");
            $(".check").css({"border":"1px solid #f23030"});
            $(".check").html($(ele));
            $(".check").prev().prop("checked",true);
        }
    });
    $(document).delegate(".change>div:nth-child(1)","click",function(){
        var num=Number($(this).next().html());
        if(num<=1){
            num=0;
            $(this).find("img").attr("src","images/jian_hui.png");
        }else{
            num-=1;
        }
        $(this).next().html(num);
    });
    $(document).delegate(".change>div:nth-child(3)","click",function(){
        var num=Number($(this).prev().html());
        $(this).prev().html(num+=1);
        $(this).parent().children("div").eq(0).find("img").attr("src","images/jian_hei.png")
    });
    var x=0,y=0,x1=0,y1=0,change_value=0;
    $(document).delegate(".del_prev","touchstart",function (e) {
        var touch = event.changedTouches[0];
        x = Number(touch.pageX);
        y = Number(touch.pageY);
    });
    $(document).delegate(".del_prev","touchmove",function (e) {
        var touch = event.changedTouches[0];
        x1= Number(touch.pageX);
        y1=  Number(touch.pageY);

        if(x1-x<0){
            change_value =	x-x1;
        }else{
            change_value =	x-x1;
        }
        var value=$(this).position().left;
        values=value-change_value;
        if(values<=-100){
            values=-100;
        }else if(values>=0){
            values=0;
        }
        $(this).css("left",values+"px");
    });
    $(document).delegate(".del_prev","touchend",function () {});
    $(document).delegate(".del","click",function () {
        $(this).parent().stop(true,true).animate({"height":'0px'},200,function () {
            $(this).remove();
        });
    })
})
