<template>
  <div v-editable="blok">
    <section class="category sm-pt-25">
      <div class="grid">
        <div class="row">
          <h1 class="title-6 caps xs-mb-25 sm-mb-50 text-black grid-col-xs-6">{{blok.title}}</h1>
        </div>
        <div class="row">
          <div :class="[item.size == 'full' ? 'grid-col-xs-6 xs-mb-50 md-mb-100' : 'grid-col-xs-6 grid-col-sm-3 xs-mb-50 md-mb-100']" v-for="(item,i) in blok.images" :key="i">
            <div class="category-item">
              <img :src="sizedImage(item)" alt="item.caption" class="z1">
              <div v-if="item.caption.length > 0" class="z2 category-item-caption">
                <p class="text-right text-16 text-white">{{item.caption}}</p>
              </div>
            </div>
          </div>
          <!-- <div class="grid-col-xs-6 grid-col-sm-3 xs-mb-50 md-mb-100" v-for="(item,i) in blok.images" :key="i" v-if="item.size == 'half'">
            <div class="category-item relative">
              <img :src="item.image" alt="item.caption" class="z1">
              <div class="z2 absolute category-item-caption">
                <p class="text-right text-16 text-white">{{item.caption}}</p>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>

  export default {
    props: ['blok'],

    methods: {
      resizeHalf(image) {
        var imageService = '//img2.storyblok.com/'
        var path = image.replace('//a.storyblok.com', '')
        return imageService + '580x0' + path
      },

      resizeFull(image) {
        var imageService = '//img2.storyblok.com/'
        var path = image.replace('//a.storyblok.com', '')
        return imageService + '1440x0' + path
      },

      sizedImage(item) {
        if (item.size == 'half') {
          return this.resizeHalf(item.image);
        } else {
          return this.resizeFull(item.image);
        }
      }
    }
  }

</script>
