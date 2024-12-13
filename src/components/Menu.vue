<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import FoodPreviewCard from "./FoodPreviewCard.vue";
import menu from "../restaurant_menu.js";
import Hero from "./Hero.vue";

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
  <primary-template>
    <hero image="hero-tacos.jpg"
          headline="Our Menu"
    />
    <h2>Tacos</h2>
    <section class="cards">
      <food-preview-card :food-item="items[1]"/>
      <food-preview-card :food-item="items[5]"/>
      <food-preview-card :food-item="items[33]"/>
      <food-preview-card :food-item="items[34]"/>
      <food-preview-card :food-item="items[35]"/>
      <food-preview-card :food-item="items[36]"/>
      <food-preview-card :food-item="items[37]"/>
      <food-preview-card :food-item="items[38]"/>
    </section>
    <h2>Burritos</h2>
    <section class="cards">
      <food-preview-card :food-item="items[25]"/>
      <food-preview-card :food-item="items[26]"/>
      <food-preview-card :food-item="items[27]"/>
      <food-preview-card :food-item="items[28]"/>
    </section>
    <h2>Quesadillas</h2>
    <section class="cards">
      <food-preview-card :food-item="items[29]"/>
      <food-preview-card :food-item="items[30]"/>
      <food-preview-card :food-item="items[31]"/>
      <food-preview-card :food-item="items[32]"/>
    </section>
    <h2>Entrees</h2>
    <section class="cards">
      <food-preview-card :food-item="items[2]"/>
      <food-preview-card :food-item="items[3]"/>
      <food-preview-card :food-item="items[4]"/>
      <food-preview-card :food-item="items[6]"/>
      <food-preview-card :food-item="items[7]"/>
      <food-preview-card :food-item="items[9]"/>
      <food-preview-card :food-item="items[21]"/>
      <food-preview-card :food-item="items[39]"/>
      <food-preview-card :food-item="items[40]"/>
      <food-preview-card :food-item="items[41]"/>
      <food-preview-card :food-item="items[42]"/>
      <food-preview-card :food-item="items[43]"/>
    </section>
    <h2>Appetizers</h2>
    <section class="cards">
      <food-preview-card :food-item="items[14]"/>
      <food-preview-card :food-item="items[12]"/>
      <food-preview-card :food-item="items[10]"/>
      <food-preview-card :food-item="items[15]"/>
    </section>
    <h2>Sides</h2>
    <section class="cards">
      <food-preview-card :food-item="items[18]"/>
      <food-preview-card :food-item="items[19]"/>
      <food-preview-card :food-item="items[20]"/>
      <food-preview-card :food-item="items[8]"/>
    </section>
    <h2>Beverages</h2>
    <section class="cards">
      <food-preview-card :food-item="items[16]"/>
      <food-preview-card :food-item="items[17]"/>
      <food-preview-card :food-item="items[13]"/>
      <food-preview-card :food-item="items[11]"/>
    </section>
    <h2>Desserts</h2>
    <section class="cards">
      <food-preview-card :food-item="items[0]"/>
      <food-preview-card :food-item="items[22]"/>
      <food-preview-card :food-item="items[23]"/>
      <food-preview-card :food-item="items[24]"/>
    </section>

  </primary-template>
</template>

<style scoped>
section.cards {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  flex-direction: column;
}

h2 {
  text-align: left;
}

@media screen and (width >= 650px) {
  section.cards {
    flex-direction: row;

    > section {
      flex-basis: 20%;
    }
  }

  h2 {
    text-align: center;
  }
}

@media screen and (width >= 1000px) {
  > section {
    flex-basis: 20%;
  }
}
</style>