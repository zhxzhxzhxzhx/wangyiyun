<template>
  <div class="musicListContent">
    <div class="musicListContentTop">
      <div class="left">
        <svg class='icon' aria-hidden='true'>
          <use xlink:href='#icon-bofang' />
        </svg>
        <div class="all">
          <h3>播放全部</h3>
          <span>(共{{playList.tracks.length}}首)</span>
        </div>
      </div>
      <div class="right">
          <el-button type="danger" round>+  收藏({{getNum(playList.subscribedCount)}})</el-button>
      </div>
    </div>
    <div class="list">
      <div class="item" v-for="(item,i) in playList.tracks" :key="item.key" @click="changeIndex(i)">
        <div class="left">
          <div class="index">{{i+1}}</div>
          <div class="content">
            <div class="title">{{item.name}}</div>
            <div class="other">
              <div class="author">{{item.ar[0].name}}</div>
              <div class="album">{{item.al.name}}</div>
            </div>
          </div>
        </div>
        <div class="right">
          <svg class='icon' aria-hidden='true' style="margin-right: 0.3rem" v-if="item.mv">
            <use xlink:href='#icon-bofang1' />
          </svg>
          <svg class='icon' aria-hidden='true'>
            <use xlink:href='#icon-danlieliebiao' />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['playList'],
  computed: {
    // 设置播放数
    getNum() {
      return function (count) {
        let num = Math.floor(count / 10000);
        return num < 1 ? count : num + "万";
      };
    },
  },
  setup(){
    
  },
  mounted(){
    
  },
  methods: {
    changeIndex(i){
      this.$store.state.playCurrentIndex = i
      console.log('当前播放第几首歌: '+this.$store.state.playCurrentIndex);
      this.$nextTick(()=>{
       this.$store.state.show = true
      })
    },
  },

}
</script>

<style lang="less" scoped>
.musicListContent {
  width: 7.5rem;
  padding: 0 0.2rem;
  margin-top: 0.8rem;
  background-color: #fff;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  .musicListContentTop {
    width: 100%;
    height: 1rem;
    padding: 0.1rem 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      .icon {
        width: 0.4rem;
        height: 0.4rem;
      }
      .all {
        display: flex;
        margin-left: 0.35rem;
        align-items: center;
        h3 {
          font-size: 0.35rem;
          font-weight: 400;
        }
        span {
          font-size: 0.25rem;
          color: #ccc;
          margin-left: 0.1rem;
        }
      }
    }
    .right {
      width: 2.3rem;
      .el-button {
        width: 100%;
      }
    }
  }
  .list {
    padding-bottom: 1rem;
    .item {
      width: 7.5rem;
      height: 1rem;
      padding: 0.1rem 0.4rem 0.1rem 0.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        .index {
          width: 0.8rem;
          height: 0.8rem;
          line-height: 0.8rem;
          font-size: 0.35rem;
          color: #ccc;
          // text-align: center;
        }
        .content {
          width: 4.5rem;
          .title {
            font-size: 0.3rem;
            font-weight: 600;
            margin-bottom: 0.1rem;
            overflow:hidden;
	          text-overflow:ellipsis;
	          white-space:nowrap
          }
          .other {
            display: flex;
            font-size: 0.2rem;
            color: #666;
            .album {
              margin-left: 0.2rem;
            }
          }
        }
      }
      .right {
        .icon {
          width: 0.4rem;
          height: 0.4rem;
        }
      }
    }
  }
}
</style>