<template>
  <a class="home-grid-item grid-span-xs-6 grid-span-sm-3 grid-span-md-2" :href="`/${info.category_link.cached_url}`">
    <div class="home-grid-item-bg" :style="{backgroundImage: 'url(' + resize(info.image) + ')'}"></div>
    <div class="home-grid-item-overlay" :style="'border: 10px solid ' + info.color + ';'">
      <!-- <div class="home-grid-item-title"> -->
        <!-- <h2 class="-back title-5 text-black caps">{{info.title}}</h2> -->
        <h2 class="-front title-5 caps" :style="'color: ' + info.color">{{info.title}}</h2>
      <!-- </div> -->
    </div>
  </a>
</template>

<script>
export default {
  name: 'homeimageblock',
  props: ['info'],

  methods: {
    resize(image) {
      var imageService = '//img2.storyblok.com/'
      var path = image.replace('//a.storyblok.com', '')
      return imageService + '405x0' + path
    }
  }
}
</script>

