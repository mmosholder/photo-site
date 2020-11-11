<template>
  <div class="vid">
    <vue-plyr ref="plyr" :options="options" v-if="options"></vue-plyr>
    <p class="vid-text" v-if="video.caption">{{ video.caption }}</p>
  </div>
</template>

<script>
import Plyr from 'plyr';

export default {
  props: {
    video: {
      type: Object,
      required: true
    },

    index: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      options: null
    }
  },

  computed: {
    player() {
      return this.$refs.plyr.player;
    }
  },

  mounted() {
    let options = {
      id: this.video.video_id,
      autoplay: false,
      transparent: 0,
      loop: false,
      byline: false,
      portrait: false,
      title: false,
      speed: true
    };

    this.options = options;
  }

};
</script>
