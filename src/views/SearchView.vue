<template>
  <div class='SearchView'>
    <div class='searchTop'>
      <svg class='icon' aria-hidden='true' @click="$router.go(-1)">
        <use xlink:href='#icon-zuojiantou' />
      </svg>
      <input class='search' v-model="placeHolder" @keydown.enter="setHistory"/>
    </div>
    <img class='banner' src="../assets/img/swiper1.jpg" alt="">
    <div class='history'>
      <div class='left'>
        <span>历史</span>
      </div>
      <div class='content'>
        <el-tag v-for='(item,i) in historyList' :key='i' effect='dark'>{{ item.value }}</el-tag>
      </div>
      <div class='right'>
        <svg class='icon' aria-hidden='true' @click="clear">
          <use xlink:href='#icon-lajitong' />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      placeHolder: '陈奕迅',
      historyList: []
    }
  },
  methods: {
    setHistory() {
      let obj = {value: this.placeHolder}
      let j = this.historyList.some((item)=>{
        if (item.value === obj.value) {
          return true
        }
      })
      if (!j) {
        this.historyList.unshift(obj)
        this.saveHistoryList()
      }
},
    saveHistoryList(){
      window.localStorage.setItem('historyList',JSON.stringify(this.historyList))
    },
    clear(){
      this.historyList.shift()
      this.saveHistoryList()
    }
  },
  mounted() {
    if(window.localStorage.getItem('historyList') !== null){
      this.historyList = JSON.parse(window.localStorage.getItem('historyList'))
    }
  },
  updated(){
      console.log(this.placeHolder);
      console.log(this.historyList);
  },
  setup() {
    return {}
  }
};
</script>

<style lang="less" scoped>
.searchTop {
  display: flex;
  width: 7.5rem;
  height: 0.8rem;
  // background-color: pink;
  padding: 0 0.2rem;
  align-items: center;
  .icon {
    width: 0.6rem;
    height: 0.6rem;
  }
  .search {
    flex: 1;
    margin-left: 0.1rem;
    border: 0;
    height: 0.8rem;
    outline: none;
    font-size: 0.3rem;
    border-bottom: 1px solid #ccc;
  }
}
.banner {
  width: 7.5rem;
  padding: 0.2rem;
  height: 2rem;
  overflow: hidden;
  border-radius: 0.3rem;
}
.history {
  width: 7.5rem;
  height: 1rem;
  padding: 0.2rem 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    span {
      font-size: 0.3rem;
      font-weight: 600;
      margin-right: 0.15rem;
    }
  }
  .content {
    flex: 1;
    height: 1rem;
    display: flex;
    align-items: center;
    overflow: hidden;
    // background-color: pink;
    .el-tag {
      // width: 0.8rem;
      margin: 0.1rem;
      padding: 0.2rem;
      border: 0;
      background-color: #ccc;
    }
  }
  .right {
    .icon {
      width: 0.4rem;
      height: 0.6rem;
    }
  }
}
</style>