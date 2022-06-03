<template>
  <div class='icon-con'>
      <div class='icon-list'>
      <svg class='icon' aria-hidden='true'>
        <use xlink:href='#icon-meirituijian' />
      </svg>
      <span>每日推荐</span>
    </div>
    <div class='icon-list'>
      <svg class='icon' aria-hidden='true'>
        <use xlink:href='#icon-luyinji' />
      </svg>
      <span>私人FM</span>
    </div>
    <div class='icon-list'>
      <svg class='icon' aria-hidden='true'>
        <use xlink:href='#icon-gedan' />
      </svg>
      <span>歌单</span>
    </div>
    <div class='icon-list'>
      <svg class='icon' aria-hidden='true'>
        <use xlink:href='#icon-paixing' />
      </svg>
      <span>排行榜</span>
    </div>
    <div class='icon-list'>
      <svg class='icon' aria-hidden='true'>
        <use xlink:href='#icon-zhibo' />
      </svg>
      <span>直播</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.icon-con {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem;
  width: 7.5rem;
  margin: 0 auto;
  a {
    font-size: 0.28rem;
    text-decoration: none;
    color: #000;
  }
  .icon-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
      width: 1rem;
      height: 1rem;
      margin-bottom: 0.1rem;
    }
    span {
      font-size: 0.28rem;
    }
  }
}
</style>