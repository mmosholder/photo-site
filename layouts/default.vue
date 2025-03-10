<template>
  <div>
    <Nav />
    <main id="main" role="main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue'
</script>
