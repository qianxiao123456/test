import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import contentdetail from "@/components/detailscontent"
import faces from "@/components/faceinfo"
import cartmn from "@/components/cartlistfood"
import shoping from "@/components/shop"
import mying from "@/components/my"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/details/:parindex/:childindex",
      name: "details",
      component:contentdetail
    },
    {
      path:'/',
      name:'faced',
      component:faces
    },
    {
      path:'/cartlistfood',
      name:'cartlistfood',
      component:cartmn
    },
    {
      path:'/shop',
      name:'shop',
      component:shoping
    },
    {
      path:'/my',
      name:'my',
      component:mying
    }
  ]
})
