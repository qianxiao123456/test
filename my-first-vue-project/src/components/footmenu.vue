<template>
  <div id="footmenu">
    <ul>
      <li class="foot_li" v-for="(item,index) in bottommenu" @click="clickmenu(index)">
        <router-link :class="{colortext:item.isFull}" :to="item.action">
          <i class="iconfont" v-html="item.icon"></i><br>
          {{item.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
    export default {
      name:"footmenu",
        data(){
        return{
          bottommenu:[
            {name:"首页",action:"/#",icon:"&#xf012b;",isFull:false},
            {name:"闪购",action:"/shop",icon:"&#xf0139;",isFull:false},
            {name:"订单",action:"/s",icon:"&#xf0178;",isFull:false},
            {name:"我的",action:"/my",icon:"&#xf012d;",isFull:false}
          ]
        }
      },
    methods:{
      clickmenu:function(index){
        for(var i=0;i<this.bottommenu.length;i++){
          this.bottommenu[i].isFull=false;
        }
        this.bottommenu[index].isFull=true;
      }
    }
    }
</script>
<style>
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
  #footmenu{
    border-top: 1px solid silver;
    width: 320px;
    position: fixed;
    bottom: 0;
  }
  ul{
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .foot_li{
    list-style: none;
    float: left;
    width: 80px;
    text-align: center;
  }
  li a{
    text-decoration: none;
    color: black;
  }
  .colortext{
    color: orangered;
  }
</style>
