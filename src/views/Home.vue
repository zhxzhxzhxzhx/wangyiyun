<template>
  <div class='home-container'>
    <TopNav></TopNav>
    <SwiperContainer></SwiperContainer>
    <IconCon></IconCon>
    <MusicList></MusicList>
  </div>
</template>

<script>

import TopNav from "@/components/top-nav.vue";
import SwiperContainer from "../components/swiper-container.vue";
import IconCon from "@/components/icon-con.vue";
import MusicList from "../components/musicList.vue";
export default {
  components: { TopNav, SwiperContainer, IconCon, MusicList },
};
</script>

<style lang="less" scoped>


</style>