<script setup>
defineProps({
  btnCopy: {
    type: String,
    required: true
  },
  btnRoute: {
    type: String,
    required: true,
    default: 'home'
  }
})
</script>

<template>
  <div class="cta-button">
    <router-link :to=" { name: btnRoute }">{{ btnCopy }}</router-link>
  </div>
</template>

<style scoped>
.cta-button {
  display: block;

  a {
    background-color: #EA9637;
    color: white;
    text-decoration: none;
    border-radius: 10px;
    padding: 5px 10px;
  }
}</style>