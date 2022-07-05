import player from "./vueVidepPlayer.vue";
import _videojs from 'video.js'

const videojs = window.videojs || _videojs
  const install = function(Vue, options) {
    Vue.component("video-player", player);
  }

  const myPlugin = {player, videojs, install}


export default myPlugin;
