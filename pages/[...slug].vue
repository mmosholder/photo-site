<template>
  <section>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </section>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue';

const { slug } = useRoute().params

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join('/') : 'home',
  { version: 'published' }
)
</script>
