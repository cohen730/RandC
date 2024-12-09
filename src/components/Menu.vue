<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import FoodPreviewCard from "./FoodPreviewCard.vue";
import menu from "../restaurant_menu.js";
import Hero from "./Hero.vue";

</script>

<template>
  <primary-template>
    <hero image="hero-tacos.jpg"
          headline="Our Menu"
    />

    <h2>Tacos</h2>
    <div class="cards">
      <div v-for="(item, index) in menu.items" :key="index">
        <food-preview-card :food-item="item"/>
      </div>
    </div>
  </primary-template>
</template>

<style scoped>
div.cards {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  //flex-direction: column;
  column-count: 3;
}
h2 {
  text-align: left;
}

@media screen and (width >= 600px) {
  h2 {
    text-align: center;
  }
}

@media screen and (width >= 1000px) {
  //height: 550px;
}
</style>