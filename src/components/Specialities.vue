<script setup>
import menu from "../restaurant_menu.js";
import FoodPreviewCard from "./FoodPreviewCard.vue";
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
  <h2>Catalina's Specialties</h2>
  <section class="specialities">
    <food-preview-card :food-item="items[3]"/>
    <food-preview-card :food-item="items[5]"/>
    <food-preview-card :food-item="items[7]"/>
  </section>

  <div class="button">
    <cta-button v-if="showBtn" btn-route="menu" btn-copy="See Full Menu"/>
  </div>
</template>

<style scoped>
section.specialities {
  //border: 10px solid white;
  display: flex;
  gap: 1rem;
  flex-direction: column;
}

div.button {
  justify-items: center;
  margin-top: 2rem;
}

h2 {
  text-align: left;
}

@media screen and (width >= 650px) {
  section.specialities {
    flex-direction: row;

    > section {
      flex-basis: 33%;
    }
  }

  h2 {
    text-align: center;
  }
}

@media screen and (width >= 1000px) {

}

</style>