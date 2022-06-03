<template>
  <div>
    <router-view/>
    <PlayController></PlayController>
  </div>
</template>

<script>
import PlayController from './components/play-controller.vue';
export default {
  components: {
    PlayController
}
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon {
  width: 0.3rem;
  height: 0.3rem;
}
</style>
