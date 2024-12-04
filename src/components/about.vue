<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import menu from "../restaurant_menu.js"
</script>

<template>
  <primary-template>
<!--    <h1>This is my About page</h1>-->

<!--    <div v-for="(item, index) in menu.items" :key="index">-->
<!--      {{ item.name}}, {{ item.price }}, {{item.description}}, {{item.ingredients}}-->
<!--    </div>-->
    <img src="../assets/family.jpg" alt="Family">
    <h2>Who we are</h2>

  </primary-template>
</template>

<style scoped>
h2 {
  text-align: center;
}

img {
  width: 1000px;
  height: 600px;
}

</style>