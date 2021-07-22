<template>
  <div class='main'>
    <div class='title-a'>
      位置：模拟考试
    </div>
    <div class='ksCon'>
    <div class='ksLeft'>
      <div class='menuTil'>
        车型选择
      </div>
      <div class='car-type' :class='{menuactive:isActive===1?true:false}' @click='active(1)'>
          <span class='menuIcon men-xc'  ></span>
          <span class=''>小车</span>
      </div>
      <div class='car-type men-hc' :class='{menuactive:isActive===2?true:false}' @click='active(2)' >
          <span class='menuIcon'></span>
          <span class=''>货车</span>
      </div>
      <div class='car-type' :class='{menuactive:isActive===3?true:false}' @click='active(3)'>
          <span class='menuIcon men-kc'></span>
          <span class=''>客车</span>
      </div>
      <div class='car-type' :class='{menuactive:isActive===4?true:false}' @click='active(4)'>
          <span class='menuIcon'></span>
          <span class=''>摩托车</span>
      </div>
    </div>
    <div class='ksRight'>
      <div class='km-title'>
        <div @click='activeheader(6)' :class='{menuactive:isHeaderAcitve===6?true:false}'>科目一</div>
        <div @click='activeheader(7)' :class='{menuactive:isHeaderAcitve===7?true:false}'>科目四</div>
      </div>
      <div class='ks'>
        <div class='ks-tm'>
          <div style='width:50px;height:50px;margin-bottom:5px'>
            <span class='menuIcon men-sjlx'></span>
          </div>
          <div style='font-size:18px'>模拟考试</div>
          <div style='    margin-top: 5px; color: #666;font-size: 14px;'>模拟在线考试</div>
        </div>
        <!-- <div class='ks-tm'>
          <div style='width:50px;height:50px;margin-bottom:5px'>
            <span class='menuIcon men-sjlx'></span>
          </div>
          <div style='font-size:18px'>顺序考试</div>
          <div style='    margin-top: 5px; color: #666;font-size: 14px;'>模拟在线考试</div>
        </div> -->
      </div>
    </div>
    </div>
    <div>
       <router-view></router-view>
    </div>
    <!--<div class="left-hearder">
     
    </div>
    <div class='top-hearder'>
        <router-link to="/c"> c</router-link>
        <router-link to="/d"> d</router-link>
    </div> -->
  </div>
</template>
<script>
import { onMounted, reactive, ref, toRefs } from 'vue'


export default {
  name:'home',
  setup() {
    const state = reactive({
      isActive:'',
      isHeaderAcitve:''
    })
    const  active=(item)=>{
      state.isActive=item
    }
    const  activeheader=(item)=>{
      state.isHeaderAcitve=item
    }
    return {
      ...toRefs(state),
      active:active,
      activeheader:activeheader
    }
  },
}
</script>

<style scoped>
.menuactive {
  background: #f2f2f2!important;
  color: #24c27d;
}
.title-a {
  text-align:left;
  width: 100%;
  margin: 10px 0px;
}
.main{
}
.left-hearder{
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
}
.top-hearder {
  width: calc(100% - 100px);
}
.ksLeft {
  width: 240px;
}
.menuTil {
  width: 240px;
  height: 50px;
  background: #24c27d;
  color: #fff;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  font-weight: bold;
}
.car-type {
  width: 240px;
  height: 68px;
  line-height: 68px;
  border: 1px solid #f2f2f2;
  border-top: 0;
  box-sizing: border-box;
  cursor: pointer;
  background: #ffffff;
  display: flex;
  align-items: center;
}
.menuIcon {
  width: 46px;
  height: 46px;
  background: url("../assets/carType.png") no-repeat;
  margin: 0 30px;
  
}
.men-xc{
background-position: 0 -46px;
}
.men-hc{
background-position: 0 -184px;
}
.men-kc{
background-position: 0 -138px;
}
.ksLeft  span {
    display: inline-block;
    vertical-align: middle;
}
.ksRight{
  float: right;
    width: 940px;
    background: #fff;
    border: 1px solid #f2f2f2;
    margin-left: 15px;
}
.km-title {
  display:flex;
}
.km-title div{
    height:50px;
    border-bottom: 1px solid #f2f2f2;
    text-align: center;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #f2f2f2;
}
.ksCon{
  display: flex;
}
.ks-tm {
  width:234px;
  height:169px;
  border: 1px solid #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.ks {
  display: flex;
}
.men-sjlx {
  background-position: 0 -395px;
  width: 50px;
  height: 50px;
  display: block;
  margin: 0!important;

}
.main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>