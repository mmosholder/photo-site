<template>
  <div>
    <main id="main" role="main" :class="[this.$route.name == 'index' ? 'home' : '']">
      <nuxt/>
    </main>
  </div>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style lang="scss">
// @import '../assets/scss/styles.scss';
</style>
