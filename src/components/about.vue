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

    <div class="content">
      <img src="../assets/family.jpg" alt="Family">
    </div>

    <h2>Who we are</h2>
    <p>At Catalina’s Cocina, we believe that food is more than just a meal—it’s a story, a connection, and a way to
      celebrate culture. Inspired by generations of authentic Mexican recipes, our restaurant is a heartfelt tribute
      to the vibrant traditions and rich flavors of Mexico.
    </p>
    <p>
      Catalina’s Cocina was founded with a deep love for family and heritage, honoring the legacy of Catalina and the
      recipes passed down through her family. These cherished dishes reflect the warmth, community, and shared moments
      that define Mexican culture. From bold spices to fresh, locally sourced ingredients, every plate tells a story
      of history and passion, reimagined for today’s diners.
    </p>
    <div class="content">
      <img src="../assets/cooking.jpg" alt="Cooking">
    </div>

    <h2>Our Mission</h2>
    <p>Our mission is to create a space where guests can experience the essence of Mexico—its flavors, its warmth, and
      its heart. Whether you’re enjoying a comforting classic or discovering something new, we’re here to make every
      bite memorable and meaningful.
    </p>
    <p>
      We’re more than a restaurant; we’re a celebration of heritage and the love of sharing it with others! Come join
      us at Catalina’s Cocina and let us bring the soul of Mexico to your table.
    </p>

  </primary-template>
</template>

<style scoped>
.content {
  text-align: center;
  //align-content: center;

  h2 {
    text-align: left;
  }

  img {
    width: 100%;
    max-width: 1000px;
  }
}

@media screen and (width >= 650px) {
  h2 {
    text-align: center;
  }

  p {
    text-align: center;
    margin: 2rem;
    //width: 75%;
  }
}

@media screen and (width >= 1000px) {
  p {
    text-align: center;
    margin: 1rem 4rem;
    //padding: 0 15rem;
  }
}
</style>