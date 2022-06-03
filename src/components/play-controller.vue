<template>
  <div class='play-container'>
    <div class='left' @click="show=!show">
      <img :src="playlist[playCurrentIndex].al.picUrl" alt="">
      <div class='content'>
        <div class='article'>{{playlist[playCurrentIndex].name}}</div>
        <div class='tips'>横滑可以切换上下首</div>
      </div>
    </div>
    <div class="right">
       <svg class='icon' aria-hidden='true' style="margin-right: 0.3rem" @click="playAudio" v-if="$store.state.paused">
          <use xlink:href='#icon-bofang' />
        </svg>
        <svg class='icon' aria-hidden='true' style="margin-right: 0.3rem" @click="playAudio" v-else>
          <use xlink:href='#icon-zanting' />
        </svg>
         <svg class='icon' aria-hidden='true'>
          <use xlink:href='#icon-24gl-playlistMusic' />
        </svg>
    </div>
    <PlayMusic @back="$store.state.show=!$store.state.show" v-show="$store.state.show" :song="playlist[playCurrentIndex]" :playAudio="playAudio"></PlayMusic>
    <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"></audio>
  </div>
</template>

<script>
import { mapState, mapMutations ,mapActions} from 'vuex';
import PlayMusic from './playMusic.vue';
// import eventBus from '../api/eventBus.ts'
export default {
  computed: {
    ...mapState(['playlist','playCurrentIndex'])
  },
  created(){
  },
  mounted() {
  },
  methods: {
    ...mapMutations(['playAudio']),
    // 每隔一秒更新一次时间
    updateTime() {
      this.$store.state.setTimeId = setInterval(()=>{
        this.$store.state.currentTime = this.$refs.audio.currentTime
        // console.log(this.$store.state.currentTime);
        },500)
    },
      // 播放音乐
    playAudio() {
      if(this.$store.state.paused){
        this.$refs.audio.play()
        this.$store.state.paused = !this.$store.state.paused
        this.updateTime()
      }else {
        this.$refs.audio.pause()
        this.$store.state.paused = !this.$store.state.paused
        clearInterval(this.$store.state.setTimeId)
      }
    },
    }
  ,
  updated() {
    // 获取歌词
    this.$store.dispatch('reqLyric',{id: this.playlist[this.playCurrentIndex].id})
  },
  components:{ PlayMusic }
};
</script>

<style lang="less" scoped>
.play-container {
  width: 7.5rem;
  height: 1rem;
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: -3.75rem;
  border-top: 1px solid #ccc;
  // 会引发fix定位问题
  // transform: translateX(-50%);
  background-color:#fff;
  z-index: 999;
  display: flex;
  padding: 0 0.2rem;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
    img {
      width: 0.5rem;
      height: 0.5rem;
      margin-right: 0.25rem;
    }
    .article {
      margin-bottom: 0.1rem;
      font-size: 0.3rem;
      color: #000;
    }
    .tips {
      font-size: 0.2rem;
      color: #666;
    }
  }
  .right {
    .icon {
      width: 0.5rem;
      height: 0.5rem;
    }
  }
}
</style>