<template>
  <section>
    <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component"></component>
  </section>
</template>


<script>
export default {
  data () {
    return { story: { content: {} } }
  },

    created() {
    console.log('index loaded')
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

  async asyncData (context) {
    const { data } = await context.app.$storyapi.get(`cdn/stories/home`,
      { version: context.isDev ? 'draft' : 'published'})

    return {story: data.story}
  }
}
</script>
