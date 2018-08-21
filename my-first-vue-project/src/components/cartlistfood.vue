<template>
    <div class="tempcart">
      <ul>
        <li class="tempcart_li" v-for="item in cartmenufood">
          <img class="tempcart_img" :src="item.icon">
          <div class="tempcart_d">
            <span class="itemfoodname"><b>{{item.name}}</b></span><br>
            <span class="itemfoodnum">数量{{item.num}}</span>
            <span>单价{{item.price}}</span><br>
            <span>共<span class="itemfoodpri">{{item.price*item.num}}</span>元</span>
          </div>
        </li>
      </ul>
      <div class="money">
          付款   {{cartolprice}}元
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
  import datacart from "@/components/datainfo/datalist"
  export default {
    name:"cartlistfood",
    data(){
    return{
      cartmenufood:"",
      cartolprice:0
    }
  },
  created:function(){
    this.cartmenufood=datacart.menulist;
    console.log(this.cartmenufood);
    this.showprice();
  },
  methods:{
    showprice:function(){
      datacart.topprice=0;
      for(var i=0;i<this.cartmenufood.length;i++){
        datacart.topprice+=this.cartmenufood[i].price*this.cartmenufood[i].num;
      }
      this.cartolprice=datacart.topprice;
    }
  }
  }
</script>
<style scoped>
  .tempcart{
    width: 100%;
    height: auto;
    position: relative;
  }
  .tempcart_li{
    display: flex;
    flex-direction: row;
    padding: 5px 10px;
    line-height: 30px;
    border-bottom: 1px solid silver;
  }
  .tempcart_img{
    flex: 1;
  }
  .tempcart_d{
    margin-left: 10px;
    flex: 2;
  }
  .money{
    width: auto;
    height: 45px;
    line-height: 45px;
    text-align: center;
    color: white;
    border-radius: 10px;
    background-color: orangered;
    position: fixed;
    margin-top:15px;
    margin-right: 15px;
  }
  .itemfoodname{
    font-size: 18px;
  }
  .itemfoodnum{
    margin-right: 10px;
  }
  .itemfoodpri{
    color: orangered;
  }
</style>
