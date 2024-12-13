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
  <h2>About Us</h2>
  <div class="content">
    <img src="../assets/family.jpg" alt="family">
  </div>
  <p>At Catalina’s Cocina, we bring the heart of Mexico to every dish we serve. Founded in honor of Catalina, our
    recipes are filled with the love, warmth, and culture passed down through the years.
</p>
  <p>
    Whether you’re savoring familiar favorites or discovering something new, we invite you to experience the essence of
    Mexico, where every meal feels like home.</p>
  <div class="button">
    <cta-button v-if="showBtn" btn-route="about" btn-copy="Read More!"/>

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
  margin-top: 2rem;
}

@media screen and (width >= 650px) {
  h2 {
    text-align: center;
  }
  p {
    text-align: center;
    margin: 2rem;
  }

}
</style>