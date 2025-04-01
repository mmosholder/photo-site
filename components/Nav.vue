<template>
  <nav class="nav xs-pt-25 sm-pt-70 xs-pb-25 sm-pb-70 xs-pl-20 xs-pr-20 sm-pl-50 sm-pr-50">
    <div class="flex justify-space-between align-center">
      <a href="/" :class="['title-2 caps decoration-none link-title z10 position-relative ' + navClass]">
        Mike Darnay
      </a>
      <div class="title-4 caps text-dark pointer" v-if="!navOpen" @click="toggleNav">About</div>
      <div class="title-4 caps text-white z10 pointer" v-if="navOpen" @click="toggleNav">Close</div>
    </div>
    <transition name="open">
      <div v-if="navOpen" class="nav-overlay">
        <div class="grid">
          <div class="row">
            <div class="grid-col-xs-6 xs-mb-25 sm-mb-20 flex justify-space-between align-center">
              <h2 class="text-36 caps text-white sm-ml-20">About Mike</h2>
            </div>
            <div class="grid-col-xs-6 grid-col-sm-1 sm-ml-20"><img :src="navAbout.image" alt="Mike Darnay"></div>
            <div class="grid-col-xs-6 grid-col-sm-4 nav-overlay-text text-18 text-white">
              <StoryblokRichText :doc="navAbout.text"></StoryblokRichText>
            </div>
          </div>
        </div>
        <div class="nav-overlay-filter"></div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { StoryblokRichText } from "@storyblok/vue";

import { useNavStore } from '../store';


const navStore = useNavStore();
const { navAbout } = storeToRefs(navStore);

const navOpen = ref<boolean>(false);

const navClass = computed(() => {
  return navOpen.value ? 'text-white' : 'text-dark';
})

const toggleNav = () => {
  navOpen.value = !navOpen.value;
  const body = document.getElementsByTagName('body');
  const html = document.getElementsByTagName('html');

  if (navOpen.value) {
    body[0].classList.add('nav-open');
    html[0].classList.add('nav-open');
  } else {
    body[0].classList.remove('nav-open');
    html[0].classList.remove('nav-open');
  }
}
</script>
