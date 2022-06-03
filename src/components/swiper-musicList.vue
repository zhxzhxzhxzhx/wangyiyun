<template>
  <div class='swiper-musicList'>
    <swiper :modules='modules' :slides-per-view='3' :space-between='10' @swiper='onSwiper' @slideChange='onSlideChange'>
      <swiper-slide
        v-for='(item,i) in MusicList'
        :key='i'
        @click='$router.push({path:"/musicList",query:{id:item.id}})'
      >
        <img :src='item.picUrl' :alt='item.name' />
        <p>{{item.name}}</p>
        <span>
          <svg class='icon' aria-hidden='true'>
            <use xlink:href='#icon-24gl-play' />
          </svg>
          {{getNum(item.playCount)}}
        </span>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import { getMusicList } from "../api/index";
export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      // 歌单列表
      MusicList: [],
    };
  },
  computed: {
    // 设置播放数
    getNum() {
      return function (count) {
        let num = Math.floor(count / 10000);
        return num < 1 ? count : num + "万";
      };
    },
  },
  methods: {
    // 获取歌单列表
    async getMusicList() {
      const { data: res } = await getMusicList();
      console.log('总的歌单列表: '+res);
      this.MusicList = res.result;
    },
  },
  created() {
    // 获取歌单列表
    this.getMusicList();
  },
  setup() {
    // 轮播图
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, A11y],
    };
  },
};
</script>

<style lang="less" scoped>
.swiper {
  width: 7.1rem;
  height: 2.5rem;
  overflow: hidden;
  // background-color: pink;
  .swiper-slide {
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    p {
      font-size: 0.2rem;
      height: 0.6rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      // color: red;
    }
    span {
      position: absolute;
      display: flex;
      top: 0;
      align-items: center;
      right: 0;
      color: #fff;
      font-size: 0.15rem;
      .icon {
        width: 0.2rem;
        height: 0.2rem;
        fill: #fff;
        margin-right: 0.1rem;
      }
    }
  }
}
.swiper-musicList {
  margin-top: 0.3rem;
}
</style>