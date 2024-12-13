<script setup>
import CtaButton from "./CtaButton.vue";
import menu from "../restaurant_menu.js";

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
    <h2>Gallery</h2>
    <div class="gallery">
      <img src="../assets/beverages-jamaica.png" alt="jamaica drink">
      <img src="../assets/burrito-asada.png" alt="burrito asada">
      <img src="../assets/cooking.jpg" alt="cooking">
      <img src="../assets/beverages-jamaica.png" alt="jamaica drink">
      <img src="../assets/beverages-jamaica.png" alt="jamaica drink">
      <img src="../assets/beverages-jamaica.png" alt="jamaica drink">
      <img src="../assets/beverages-jamaica.png" alt="jamaica drink">
      <img src="../assets/beverages-jamaica.png" alt="jamaica drink">
      <img src="../assets/beverages-jamaica.png" alt="jamaica drink">
    </div>
  <div class="button">
    <cta-button v-if="showBtn" btn-route="gallery-page" btn-copy="View More"/>

  </div>
</template>

<style scoped>
.gallery {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: stretch;

  h2 {
    text-align: left;
  }

  img {
    margin: 1rem .5rem;
    max-width: 225px;
  }
}

@media screen and (width >= 650px) {
  .gallery {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;

    img {
      max-height: 250px;
      max-width: none;
      margin: 1rem .5rem;
    }

    h2 {
      text-align: center;
    }

  }
  div.button {
    justify-items: center;
    margin-top: 2rem;
  }
}
</style>