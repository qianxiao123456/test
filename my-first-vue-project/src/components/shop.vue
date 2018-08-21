<template>
  <div>
    <div class="shop_title">
      <b>闪购</b>
      <br>
      <input class="textx" type="text" placeholder="请输入商家或商品名称"><br>
      <p class="ptxt">超值热卖</p>
    </div>
    <div class="shop_img">
      <ul class="my_ulllist">
        <li><img src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"></li>
        <li><img src="http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"></li>
        <li><img src="http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"></li>
        <li><img src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name:"shop",
    data(){
    return{
      shopdata:[]
    }
  },
    created:function(){
      this.$http.get("static/data.json").then(function(res){
        this.shopdata=res.data.goods;
      })
//        this.show=function(){
//          setInterval("this.my_image",500);
//        }
    },
  mounted:function(){

  }
  }
  $(function(){
    var count=0;
    function my_image(){
      count++;
      $(".my_ulllist").animate({
        marginLeft:(-320*count)+"px"
      },500,"linear",function(){
        if(count>=$(".my_ulllist li").length-1){
          $(this).css("marginLeft","0px");
          count=0;
        }
      })
    }
    setInterval(function(){
      my_image();
    },2000);
  })
</script>
<style scoped>
.shop_title{
  height: 30px;
  color:black;
  line-height: 30px;
  text-align: center;
}
.textx{
  width: 100%;
  border: 1px solid silver;
  height: 30px;
}
  .ptxt{
    margin: 0;
    font-size: 15px;
    float: left;
  }
  .shop_img{
    width: 320px;
    height: 150px;
    position: relative;
    overflow: hidden;
  }
  .my_ulllist{
    margin: 0;
    padding: 0;
    width: 1280px;
    height: 150px;
  }
  .my_ulllist li{
    width: 320px;
    height: 150px;
    float: left;
  }
  .my_ulllist li img{
    width: 320px;
    height: 150px;
  }
</style>
