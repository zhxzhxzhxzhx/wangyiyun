import axios from "axios"
axios.defaults.baseURL = 'http://localhost:3000'

// 获取轮播图列表
export function getBannerList(type=2){
  return axios.get(`/banner?type=${type}`)
}
// 获取推荐歌单
export function getMusicList(limit=30){
  return axios.get(`/personalized?limit=${limit}`)
}
// 获取歌单详情
export function getMusicListDetail(id){
  return axios.get(`/playlist/detail?id=${id}`)
}
// 获取歌词
export function getLyric(id){
  return axios.get(`/lyric?id=${id}`)
}
export default {
  getBannerList,getMusicList,getMusicListDetail,getLyric
}