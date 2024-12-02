<script setup>
defineProps({
  btnCopy: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="cta-button">
    <a href="#">{{ btnCopy }}</a>
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