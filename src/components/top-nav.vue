<template>
  <div class='top-nav-container'>
    <div class='top-nav-left'>
      <svg class='icon' aria-hidden='true'>
        <use xlink:href='#icon-danlieliebiao' />
      </svg>
    </div>
    <div class='top-nav-center'>
      <span>我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <div class='top-nav-right'>
      <svg class='icon' aria-hidden='true' @click="$router.push('/search')">
        <use xlink:href='#icon-sousuo' />
      </svg>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.top-nav-container {
  width: 7.5rem;
  height: 1rem;
  padding: 0 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  .icon {
    width: 0.5rem;
    height: 0.5rem;
  }
  .top-nav-center {
    display: flex;
    width: 3.5rem;
    justify-content: space-between;
    font-family: '微软雅黑';
    .active {
      font-weight: 800;
    }
  }
}
</style>