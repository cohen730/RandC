<script setup>
import menu from "../restaurant_menu.js";
import FoodPreviewCard from "./FoodPreviewCard.vue";

const items = menu.items
</script>

<template>
<section class="specialities">
  <food-preview-card :food-item="items[3]"/>
  <food-preview-card :food-item="items[5]"/>
  <food-preview-card :food-item="items[7]"/>
</section>
</template>

<style scoped>
section.specialities {
  border: 10px solid white;
}
</style>