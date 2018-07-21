<template>
  <section class="home-grid" v-editable="blok" v-if="blok">
    <div class="grid">
      <div class="flex flex-wrap" v-if="blok.images.length">
        <homeimageblock v-for="(item, i) in blok.images" :key="i" :info="item" />
      </div>
    </div>
  </section>
</template>

<script>
  import homeimageblock from '~/components/HomeImageBlock'

  export default {
    component: { homeimageblock },
    props: ['blok']
  }
</script>
