<template>
  <section>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const config = useRuntimeConfig();

const story = await useAsyncStoryblok(
  'home',
  { version: config.public.storyblokVersion }, // API Options
  { resolveLinks: "url" } // Bridge Options
);

if (story.value?.status) {
  throw createError({
    statusCode: story.value.status,
    statusMessage: story.value.response
  });
}
</script>
