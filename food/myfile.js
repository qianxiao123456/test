   window.onload = function(){
   var image = document.getElementsByClassName("ming");
    var leftspan = document.getElementsByClassName("cen_spn1")[0];
    var rightspan = document.getElementsByClassName("cen_spn2")[0];
    var opaty = document.getElementsByClassName("opacty")[0];
    var index;
    for(var i = 0;i < image.length;i++){
            image[i].index = i;
            // console.log("image["+i+"].index="+image[i].index);
            image[i].onmouseenter = function(){
                 clearInterval(times);
             }    
             image[i].onmouseleave = function(){
                times = setInterval(function(){
                fun("left");
                },2000)
             }     
            //  console.log("image["+i+"].src="+image[i].src);
        }  
        leftbtn = parseInt(opaty.style.left);
        console.log(leftbtn);
    function fun(res){
        if(res == "left"){
            leftbtn -=162.2;
            opaty.style.left = leftbtn + "px";
            if(leftbtn < 0||leftbtn > 653){
                opaty.style.display = "none";
            }
            else{
                opaty.style.display = "block";
            }
        for(var i = 0;i < image.length;i++){
            var num = parseInt(image[i].index )+ 1;
            if(num < image.length){
            image[i].src = "img/img"+num+".jpg";
            image[i].index ++;
            // console.log("image["+i+"].src="+image[i].src);
            // console.log("image["+i+"].index="+image[i].index);
            if(image[6].index == 1){ 
                opaty.style.left = 815 + "px"; 
                leftbtn = parseInt(opaty.style.left);   
            }
             }
            else{
            image[i].src = "img/img"+0+".jpg";
            // console.log("image["+i+"].src="+image[i].src);
            image[i].index = 0;
            // console.log("image["+i+"].index="+image[i].index);
            }
            // console.log("image["+i+"].index="+num);
        }
         }
        else{
            leftbtn +=162.3;
            opaty.style.left = leftbtn + "px";
            if(leftbtn < 0||leftbtn > 653){
                opaty.style.display = "none";
            }
            else{
                opaty.style.display = "block";
            }
            for(var k =image.length-1;k >= 0;k --){
                var numb = parseInt(image[k].index) - 1;
                if(image[8].index == 1){ 
                    opaty.style.left = 3 + "px"; 
                    leftbtn = parseInt(opaty.style.left); 
                }
                if(numb > 0){
                    image[k].src = "img/img"+numb+".jpg";
                    image[k].index --;
                }
                else{
                    image[k].src = "img/img"+(image.length-1)+".jpg";
                    image[k].index = image.length - 1; 
                }
            }
        }
    }
    var times = setInterval(function(){
        fun("left");
    },2000)
    leftspan.onmouseenter = function(){
        clearInterval(times);
    }
    leftspan.onclick = function(){
        fun("left");
    }
    leftspan.onmouseleave = function(){
        times = setInterval(function(){
            fun("left");
        },2000)
    }
    rightspan.onmouseenter = function(){
        clearInterval(times);
    }
    rightspan.onclick = function(){
        fun("right");
    }
    rightspan.onmouseleave = function(){
        times = setInterval(function(){
            fun("left");
        },2000)
    }
}