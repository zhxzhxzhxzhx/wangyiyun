<template>
  <div>
    <MusicListTop :playList='state.playList'></MusicListTop>
    <MusicListContent :playList='state.playList'></MusicListContent>
  </div>
</template>

<script>
import {getMusicListDetail} from '../api/index'
import {onMounted,reactive} from 'vue'
import {useRoute} from 'vue-router'
import MusicListTop from '@/components/musicListTop.vue'
import MusicListContent from '../components/musicListContent.vue'
import { useStore } from 'vuex'
export default {
    setup() {
      const store = useStore()
      let state = reactive({
        data:{},
        playList:{creator:{},tracks:{}}
      })
        onMounted(async () => {
            let id = useRoute().query.id;
            console.log('当前歌单id: ' + id);
            const { data: re } = await getMusicListDetail(id);
            console.log('当前歌单信息: ' + re);
            state.data = re
            state.playList = re.playlist
            store.commit('setPlayList',re.playlist.tracks)
        });
        return {state}
    },
    components: { MusicListTop, MusicListContent }
}
</script>

<style>

</style>