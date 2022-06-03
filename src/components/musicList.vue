<template>
  <div class="musicList">
    <div class="musicList-top">
      <h3 class="musicList-top-left">发现好歌单</h3>
      <p class="musicList-top-right">查看更多</p>
    </div>
    <div class="musicList-bottom">
      <!-- Swiper -->
    <SwiperMusicList></SwiperMusicList>
    </div>
  </div>
</template>

<script>
import SwiperMusicList from './swiper-musicList.vue';
export default {
    components: { SwiperMusicList }
}
</script>

<style lang="less" scoped>
.musicList {
  width: 7.5rem;
  padding: 0.2rem;
  margin: 0 auto;
  .musicList-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .musicList-top-left {
      font-size: 0.3rem;
      font-weight: 800;
    }
    .musicList-top-right {
      border: 1px solid #ccc;
      border-radius: 0.15rem;
      padding: 0.1rem;
      font-size: 0.2rem;
      font-weight: 400;
    }
  }
}
</style>