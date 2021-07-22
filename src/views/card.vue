<template>
  <div class='main-center'>
    <div class='main'>
    <div class='left'>
      <div class='jxydt'>
        <spna class='tsxx-span'>驾校一点通</spna>
        <span>帅涛考台</span>
      </div>
      <div class='ksxi'>
        <span class='tsxx-span'>考生信息</span>
        <div>
          <img src="../assets/b.png" style='width:100px;height:100px;margin-bottom:10px'/>
          <div class='m-bottom'>
            <span class='n-xt'>
              <span class='' style="display: flex;justify-content: space-between;">
                <span>姓</span>
                <span>名：</span>
              </span>
            </span>
            <span>学员</span>
          </div>
          <div class='m-bottom'>
            <span class='n-xt'>考试类型:</span>
            <span>小车类</span>
          </div>
          <div class='m-bottom'>
            <span class='n-xt'>考试科目:</span>
            <span>科目一</span>
          </div>
        </div>
      </div>
    </div>
    <div class='center'>
      <div class='question'>({{ cardJson.item3==''?'判断题':'单选题'}}) {{current<99?(current+1):100}} 、{{cardJson.question}}</div>
      <div class='no-main'>
        <div class="flag">A:<span class='question-span'>{{cardJson.item1?cardJson.item1:'正确'}}</span></div>
        <div class="flag">B:<span class='question-span'>{{cardJson.item2?cardJson.item2:'错误'}}</span></div>
        <div class="flag" v-if="cardJson.item3">C:<span class='question-span'>{{cardJson.item3}}</span></div>
        <div class="flag" v-if="cardJson.item4">D:<span class='question-span'>{{cardJson.item4}}</span></div>
        <!-- <div style="text-align:left;margin-top: 30px;">
          <p>官方分析</p>
          <span>
            {{cardJson.explains.replace(/”/g,"")}}
          </span>
        </div> -->
      </div>
      <div class='no-bottom
      '>
        <div>
          <span>你的选项是：</span>
          <span style='margin-left:10px'>{{answerEn}}</span>
          <span style='margin-left:5px'>正确答案是：</span>
          <span style='margin-left:10px'>{{cardJson.answer}}</span>
        </div>
        <div class='option'>
          <div>请选择:</div>
          <div>
            <span class='aswer' @click='answer(1,"A")'>A</span>
            <span class='aswer' @click='answer(2,"B")'>B</span>
            <span class='aswer' v-if="cardJson.item3" @click='answer(3,"C")'>C</span>
            <span class='aswer' v-if="cardJson.item4" @click='answer(4,"D")'>D</span>
          </div>
        </div>
      </div>
    </div>
    <div class='right'>
      <div class='nosel' v-for="(item,index) in cardJsonArr" :key='index' :class='`${item.darkMode} ${index==current?"activelan":""}`'  @click='answerQuestion(index)'>
        <span >{{index+1}}</span>
      </div>
    </div>
    </div>
    <div class='center-time'>
      <div class='left-time'>
          <span class='tsxx-span' style="color: #000000;font-size: 14px;font-weight: 300;line-height:20px">剩余时间</span>
          {{timeHtml}}
      </div>
      <div class='right-last'>
          <div class='tsxx'>
            <span class='tsxx-span'>提示信息</span>
             <span v-if="cardJson.item3">
              单选题,请在备选答案中选择你认为正确的答案
            </span>
            <span v-else>
              判断题；请判断对错
            </span>
          </div>
          <div class='tj'>
            <span class='btn' @click='add("1")'>上一题</span>
            <span class='btn' @click='add("2")'>下一题</span>
            <span class='btn'>交卷</span>
          </div>
      </div>
    </div>
    <div class='bottom-img' v-if="cardJson.url">
        <span class='tsxx-span'>图片信息</span>
        <img :src='cardJson.url.replace(/\//g,"/")'  class='img-big'/>
    </div>
  </div>
  
</template>
<script>
import { defineComponent, onMounted, reactive, ref, toRefs} from 'vue'
import card from  '../common/card.json'
console.log(card);
export default defineComponent({
  setup() {
    const divs = ref([])
    const state = reactive({
        cardJsonArr: card.result,
        cardJson:card.result[0],
        current: 0,  // 是第几个
        answers:'', // 选择答案
        answerEn:'',
        darkMode:'',
        timeHtml:''
    })
    const answer = (item,EN)=>{
      debugger;
      if(state.current <100){
        if(item==state.cardJsonArr[state.current].answer){
          state.cardJsonArr[state.current].darkMode='activelv'
        }else{
          state.cardJsonArr[state.current].darkMode='active'
        }
        state.answerEn=EN
        state.answers=item;
        if(state.current<100){
          state.current++;
        }
        if(state.current<=99){
          state.cardJson=card.result[state.current]
        }
       
      }else {
        alert('答题成功')
      }
      
    }
    const answerQuestion=(current)=>{
      state.current=current;
      state.cardJson=card.result[current];
    }
    const add=(item)=>{
      
      debugger;
      if(item==1){
        if(state.current==0){
          return 
        }
        state.current--;
      }else{
        if(state.current==99){
          return 
        }
        state.current++;
      }
      state.cardJson=card.result[state.current];
    }
    onMounted(() => {
      ountDown( 2700,function( msg ) { 
        state.timeHtml=msg
      })
    });
    const ountDown=( maxtime,fn )=> {  
      var timer = setInterval(function() { 
        if( !!maxtime ){  
        var minutes = Math.floor((maxtime % 3600) / 60), 
        seconds = Math.floor(maxtime%60), 
        msg = minutes+":"+(seconds<10?('0'+seconds):seconds);
        fn( msg ); 
        --maxtime;  
      } else {  
        clearInterval( timer ); 
        fn("00:00"); 
      }  
      }, 1000); 
    } 
    
   
    return {
      ...toRefs(state),
      answer:answer,
      answerQuestion:answerQuestion,
      add:add
    }
  },
})
</script>
<style >
.main-center{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}
.main {
  width: 1200px;
  /* margin: 0 auto; */
  min-height: 300px;
  display: flex;
  /* position: relative; */
  /* top: 50%; 偏移 */
  /* transform: translateY(-50%); */
}
.left {
  width:200px;
  display: flex;
  flex-direction: column;
}
.right {
  width:410px;
  border:solid 1px  #d8d8d8;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.center {
  flex: 1;
  border:solid 1px  #d8d8d8;
  margin: 0px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px 20px;
 
}
.nosel{
  width: 40px;
  height: 40px;
  border-bottom:solid 1px  #d8d8d8;
  border-right:solid 1px  #d8d8d8;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.flag {
  text-align: left;
}
.no-main {
  flex:1
}
.no-bottom {
  height:50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.aswer{
  width: 30px;
  height: 24px;
  line-height: 24px;
  float: left;
  font-size: 16px;
  border: 1px solid grey;
  margin: 0 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
  display: block;
}
.option {
  display: flex;
}
.question {
  text-align: left;
  margin-bottom: 10px;
}
.question-span {
  margin-left: 10px;
}
.active {
  background: red;
  color:#ffffff;
}
.activelv {
  background: #3da600;
  color:#ffffff;
}
.activelan {
  background: #1D6BD0;
  color:#ffffff;
}
.left-time {
  width: 202px;
  height: 70px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  text-align: center;
  line-height: 70px;
  color: #24c27d;
  font-size: 18px;
  font-weight: bold;
  position: relative;
}
.center-time {
  display: flex;
  margin-top: 20px;
  width: 1200px;
}
.right-last {
  flex:1;
  margin-left: 15px;
  display: flex;
}
.tsxx {
    width: 295px;
    height: 70px;
    padding: 20px 12px 10px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    color: #4a4a4a;
    font-size: 16px;
    line-height: 22px;
    position: relative;
    text-align: left;
}
.btn {
    display: block;
    width: 80px;
    height: 36px;
    float: left;
    border-radius: 3px;
    border: 1px solid grey;
    font-size: 18px;
    color: #4a4a4a;
    line-height: 36px;
    text-align: center;
    margin-right: 10px;
    box-sizing: border-box;
    cursor: pointer;
    text-decoration: none;
}
.tj{
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.tsxx-span{
   position: absolute;
    top: -10px;
    left: 20px;
    background: rgb(247, 249, 250);
    display: block;
    padding: 0px 14px;
}
.bottom-img {
  width:1200px;
  height:280px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  margin-top: 20px;
  position: relative;
}
.img-big {
  width: 360px;
  height: 100%;
}
.jxydt {
  height: 82px;
  width: 100%;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.ksxi {
  flex: 1;
  margin-top: 20px;
  border: 1px solid #ddd;
  position: relative;
  padding-top: 30px;
}
.m-bottom {
  margin-bottom: 10px;
}
.n-xt {
  display: inline-block;
  width:70px;
  margin-right: 10px;
}
</style>
