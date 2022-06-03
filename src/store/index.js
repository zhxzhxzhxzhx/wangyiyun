import { createStore } from 'vuex'
import api from '../api/index'
export default createStore({
  state: {
    // 歌单列表
    playlist: [{al:{}}],
    // 播放第几首歌
    playCurrentIndex: 0,
    // 音乐播放暂停
    paused: true,
    // 歌词
    Lyric: '',
    // 歌曲当前时间
    currentTime: 0,
    // 歌曲定时器
    setTimeId: 0,
    // 音乐播放器显示与隐藏
    show: false
  },
  getters: {
    lyricList(state) {
      let arr = state.Lyric.split(/\n/).map((item,i)=>{
        let min = parseInt(item.slice(1,3))
        let sec = parseInt(item.slice(4,6))
        let mill= parseInt(item.slice(7,10))
        return {
          min,sec,mill,
          lyric:item.slice(11,item.length),
          item,
          time: mill+sec*1000+min*60*1000
        }
      })
      arr.forEach((item,i)=>{
        if (i === 0) {
          item.pre = 0
        }else {
          item.pre = arr[i-1].time
        }
      })
      // let arr1 = [...arr]
      // arr1.forEach((item,i)=>{
      //   item.pre = item.time
      //   if (i+1>arr1.length-1) {
      //     item.time = arr1[i].time
      //   }else {
      //     item.time = arr1[i+1].time
      //   }
      // })
      // console.log(arr1 , arr);
      return arr
    }
  },
  mutations: {
    // 获取当前歌单列表
    setPlayList(state,value){
      state.playlist = value
    },
    // 播放音乐全局
    playAudio(state) {
      
    },
    // 设置歌词
    setLyric(state,value) {
      state.Lyric = value
    },
  },
  actions: {
    // 获取歌词
    async reqLyric(content,payload) {
      const {data:res} = await api.getLyric(payload.id)
      // console.log(res.lrc.lyric);
      content.commit('setLyric',res.lrc.lyric)
    },
  },
  modules: {
  }
})
