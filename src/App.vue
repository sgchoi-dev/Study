<template>
  <div id="app">
    <div class="black-bg" v-if="modalOpen">
      <div class="white-bg">
        <h4>상세페이지임</h4>
        <p>상세페이지 내용임</p>
        <button @click="closeModal">닫기</button>
      </div>
    </div>

    <div class="menu">
      <a v-for="menu in menus" :key="menu" href="javascript:">{{ menu }}</a>
    </div>

    <div v-for="(item, index) in oneRoomData" v-bind:key="item.id" class="list_w">
      <img class="room-img" :src="oneRoomData[index].image" alt="">
      <h4 @click="modalOpen=true">{{ oneRoomData[index].title }}</h4>
      <p>{{ oneRoomData[index].price }} 원</p>
      <button @click="plusCount(index)">허위매물신고</button> <span>신고수 : {{ reportCount[index] }}</span>
    </div>
  </div>
</template>

<script>

import dataSample from './assets/oneroomdata.js';

let reportCountArr = [];
for(let i = 0; i < dataSample.length; i++){
  reportCountArr.push(0);
}

export default {
  name: 'App',
  data(){
    return {
      oneRoomData : dataSample,
      modalOpen: false,
      reportCount: reportCountArr,
      menus: ['Home', 'Shop', 'About'],
    }
  },
  methods: {
    closeModal(){
      this.modalOpen = false
    },
    plusCount(index){
      this.$set(this.reportCount, [index], this.reportCount[index]+1);
    }
  },
}
</script>

<style>
body {margin: 0; text-align: center;}
div {box-sizing: border-box;}

.black-bg {position: fixed; padding: 20px; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5);}
.white-bg {width: 100%; padding: 20px; background: white; border-radius: 8px;}

.menu {padding: 15px; border-radius: 5px; background: darkslateblue;}
.menu a {color: white; padding: 10px;}

.list_w {margin-top: 50px;}
.list_w .room-img {max-width: 450px;}
</style>
