<template>
  <div>
    <Nav />
    <main id="main" role="main" :class="[this.$route.name == 'index' ? 'home' : '']">
      <nuxt/>
    </main>
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>

<style lang="scss">
@import '../assets/scss/styles.scss';
</style>
