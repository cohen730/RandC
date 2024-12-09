<script setup>
import menu from "../restaurant_menu.js";
import CtaButton from "./CtaButton.vue";

const items = menu.items
defineProps({
  showBtn: {
    type: Boolean,
    required: false,
    default: false
  }
})

</script>

<template>
<h2>We Cater!</h2>
  <div class="content">
  <img src="../assets/hero-catering.png" alt="catering">
  </div>

  <div class="button">
    <cta-button v-if="showBtn" btn-copy="See More"/>
  </div>
</template>

<style scoped>
h2 {
  text-align: left;
}
.content {
  text-align: center;

  img {
    width: 100%;
    max-width: 1000px;
  }
}

div.button {
  justify-items: center;
}
@media screen and (width >= 650px) {
  h2 {
    text-align: center;
  }

}
</style>