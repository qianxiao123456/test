<template>
<div class="facetitle">
  <div class="titleimg">
    <div class="logo">
      <img :src="seller.avatar" alt=""/>
    </div>
    <div class="logotext">
      <p class="p_text"><b>{{seller.name}}</b><span>{{seller.description}}</span></p>
      <p class="p_txt">{{seller.bulletin | selectxt}}</p>
      <p>{{seller.score}}</p>
    </div>
  </div>
  <div :class="{txt_c:true,isHeight:addClass}">
    <ul class="ullist">
      <li v-for="item in seller.supports">{{item.description}}<br></li>
    </ul>
    <i @click="changeline()" class="iconfont icon_text">&#xf0170;</i>
  </div>
  <food></food>
</div>
</template>
<script>
  import food from "@/components/food";
  export default  {
    name:"faced",
    components:{
      food:food
    },
    data(){
    return {
      seller:[],
      addClass:false
    }
  },
  created:function (){
    this.$http.get("static/data.json").then(function (res){
      this.seller=res.data.seller;
    });
  },
  methods:{
    changeline:function (){
      this.addClass=!this.addClass;
    }
  }
  }
</script>
<style scoped>
  @font-face {font-family: 'iconfont';
    src: url('../font/iconfont.eot'); /* IE9*/
    src: url('../font/iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('../font/iconfont.woff') format('woff'), /* chrome、firefox */
    url('../font/iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('../font/iconfont.svg#uxiconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
  *{
    margin: 0;
    padding: 0;
  }
  .facetitle{
    margin: 0;
    padding: 0;
    width: 320px;
  }
  .titleimg{
    width: 300px;
    height: 90px;
    padding:10px;
    display: flex;
    flex-direction: row;
    background-color: silver;
  }
  .logo{
    flex: 1;
    height: 90px;
  }
  .logotext{
    flex: 3;
    height: 90px;
    background-color: pink;
    padding-left: 10px;
  }
  .logo img{
    width: 100%;
    height: 100%;
  }
  .p_text small{
    font-size: 13px;
  }
  .p_txt{
    font-size: 13px;
    margin-top: 5px;
    line-height: 20px;
  }
  .txt_c{
    width: 320px;
    height: 35px;
    background-color: rgba(139, 69, 19, 0.35);
    position: relative;
    overflow: hidden;
    margin-top: 10px;
    z-index: 5;
    transition: all 0.3s linear;
  }
  .ullist{
    margin: 5px 10px;
    padding: 0;
  }
  .ullist li{
    width: 100%;
    list-style: none;
    text-align: left;
    line-height: 30px;
  }
  .isHeight{
    height: 120px;
  }
  .icon_text{
    position: absolute;
    top:10px;
    z-index: 4;
    right:20px;
  }
</style>
