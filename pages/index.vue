<template>
  <!-- <section> -->
    <!-- <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component"></component> -->
  <!-- </section> -->
</template>


<script>
// export default {
//   data () {
//     return { story: { content: {} } }
//   },

//     created() {
//     console.log('index loaded')
//   },

//   mounted() {
//     this.$storyblok.init();
//     this.$storyblok.on('change', () => {
//       location.reload(true)
//     })
//     this.$storyblok.on('published', () => {
//       location.reload(true)
//     })
//   },

//   asyncData (context) {
//     // Check if we are in the editor mode
//     // let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
//     // Load the JSON from the API
//     return context.app.$storyapi.get(`cdn/stories/home`, {
//       version: 'published'
//     }).then((res) => {
//       // console.log(res);
//       console.log(JSON.parse(JSON.stringify(res.data)));
//     }).catch((res) => {
//       console.log(res)
//       context.error({ statusCode: res.response.status, message: res.response.data })
//     })
//   }
// }
</script>
