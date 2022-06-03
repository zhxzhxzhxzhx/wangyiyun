<template>
  <div class='musicListTop'>
    <img :src='playList.coverImgUrl' alt class='bgcImg' />
    <div class='musicListTopNav'>
      <div class='left'>
        <svg class='icon' aria-hidden='true' @click="$router.push('/home')">
          <use xlink:href='#icon-zuojiantou' />
        </svg>
        <div class='title'>歌单</div>
      </div>
      <div class='right'>
        <svg class='icon' aria-hidden='true' style="margin-right: 0.3rem">
          <use xlink:href='#icon-41' />
        </svg>
        <svg class='icon' aria-hidden='true'>
          <use xlink:href='#icon-danlieliebiao' />
        </svg>
      </div>
    </div>
    <div class='content'>
      <div class='contentLeft'>
        <img :src='playList.coverImgUrl' alt class='contentImg' />
        <span>
          <svg class='icon' aria-hidden='true'>
            <use xlink:href='#icon-24gl-play' />
          </svg>
          {{getNum(playList.playCount)}}
        </span>
      </div>
      <div class='contentRight'>
        <h3>{{playList.name}}</h3>
        <div class='creator'>
          <img :src='playList.creator.avatarUrl' alt class='avatar' />
          <span>{{playList.creator.nickname}} ></span>
        </div>
        <div class='des'>{{playList.description}}</div>
      </div>
    </div>
    <div class="icon-list">
      <div class="list">
        <svg class='icon' aria-hidden='true' @click="$router.push('/home')">
        <use xlink:href='#icon-pinglun' />
      </svg>
      <span>{{playList.commentCount}}</span>
      </div>
      <div class="list">
        <svg class='icon' aria-hidden='true' @click="$router.push('/home')">
        <use xlink:href='#icon-fenxiang' />
      </svg>
      <span>{{playList.shareCount}}</span>
      </div>
      <div class="list">
        <svg class='icon' aria-hidden='true' @click="$router.push('/home')">
        <use xlink:href='#icon-xiazai' />
      </svg>
      <span>下载</span>
      </div>
      <div class="list">
        <svg class='icon' aria-hidden='true' @click="$router.push('/home')">
        <use xlink:href='#icon-duoxuanxuanzhong_o' />
      </svg>
      <span>多选</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["playList"],
  computed: {
    // 设置播放数
    getNum() {
      return function (count) {
        let num = Math.floor(count / 10000);
        return num < 1 ? count : num + "万";
      };
    },
  },
};
</script>

<style lang="less" scoped>
.icon {
  width: 0.6rem;
  height: 0.6rem;
  fill: #fff;
}
.musicListTop {
  padding: 0 0.2rem;
  .bgcImg {
    width: 7.5rem;
    height: auto;
    position: fixed;
    top: 0;
    right: 0;
    z-index: -1;
    filter: blur(30px);
  }
  .content {
    display: flex;
    justify-content: space-between;
    margin-top: 0.6rem;
    .contentLeft {
      position: relative;
      width: 3rem;
      height: 3rem;
      border-radius: 0.2rem;
      overflow: hidden;
      .contentImg {
        width: 100%;
        height: 100%;
      }
      span {
        position: absolute;
        top: 0;
        right: 0;
        color: #fff;
        display: flex;
        align-items: center;
        .icon {
          width: 0.2rem;
          height: 0.2rem;
          fill: #fff;
          margin-right: 0.1rem;
        }
      }
    }
    .contentRight {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 3.5rem;
      height: 3rem;
      // background-color: #ccc;
      h3 {
        font-size: 0.35rem;
        color: #fff;
      }
      .creator {
        display: flex;
        align-items: center;
        .avatar {
          border-radius: 50%;
          width: 0.6rem;
          height: 0.6rem;
          margin-right: 0.2rem;
        }
        span {
          font-size: 0.1rem;
          color: #fff;
        }
      }
      .des {
        font-size: 0.1rem;
        color: #ccc;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
  .icon-list {
    margin-top: 0.8rem;
    display: flex;
    .list {
      flex: 1;
      display: flex;
      align-items: center;
      flex-direction: column;
      .icon {
        width: 0.6rem;
        height: 0.6rem;
      }
      span {
        margin-top: 0.2rem;
        color: #fff;
      }
    }
  }
  width: 7.5rem;
  .musicListTopNav {
    height: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // background-color: #716e75;
    .left {
      display: flex;
      align-items: center;
      .title {
        margin-left: 0.3rem;
        font-size: 0.3rem;
        color: #fff;
      }
    }
  }
}
</style>