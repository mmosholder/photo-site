<template>
  <nav class="nav xs-pt-50 sm-pt-70 xs-pb-50 sm-pb-70 xs-pl-50 xs-pr-50">
    <div class="flex justify-space-between align-center">
      <a href="#" :class="['title-2 caps decoration-none link-title z10 position-relative ' + navClass]">
        Mike Darnay <br>
        Photography
      </a>
      <div class="title-4 caps text-dark" v-if="!navOpen" @click="toggleNav">About</div>
      <div class="title-4 caps text-white z10" v-if="navOpen" @click="toggleNav">Close</div>
    </div>
    <transition name="open">
        <div v-if="navOpen" class="nav-overlay">
          <div class="grid">
            <div class="row">
              <div class="grid-col-xs-6 xs-mb-25 sm-mb-50 flex justify-space-between align-center">
                <h2 class="text-36 caps text-white xs-ml-20">About Mike</h2>
              </div>
              <div class="grid-col-xs-6 grid-col-sm-4 nav-overlay-text text-18 text-white xs-ml-20" v-html="text"></div>
            </div>
          </div>
          <div class="nav-overlay-filter"></div>
        </div>
      </transition>
  </nav>
</template>

<script>
import marked from 'marked';

export default {
  data() {
    return {
      navOpen: false
    }
  },

  computed: {
    text () {
      return marked(this.$store.state.navAbout.text)
    },

    navClass() {
      if (this.navOpen) {
        return 'text-white';
      } else {
        return 'text-dark';
      }
    }
  },

  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
      const body = document.getElementsByTagName('body');
      const html = document.getElementsByTagName('html');

      if (this.navOpen) {
        body[0].classList.add('nav-open');
        html[0].classList.add('nav-open');
      } else {
        body[0].classList.remove('nav-open');
        html[0].classList.remove('nav-open');
      }
    }
  }
}
</script>
