<template>
  <div class="vid">
    <vue-plyr ref="plyr" :options="options" v-if="options"></vue-plyr>
    <p class="vid-text" v-if="video.caption">{{ video.caption }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import Plyr from 'plyr';

const props = defineProps<{
  video: any,
  index: number
}>()

const options = ref<null | any>(null);
const plyr = ref<null | any>(null);

const player = computed(() => {
  return plyr.value?.player;
})

onMounted(() => {
  let opts = {
    id: props.video.video_id,
    autoplay: false,
    transparent: 0,
    loop: false,
    byline: false,
    portrait: false,
    title: false,
    speed: true
  };

  options.value = opts;
})
</script>
