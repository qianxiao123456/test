<template>
  <div>
  <div class="foodli">
    <div class="left" ref="menuWrapper">
      <ul class="foodul">
        <li class="foodlist" v-for="food in foodinfo" @click="selectMenu(index)">{{food.name}}</li>
      </ul>
    </div>
    <div class="right" ref="foodsWrapper">
        <ul>
          <li v-for="(foodone,indexm) in foodinfo">
            <ul>
              <li class="foodpr food-list-hook" v-for="(foodtwo,index) in foodone.foods">
                <div class="foodleft">
                  <router-link :to="{name:'details',params:{parindex:indexm,childindex:index}}"><img class="foodimg" :src="foodtwo.icon"></router-link>
                </div>
                <div class="foodright">
                  <span class="foodname">{{foodtwo.name | xuanname}}</span><br>
                  <span class="foodprice">￥{{foodtwo.price}}</span>
                  <span class="foodsell">（月销：{{foodtwo.sellCount}}）</span>
                  <div class="cart">
                    <span v-show="alldata[indexm].content[index].showfoods" class="jian"  @click="btnjianfun(indexm,index)">-</span>
                    <span v-show="alldata[indexm].content[index].showfoods">{{alldata[indexm].content[index].num}}</span>
                    <span class="jia" @click="btnjiafun(indexm,index)">+</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
    </div>
  </div>
  <div class="cartlist">
    <div>总计：{{allprice}}￥</div>
    <div><router-link to="/cartlistfood">去结算</router-link></div>
  </div>
  </div>
</template>
<script>
  import bScroll from "better-scroll";
  import datalistinfo from "@/components/datainfo/datalist";
  export default {
    name:"food",
    filters:{
      xuanname:function(value){
        if(value==undefined) return;
        if(value.length>5){
          return value.substr(0,5)+"...";
        }
        return value;
      }
    },
    data(){
    return{
      foodinfo:[],
      alldata:"",
      allprice:0
    }
  },
    created:function(){
     this.$http.get("static/data.json").then(function(res){
       this.foodinfo=res.data.goods;
       for(var i=0;i<this.foodinfo.length;i++){
         datalistinfo.data.push({
           id:i,
           content:[]
         })
         for(var k=0;k<this.foodinfo[i].foods.length;k++){
            datalistinfo.data[i].content.push({
              name:this.foodinfo[i].foods[k].name,
              price:this.foodinfo[i].foods[k].price,
              icon:this.foodinfo[i].foods[k].icon,
              showfoods:false,
              num:0,
            })
         }
       }
       this.alldata=datalistinfo.data;
     });
       this.$nextTick(function (){
         //发生更新后要执行的事件
         this._initScroll()
       })
    },
  methods:{
    selectMenu:function (index){
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
      let el = foodList[index]
      this.foodsScroll.scrollToElement(el,300)
    },
    _initScroll:function (){
      this.meunScroll = new bScroll(this.$refs.menuWrapper, {
        click:true
      })
      this.foodsScroll = new bScroll(this.$refs.foodsWrapper, {
        click:true
      })
    },
    btnjianfun:function(mindex,index){
      this.alldata[mindex].content[index].num--;
      if(this.alldata[mindex].content[index].num<1){
        this.alldata[mindex].content[index].showfoods=false;
      }
      this.cartfood(this.alldata[mindex].content[index]);
      this.totleprice();
    },
    btnjiafun:function(mindex,index){
      this.alldata[mindex].content[index].num++;
      this.alldata[mindex].content[index].showfoods=true;
      this.cartfood(this.alldata[mindex].content[index]);
      this.totleprice();
    },
    cartfood:function(obj){
      for(var i=0;i<datalistinfo.menulist.length;i++){
        if(datalistinfo.menulist[i].name==obj.name){
          datalistinfo.menulist[i].num=obj.num;
          if(datalistinfo.menulist[i].num<=0){
            datalistinfo.menulist.splice(i,i+1);
          }
          return;
        }
      }
         datalistinfo.menulist.push(obj);
    },
    totleprice:function(){
//      datalistinfo.totlepri=0;
      for(var i=0;i<datalistinfo.menulist.length;i++){
        datalistinfo.totlepri+=datalistinfo.menulist[i].num*datalistinfo.menulist[i].price;
      }
      this.allprice=datalistinfo.totlepri;
    }
    }
  }
</script>
<style scoped>
  body{
    margin: 0;
    padding: 0;
  }
  .foodli{
    width: 320px;
    overflow: hidden;
    height: auto;
    border-bottom: 1px solid silver;
    display: flex;
    flex-direction: row;
  }
  .left{
    flex: 2;
    overflow: hidden;
    height: 400px;
    border-right: 1px solid silver;
  }
  .right{
    flex: 5;
    height: 400px;
    overflow: hidden;
  }
  .foodlist{
      height: 40px;
      line-height: 40px;
      font-size:small;
      white-space: nowrap;
      overflow: hidden;
      border-bottom: 1px solid silver;
    }
    .foodpr{
      height: 60px;
      border-bottom: 1px solid silver;
      display: flex;
      flex-direction: row;
      padding: 5px 10px;
    }
    .foodleft{
      flex: 2;
    }
    .foodright{
      flex: 5;
      margin-left: 10px;
    }
  .foodimg{
    max-width: 100%;
  }
  .foodname{
    font-size: 15px;
  }
  .foodprice{
    color: red;
  }
  .foodsell{
    font-size: 13px;
  }
  .cart{
    float: right;
  }
  .jian{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    line-height: 20px;
    text-align: center;
    background-color: silver;
  }
  .jia{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ff8713;
    line-height: 20px;
    text-align: center;
  }
  .cartlist{
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
  }
  .cartlist>div{
    flex: 1;
    font-size: 15px;
    line-height: 35px;
    text-align: center;
    color: white;
    height: 35px;

  }
  .cartlist>div:nth-child(1){
    background-color: silver;
  }
  .cartlist>div:nth-child(2){
    background-color: #fa9440;
  }
  .cartlist>div:nth-child(2) a{
    text-decoration: none;
    color: white;
  }
</style>

