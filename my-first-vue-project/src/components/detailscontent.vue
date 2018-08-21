<template>
  <div class="detail_block">
       <div class="imagedeta">
         <img :src="oneinfo.image">
       </div>
    <p><b>{{oneinfo.name}}</b></p>
    <p>{{oneinfo.cellCount}}</p>
    <p><span class="pricecon">￥{{oneinfo.price}}</span><button class="btncon">+购物车</button></p>
    <p class="infocon">商品基本信息:</p>
    <p>{{oneinfo.info}}</p>
    <p class="userhu">用户评价</p>
    <div class="ratings">
        <div class="usercon" v-for="rats in oneinfo.ratings">
          <img class="userimg" :src="rats.avatar">
          <span>{{rats.username}}</span>
          <span class="timeuser">{{rats.rateTime | showtimes}}</span>
          <p>{{rats.text}}</p>
        </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name:"contentdetail",
    data(){
    return{
      p_index:0,
      c_index:0,
      detailinfo:null,
      oneinfo:""
    }
  },
  filters:{
    "showtimes":function(value){
     var time=new Date(value).toLocaleString();
      return time;
    }
  },
    created:function(){
      this.p_index=this.$route.params.parindex;
      this.c_index=this.$route.params.childindex;
      this.$http.get("static/data.json").then((res)=>{
        this.detailinfo=res.data.goods;
        this.oneinfo=this.detailinfo[this.p_index].foods[this.c_index];
      })
    }
  }
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
.detail_block{
  padding: 5px 10px;
  width: 300px;
  height: auto;
  margin-bottom: 50px;
}
  .imagedeta img{
    max-width: 100%;
  }
  .pricecon{
    color: red;
    font-size: 15px;
  }
  .btncon{
    float: right;
    margin-right: 1px;
    background-color: orange;
    color: white;
    border-radius: 5px;
  }
  .infocon{
    margin-top: 10px;
    font-size: 18px;
  }
  .usercon{
    margin-top: 10px;
    height: auto;
    padding: 3px 0;
    border-bottom: 1px solid silver;
  }
  .userimg{
    width: 80px;
    height: 80px;
  }
  .timeuser{
    font-size: 13px;
  }
  .userhu{
    margin: 5px 0;
  }
</style>
