<template>
  <a class="home-grid-item grid-span-xs-6 grid-span-sm-3 grid-span-md-2" :href="`/${info.category_link.cached_url}`">
    <div class="home-grid-item-bg" :style="{ backgroundImage: 'url(' + info.image + ')' }"></div>
    <div class="home-grid-item-overlay" :style="'border: 10px solid ' + info.color + ';'">
      <h2 class="-front title-5 caps" :style="'color: ' + info.color">{{ info.title }}</h2>
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  info: any
}>()
</script>
