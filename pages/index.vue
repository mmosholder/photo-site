<template>
  <section>
    <!-- <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component"></component> -->
  </section>
</template>


<script>
export default {
  data () {
    return { story: { content: {} } }
  },

  mounted() {
    this.$storyblok.init();
    this.$storyblok.on('change', () => {
      location.reload(true)
    })
    this.$storyblok.on('published', () => {
      location.reload(true)
    })
  },

  asyncData (context) {
    // Check if we are in the editor mode
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi.get('cdn/stories/home', {
      version: 'published'
    }).then((r) => {
      return JSON.parse(JSON.stringify(r.data));
    }).catch((r) => {
      context.error({ statusCode: r.response.status, message: r.response })
    })
  }
}
</script>
