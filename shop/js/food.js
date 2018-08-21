    window.onload=function(){
        var startx=0;
        var starty=0;
        var endx=0;
        var endy=0
        var count=0;
            var timer=setInterval(function(){
                banner();
            },1000)
        var block=document.getElementsByClassName("nav_banner")[0];
        block.addEventListener("touchstart",function(e){
            startx= e.touches[0].pageX;
            starty= e.touches[0].pageY;
        })
        block.addEventListener("touchmove",function(e){
            endx= e.touches[0].pageX;
            endy= e.touches[0].pageY;
        })
        block.addEventListener("touchend",function(){
            if(endx==undefined){
                endx=startx;
            }
            if(endx-startx>0){
                bannerImage();
            }
            else{
                banner();
            }
            endx=0;
        })
        function banner(){
            block.className="nav_banner animate";
            count++;
            block.style.marginLeft=(-320*count)+"px";
            if(count>=3){
                count=0;
                block.className="nav_banner";
                block.style.marginLeft="0px";
            }
        }
        function bannerImage(){
            block.className="nav_banner animate";
            count--;
            block.style.marginLeft=(-320*count)+"px";
            if(count<=-1){
                count=2;
                block.className="nav_banner";
                block.style.marginLeft="-640px";
            }
        }

        var list_li=document.getElementsByClassName("list_li");
        var list_dis=document.getElementsByClassName("list_dis");
        var line_tu=document.getElementsByClassName("line_tu");
        line_tu[0].style.display="block";
        for(var i=0;i<list_li.length;i++){
            list_li[i].index=i;
            list_li[i].onmouseenter=function(){
                for(var k=0;k<list_li.length;k++){
                    list_dis[k].style.display="none";
                    line_tu[k].style.display="none";
                }
                line_tu[this.index].style.display="block";
                list_dis[this.index].style.display="block";
            }
        }
        function subInfo(){
            $(".txt").trigger("blur");
            //var length=$(".error").length;
            //if(length){
            //    return false;
            //}
            console.log(2);
            return true;
        }
        $(".txt").blur(function(){
            if($(this).attr("name")=="nicknanme"){
                if($(this).val()==""){
                    var error=$("<span class='error'>*姓名不能为空</span>");
                    $(this).parent().append(error);
                }
                console.log(0);
            }
        })
    }