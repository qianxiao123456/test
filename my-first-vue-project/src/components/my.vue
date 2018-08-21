<template>
  <div>
    <div class="my_title">
      <img class="my_user" src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png"/>
      <span class="my_title_right">></span>
    </div>
    <div class="my_nav">
      <ul class="my_ul">
        <li>美团券</li>
        <li>评价</li>
        <li>收藏</li>
      </ul>
      <ul class="my_ul_l">
        <li>(20)</li>
        <li>(10)</li>
        <li>(15)</li>
      </ul>
    </div>
    <div class="bottom_ul">
      <ul class="bottom_list">
        <li>团购订单<span>1></span></li>
        <li>预定订单<span>4></span></li>
        <li>上门订单<span>></span></li>
        <li>我的钱包<span>账户余额：￥0></span></li>
        <li>我的评价<span>查看我的评价足迹></span></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name:"my"
  }
</script>
<style scoped>
  .my_title{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid silver;
    padding: 10px 20px;
  }
 .my_user{
   display: inline-block;
   width: 50px;
   height: 50px;
   border-radius: 50%;
 }
  .my_title_right{
    font-size: 20px;
    font-weight: bold;
    float: right;
  }
  .my_ul{
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .my_ul li{
      float: left;
    width: 100px;
    height: 35px;
    line-height: 35px;
    list-style: none;
    text-align: center;
  }
  .my_ul_l{
    margin: 0;
    padding: 0;
    overflow: hidden;
    border-bottom: 1px solid silver;
  }
  .my_ul_l li{
    float: left;
    width: 100px;
    height: 15px;
    font-size: 15px;
    line-height: 15px;
    list-style: none;
    text-align: center;
  }
  .bottom_list li{
    list-style: none;
    height: 55px;
    padding: 0 10px;
    line-height: 55px;
    border-top: 1px solid silver;
    margin-top: 10px;
    border-bottom: 1px solid silver;
    position: relative;
  }
  .bottom_list li span{
    position: absolute;
    right:10px;
    font-size: 13px;
    color: gray;
  }
</style>
