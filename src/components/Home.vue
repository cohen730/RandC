<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import Hero from "../components/Hero.vue";
import Specialities from "./Specialities.vue";
</script>

<template>
  <primary-template>
    <hero image="hero-brazilian-food.png"
          headline="From Our Roots to Your Table"
          sub-head="Experience the warmth, tradition, and vibrant flavors of Mexico"
          :show-btn="true"
    />

    <specialities
    :show-btn="true"/>


<!--    <gallery/>-->

  </primary-template>
</template>

<style scoped>
</style>