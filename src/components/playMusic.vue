<template>
  <div class="playMusic">
    <!-- 背景 -->
    <!-- :style="{backgroundImage: `url(${ song.al.picUrl})`}" -->
    <div class="bg" :style="{backgroundImage: `url(${ song.al.picUrl})`}"></div>
    <!-- 顶部 -->
    <div class="playTop">
      <div class="left" @click="$emit('back')">
        <svg class='icon' aria-hidden='true' >
          <use xlink:href='#icon-zuojiantou' />
        </svg>
      </div>
      <div class="content" ref="content">
          <div class="title" ref="title">{{song.al.name}}</div>
          <div class="author" v-if="song.ar">{{song.ar[0].name}}</div>
      </div>
      <div class="right">
        <svg class='icon' aria-hidden='true' >
          <use xlink:href='#icon-fenxiang' />
        </svg>
      </div>
    </div>
    <!-- 内容 -->
    <div class="playContent" v-if="visible" @click="visible=!visible">
      <img :class="{active:!$store.state.paused}" src="../assets/img/needle-ab.png" alt="" >
      <img src="../assets/img/d7e4e3a244701ee85fecb5d4f6b5bd57.png" alt="">
      <img :src="song.al.picUrl" alt="">
    </div>
    <!-- 歌词 -->
    <div class="playLyric" v-if="!visible" @click="visible=!visible" ref="playLyric">
    <p :class="{active:getStateFn(item.time,item.pre)}" v-for="(item,i) in $store.getters.lyricList" :key="i">{{item.lyric}}</p>  
    </div>
    <!-- 进度条 -->
    <div class="progress"></div>
    <!-- 底部 -->
    <div class="playFooter">
      <svg class='icon' aria-hidden='true' >
          <use xlink:href='#icon-shuaxin' />
        </svg>
        <svg class='icon' aria-hidden='true' @click="$store.state.playCurrentIndex >= 1 ? $store.state.playCurrentIndex-- : $store.state.playCurrentIndex">
          <use xlink:href='#icon-shangyishoushangyige' />
        </svg>
        <svg class='icon active' aria-hidden='true' @click="play" v-if="$store.state.paused">
          <use xlink:href='#icon-bofang2' />
        </svg>
          <svg class='icon active' aria-hidden='true' @click="play" v-else>
          <use xlink:href='#icon-zanting1' />
        </svg>
        <svg class='icon' aria-hidden='true' @click="$store.state.playCurrentIndex >= $store.state.playlist.length - 1 ? $store.state.playCurrentIndex : $store.state.playCurrentIndex++">
          <use xlink:href='#icon-xiayigexiayishou' />
        </svg>
        <svg class='icon' aria-hidden='true' >
          <use xlink:href='#icon-duoxuankuang' />
        </svg>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['song','playAudio'],
  data() {
    return {
      len: 0,
      visible: true
    }
  },
  computed: {
    ...mapState(['currentTime']),
  },
  created() {
    console.log('当前播放的歌曲: '+this.song);
  },
  watch:{
    currentTime(newValue) {
      let offsetHight = document.querySelector('p.active').offsetTop
      this.$refs.playLyric.scrollTop = offsetHight
    }
  },
  methods: {
    play(){
      this.playAudio()
    },
    getStateFn(nowtime,pretime){
      return this.currentTime*1000 <= nowtime && this.currentTime*1000 >= pretime
    }
  }
}
</script>

<style lang="less" scoped>
.playMusic {
  position: fixed;
  top: 0;
  left: 50%;
  margin-left: -50%;
  width: 102vw;
  height: 103vh;
  background-color: #666;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 102vw;
    height: 103vh;
    background-size: auto 100%;
    background-position: center;
    filter: blur(20px);
    z-index: -1;
    // background-color: #fff;
  }
  .playTop {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    padding: 0.3rem 0.2rem;
    justify-content: space-between;
    align-items: center;
    width: 7.5rem;
    height: 2rem; 
    .left {
      display: flex;
      align-items: center;
      height: 100%;
      .icon {
      fill: #fff;
      width: 0.4rem;
      height: 0.4rem;
       }
      
    }
    .content {
        // width: 4rem;
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        overflow: hidden;
        .title {
          align-self:flex-end;
          margin-bottom: 0.2rem;
          height: 0.5rem;
          width: 100%;
          // width: fit-content;
          color: #fff;
          font-size: 0.4rem;
          text-align: right;
          animation: move 5s infinite;
        }
        @keyframes move {
          to {
            transform: translateX(-100%);
          }
        }
        .author {
          height: 0.3rem;
          color: #ccc;
          font-size: 0.2rem;
          text-align: center;
        }
      }
    .right {
      .icon {
        fill: #fff;
        width: 0.4rem;
        height: 0.4rem;
      }
    }
  }
  .playContent {
    position: absolute;
    margin-top: 2rem;
    // background-color: pink;
    width: 7.5rem;
    height: 7.5rem;
    img {
      &:nth-child(1) {
        position: absolute;
        top: 0;
        left: 45%;
        width: 2rem;
        height: auto;
        transform-origin: 0.3rem 0;
        transform: rotate(-30deg);
        transition: all .3s;
        z-index: 100;
      }
      &:nth-child(1).active {
        transform: rotate(10deg);
      }
      &:nth-child(2) {
        position: absolute;
        top: 1rem;
        left: 50%;
        transform: translate(-50%);
        width: 5.5rem;
        height: 5.5rem;
      }
      &:nth-child(3){
        width: 3.5rem;
        height: 3.5rem;
        position: absolute;
        top: 2rem;
        left: 50%;
        transform: translate(-50%);
        border-radius: 50%;
      }
    }
  }
  // 歌词
  .playLyric {
    position: absolute;
    width: 7.5rem;
    height: 9.5rem;
    margin-top: 2rem;
    // background-color: pink;
    overflow: scroll;
    text-align: center;
    font-size: 0.4rem;
    color: #fff;
    padding: 0.1rem 0.2rem;
    .active {
      color: red
    }
  }
  .playFooter {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    width: 7.5rem;
    height: 1.5rem;
    // background-color: pink;
    padding: 0 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      fill: #fff;
      width: 0.5rem;
      height: 0.5rem;
    }
    .active{
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>