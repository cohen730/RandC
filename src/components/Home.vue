<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import Hero from "../components/Hero.vue";
import Specialities from "./Specialities.vue";
import WeCater from "./we-cater.vue";
import AboutUs from "./about-us.vue";
import gallery from "./gallery.vue";
</script>

<template>
  <primary-template>
    <hero image="hero-brazilian-food.png"
          headline="From Our Roots to Your Table"
          sub-head="Experience the warmth, tradition, and vibrant flavors of Mexico"
          :show-btn="true"
    />

    <specialities :show-btn="true"/>
    <gallery
        :show-btn="true"/>
    <we-cater
        :show-btn="true"/>

    <about-us
        :show-btn="true"/>

  </primary-template>
</template>

<style scoped>
</style>