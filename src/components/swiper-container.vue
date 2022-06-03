<template>
  <div>
    <swiper
      :modules='modules'
      :slides-per-view='1'
      :space-between='50'
      :pagination='{ clickable: true }'
      @swiper='onSwiper'
      @slideChange='onSlideChange'
      :autoplay=true
    >
      <swiper-slide v-for="(item,i) in imgs" :key="i">
        <img :src="item.pic" alt="">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import {  Pagination, A11y , Autoplay} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle"
import {getBannerList} from '../api/index'
export default {
  components: { Swiper, SwiperSlide },
  data(){
    return {
      // 轮播图列表
      imgs: []
    }
  },
  methods: {
    // 获取轮播图列表
    async getBannerList() {
      const {data:res} = await getBannerList()
      console.log('轮播图列表: '+res);
      this.imgs = res.banners
    }
  },
  created(){
    // 获取轮播图列表
    this.getBannerList()
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
      modules: [Pagination, A11y, Autoplay],
    };
  },
}
</script>

<style lang="less" scoped>
.swiper {
  width: 7.1rem;
  height: 2.8rem;
  // background-color: pink;
  .swiper-slide {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
/deep/ .swiper-pagination-bullet-active {
  background-color: orange;
}
</style>