<script setup>

defineProps({
  image: {
    type: String,
    required: true
  },
  headline: {
    type: String,
    required: true
  },
  subHead: {
    type: String,
    required: false
  },
  showBtn: {
    type: Boolean,
    required: false,
    default: false
  }
})

import CtaButton from "./CtaButton.vue";
</script>

<template>
  <section class="hero" :style="'background-image: url(../src/assets/' + image + ');'">
    <div class="content">
      <h1>{{ headline }}</h1>
      <h3 v-if="subHead">{{ subHead }}</h3>
      <cta-button v-if="showBtn" btn-route="menu" btn-copy="Order Online"/>
    </div>
  </section>
</template>

<style scoped>
/* Mobile first */
section.hero {
  height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  padding: 0 1rem 2rem;

  .content {
    color: white;
    position: absolute;
    bottom: 2rem;
  }

  /* Tablet and up */
  @media screen and (width >= 600px) {
    height: 600px;
  }

  /* Desktop and up */
  @media screen and (width >= 1000px) {
    height: 550px;

    .content {
      bottom: 3rem;
      right: 1rem;
      width: 40%;
    }
  }
}
</style>